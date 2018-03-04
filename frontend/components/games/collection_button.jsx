import React from 'react';
import {Link} from 'react-router-dom';
import SessionContainer from '../session/session_container';
import onClickOutside from 'react-onclickoutside';

class CollectionButton extends React.Component {
  constructor(props) {
    super(props);

    let collectionButtonClass;

    this.state = {
      collectionDropdownClass: 'collection-button-dropdown hidden',
      collectionButtonClass: this.props.defaultCollection ? 'selected-collection-button' : 'default-collection-button',
      auth: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);





  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      collectionButtonClass: nextProps.defaultCollection ?
        'selected-collection-button' : 'default-collection-button'
    });
  }

  handleClickOutside(e) {
    if (this.state.collectionDropdownClass === 'collection-button-dropdown') {
      this.toggleDropdown(this.props.hoverGameId);
    }
  }

  toggleHelper(toggleClass, classOne, classTwo) {
    return this.state[toggleClass] === classOne ?
      classTwo : classOne;
  }

  toggleDropdown(id) {

    if (this.props.currentUser && id && this.props.toggleHover) {
      this.props.toggleHover(id);
    }
    if (this.props.currentUser) {
      let newClass = this.toggleHelper(
        'collectionDropdownClass',
        'collection-button-dropdown hidden',
        'collection-button-dropdown');
      this.setState({
        collectionDropdownClass: newClass
      });
    } else {
      this.props.receiveSessionErrors({responseJSON: ["You must be signed in to add a game to a collection."]});
      this.props.openSessionForm();

    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({
          [type]: e.target.value
      });
    };
  }

  handleDefault(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.receiveSessionErrors({responseJSON: ["You must be signed in to add a game to a collection."]});
      this.props.openSessionForm();
    } else if (!this.props.defaultCollection) {
      this.props.addGameCollection(this.props.game.id, this.props.collections[0].id);
    } else if (this.props.defaultCollection) {
      this.props.removeGameCollection(this.props.game.id, this.props.defaultCollection.id);

    }
  }

  handleCreate(e, collectionId) {
    e.preventDefault();
    this.props.addGameCollection(this.props.game.id, e.target.getAttribute('data'));
    // this.toggleDropdown(e);

  }

  handleDestroy(e) {
    e.preventDefault();
    this.props.removeGameCollection(this.props.game.id, e.target.getAttribute('data'));
    // this.toggleDropdown(e);

  }

  render () {
    let { game, edit, removeGameCollection,
      collectionId, collections, addGameCollection, defaultCollection } = this.props;
    let options = [];
    if (collections) {
      //Recaftor into own component
      options = collections.map((collection => {

        if (collection.id === parseInt(collectionId)) {

          return null;
        }
        return ( <li key={collection.id}>
          { !collection.games.includes(game.id) ? <span
            onClick={(e) => this.handleCreate(e)}
            data={collection.id}
            className='collection-form-toggle'> + </span> :

            <span
              onClick={(e) => this.handleDestroy(e)}
              data={collection.id}
              className='collection-form-toggle'> - </span>}
          <span
            className='collection-option-label'>
            {collection.name}
          </span>

        </li>);
      }));
    }

    options.filter(li => li !== null);
    return (
      <div className={edit ? 'collection-button red' : 'collection-button'}>

        <button
          className={edit ?
            'default-collection-button red' :
              this.state.collectionButtonClass}

          onClick={edit ?
            () => removeGameCollection(game.id, collectionId) :
              (e) => this.handleDefault(e)}
        >
          {edit ? 'Remove from Collection' :
            (defaultCollection ? defaultCollection.name : 'Want to Play')}
        </button>
        <button
          data={game.id}
          className={edit ?
            'dropdown-button red' : 'dropdown-button'}
          onClick={(e) => this.toggleDropdown(game.id)}
        >

          <div

            onClick={(e) => this.toggleDropdown(game.id)}
            className={edit ? 'arrow-down red' : 'arrow-down'}></div>
        </button>
        <ul className={this.state.collectionDropdownClass}>
          {options}
        </ul>
      </div>
    );
  }

}
export default onClickOutside(CollectionButton);
