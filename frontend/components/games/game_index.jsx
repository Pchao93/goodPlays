import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import GameControls from './game_controls';
import GameIndexItem from './game_index_item';
import GameIndexContainer from './game_index_item';

class GameIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameHoverClass: 'game-list-item',
      hoverGameId: 0,
      loading: true
    };
    if (props.match.params.searchQuery) {


      let query = props.match.params.searchQuery.split('+').join(' ');
      props.search(query).then(()=> this.setState({loading:false}));
    }
    if (this.props.edit) {
      this.setState({
        name: this.props.collection.name,
      });
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleHover = this.toggleHover.bind(this);


  }

  toggleHelper(state, toggleClass, classOne, classTwo) {
    return state[toggleClass] === classOne ?
      classTwo : classOne;
  }

  toggleHover(id) {
    let hoverGameId = parseInt(id);
    
    let newClass = this.toggleHelper(
      this.state,
      'gameHoverClass',
      'game-list-item',
      'game-list-item dropdown-open');
    this.setState({
      gameHoverClass: newClass,
      hoverGameId
    });

  }

  componentDidMount() {
    // this.props.action();


    if (this.props.currentUser && !this.props.search) {
      this.setState({loading:true});

      this.props.action(this.props.currentUser.id).then(()=> this.setState({loading:false}));
    } else if ( !this.props.search ) {
      this.setState({loading:true});

      this.props.action().then(()=> this.setState({loading:false}));
    } else if (this.props.location.pathname === '/collections/my-games' && this.props.currentUser) {

      this.setState({loading:true});
      this.props.action(this.props.currentUser.id).then(()=> this.setState({loading:false}));

    }

  }

  componentWillReceiveProps (nextProps) {

    if (!this.props.search && nextProps.location.pathname !== this.props.location.pathname){

      if (!nextProps.search && nextProps.currentUser) {
        this.setState({loading:true});

        nextProps.action(nextProps.currentUser.id).then(()=> this.setState({loading:false}));
      }
    }
    if (nextProps.edit) {
      this.setState({
        name: nextProps.collection.name
      });
    }
  }

  handleInput(type) {
    return (e) => {
      if ((this.state[type].length < 30)) {
        this.setState({
          [type]: e.target.value
        });
      } else {
        this.setState({
          [type]: e.target.value.substring(0, 15)
        });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCollection({
      id: this.props.collection.id,
      name: this.state.name
    }).then(() => this.props.history.goBack(),
    ()=>(this.setState({
      name: this.props.collection.name
    })));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyCollection(this.props.collection.id)
      .then(() => this.props.history.push('/directory'));
  }

  render() {
    if (this.state.loading) {
      return (<div className='index-spinner'>
        <CircleLoader
          color={'#4b367c'}
          loading={this.state.loading}
        />
    </div>);
    }
    let {collection, headerText, collectionUser, currentUser, edit, reviews} = this.props;
    let gamesListItems = [];
    reviews = reviews ? reviews : [];
    if (this.props.games.length > 0) {
      gamesListItems = {};
      let n = 0;
      this.props.games.forEach((game) =>{

        if (game !== undefined) {
          let liStyle = {animationDelay: n,};
          let divClass;
          if (this.state.hoverGameId === game.id) {
            divClass = this.state.gameHoverClass;
          } else {
            divClass = 'game-list-item';
          }


          gamesListItems[game.id] = (
            <GameIndexItem
              key={game.id}
              style={liStyle}
              toggleHover={this.toggleHover}
              divClass={divClass}
              review={currentUser ? reviews.filter(review => review.game_id === game.id && review.user_id === currentUser.id)[0] : undefined}
              game={game}
              hoverGameId={this.state.hoverGameId}
              />
          );
          n += 1;
        }
      });
    }
    //Link to user profiles in the future
    let width;
    if (edit) {
      width = (this.state.name.length * 13.5) + 'px';
    }

    let display = Object.values(gamesListItems).length > 0 ? Object.values(gamesListItems) :
        (this.props.search ? (<span className='empty-index-message' >No results found :(</span>) :
          <Link to='/directory' className='empty-index-message' >No games yet, why don't you take a look?</Link>);
    return (
      <div className='game-index-container'>
        <div className='game-index-header'>
          <div className='game-index-title'>{collectionUser &&
            <Link to={ collectionUser.id ? `/users/${collectionUser.id}` : '/directory'} className='index-user'>{collectionUser.username} </Link>}
            {collectionUser && headerText !== '' && <span className="pointer">{">"}</span> }
            <span className='index-title'>
            {edit && !["Want to Play", "Have Played", "Playing"].includes(collection.name) ? (<div className="edit-collection-form">
                <input
                  ref="input"
                  onChange={this.handleInput('name')}
                  onFocus={()=>this.refs.input.select()}

                  className='collection-edit'
                  type='text'
                  style={{width, 'minWidth': '100px'}}
                  value={this.state.name}></input>
                <button onClick={this.handleSubmit} className='collection-edit-submit btn' >Done</button>
            </div>) : (
              headerText) }
            </span>

          </div>
          {edit && ["Want to Play", "Have Played", "Playing"].includes(collection.name) && <button onClick={this.handleSubmit} className='default collection-edit-submit btn' >Done</button>}
          {!edit && collection && collection.name && currentUser &&
            collection.user_id === currentUser.id &&
              <div className='game-collection-controls'>
                <Link className='edit-collection btn' to={`${this.props.location.pathname}/edit`}>Edit Collection</Link>
                { !["Want to Play", "Have Played", "Playing"].includes(collection.name) &&
                  <button onClick={this.handleDelete} className='delete-collection btn'>Delete Collection</button>}


              </div>
          }


        </div>
        <ul className='game-index-list'>
          {display}
        </ul>
      </div>
    );
  }
}

export default GameIndex;
