import React from 'react';
import {Link} from 'react-router-dom';
import GameControls from './game_controls';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props.currentUser.id);
    // console.log(this.props.action);
    if (this.props.currentUser) {
      this.props.action(this.props.currentUser.id);
    } else {
      this.props.action();
    }

    if (this.props.edit) {
      this.state = {
        name: this.props.collection.name
      };
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    // this.props.action();

  }

  componentWillReceiveProps (nextProps) {

    if (nextProps.location.pathname !== this.props.location.pathname){
      // console.log(this.props.currentUser);
      if (nextProps.currentUser) {
        nextProps.action(nextProps.currentUser.id);
      }
    } else if (this.props.games.length !== nextProps.games.length){
      // nextProps.action();
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
    let {collection, headerText, collectionUser, currentUser, edit, reviews} = this.props;
    let gamesListItems = [];
    reviews = reviews ? reviews : [];
    if (this.props.games.length > 0) {
      gamesListItems = [];
      this.props.games.forEach((game) =>{

        if (game !== undefined) {
          gamesListItems.push(<GameIndexItem key={game.id} review={reviews.filter(review => review.game_id === game.id)[0]} game={game}/>);
        }
      });
    }
    //Link to user profiles in the future
    let width;
    if (edit) {
      width = (this.state.name.length * 13.5) + 'px';
    }
    return (
      <div className='game-index-container'>
        <div className='game-index-header'>
          <div className='game-index-title'>{collectionUser &&
            <Link to={`/users/${collectionUser.id}`} className='index-user'>{collectionUser.username} </Link>}
            {collectionUser && <span className="pointer">{">"}</span> }
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
          {gamesListItems}
        </ul>
      </div>
    );
  }
}

export default GameIndex;
