import React from 'react';
import {Link} from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

class SideBarCollections extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputClass: "collection-input hidden",
      value: "",
      loading: true,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.update = this.update.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.toggleHelper = this.toggleHelper.bind(this);

    if (this.props.currentUser) {
      this.props.getAllCollections(this.props.currentUser.id)
      .then(()=> this.setState({loading: false}));
    }

  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser && this.props.currentUser !== nextProps.currentUser){
      this.setState({loading: true});
      nextProps.getAllCollections(nextProps.currentUser.id).then(()=> this.setState({loading: false}));
    }


  }

  shouldComponentUpdate(nextProps, nextState) {

    let { collections } = this.props;
    let nextCollections = nextProps.collections;
    let totalGames = 0;
    let nextTotalGames = 0;
    if (collections.length !== nextCollections.length) {
      return true;
    }
    collections.forEach((collection, idx) => {
      totalGames += collection.count;
    });
    nextCollections.forEach((collection, idx) => {
      nextTotalGames += collection.count;
    });
    if (this.state.loading && !nextState.loading) {
      return true;
    }
    if (this.state.inputClass !== nextState.inputClass) {
      return true;
    }
    if (this.state.value !== nextState.value) {
      return true;
    }

    return  totalGames !== nextTotalGames;
  }

  update(attribute) {
    return (e) => {
      if ((this.state[attribute].length < 45)) {
        this.setState({
          [attribute]: e.target.value
        });
      } else {
        this.setState({
          [attribute]: e.target.value.substring(0, 45)
        });
      }
    };
  }

  toggleForm(e) {

    e.preventDefault();
    let newClass = this.toggleHelper(
      'inputClass',
      'collection-input hidden',
      'collection-input');

    this.setState({
      inputClass: newClass
    });
    if (newClass ==='collection-input hidden') {
      if (this.state.value) {
        this.props.createCollection({
          name: this.state.value
        });
        this.setState({
          value: "",
        });
      }
    }
  }

  toggleHelper(toggleClass, classOne, classTwo) {
    return this.state[toggleClass] === classOne ?
      classTwo : classOne;
  }

  closeForm(e) {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      let newClass = this.toggleHelper(
        'inputClass',
        'collection-input hidden',
        'collection-input');
      this.setState({
        inputClass: newClass
      });
    }
  }
  render() {

    let { collections, currentUser } = this.props;
    if (!currentUser) {
      return <div></div>;
    }
    let totalGames = 0;
    let names = collections.map((collection, idx) => {
      if (idx < 3) {totalGames += collection.count;}
      return (
        <li key={collection.id}>
          <Link to={`/collections/${collection.id}`}>
            <span className="collection-name">{collection.name}{ idx > 2 && ':'}</span>
            <span className='game-count'>{collection.count} game{collection.count !== 1 && 's'}</span>
          </Link>
        </li>
      );
    });
    return (
      <div className='side-bar-collections'>
        <div className='side-bar-header'>Collections</div>
        <ul className='collections-list'>
          <li>
            <Link to={`/collections/my-games`}>
              <span className="collection-name">My Games:</span>
              {!this.state.loading && <span className='game-count'>{totalGames} game{totalGames !== 1 && 's'}</span>}
              {this.state.loading && <div className='side-bar-spinner'>
                <BeatLoader
                  size={5}
                  color={'#4b367c'}
                  loading={this.state.loading}
                />
            </div>}

            </Link>

          </li>
          {names}
        </ul>
        <form onSubmit={(e) => this.toggleForm(e)} className="new-collection-form">
          <div className={this.state.inputClass}>

            <input
              onChange={this.update("value")}
              type="text"
              placeholder="New Collection"
              value={this.state.value}></input>
          </div>
          <button><span className='collection-form-toggle'> + </span></button>
            {false && <p className={this.state.inputClass}>Add a Collection</p> }

        </form>
      </div>
    );
  }
}

export default SideBarCollections;
