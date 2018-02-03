import React from 'react';
import {Link} from 'react-router-dom';

class CollectionButton extends React.Component {
  constructor(props) {
    super(props);

    let collectionButtonClass;

    this.state = {
      collectionDropdownClass: 'collection-button-dropdown hidden',
      collectionButtonClass: this.props.defaultCollection ? 'selected-collection-button' : 'default-collection-button'
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleDefault = this.handleDefault.bind(this);


  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      collectionButtonClass: nextProps.defaultCollection ?
        'selected-collection-button' : 'default-collection-button'
    });
  }

  closeForm(e) {
    if (e.currentTarget === e.target) {
      this.props.history.push(this.props.match.params[0]);
      this.props.clearSessionErrors();
    }
  }

  toggleHelper(toggleClass, classOne, classTwo) {
    return this.state[toggleClass] === classOne ?
      classTwo : classOne;
  }

  toggleDropdown() {

    if (!this.props.currentUser) {

      this.props.history.push(`${this.props.location.pathname}/login`);
    } else {
      let newClass = this.toggleHelper(
        'collectionDropdownClass',
        'collection-button-dropdown hidden',
        'collection-button-dropdown');
      this.setState({
        collectionDropdownClass: newClass
      });
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
      this.props.history.push(`${this.props.location.pathname}/login`);
    }
    else if (!this.props.defaultCollection) {
      this.props.addGameCollection(this.props.game.id, this.props.collections[0].id);

    }
  }

  handleCreate(e, collectionId) {
    e.preventDefault();
    this.props.addGameCollection(this.props.game.id, e.target.getAttribute('data'));

  }

  handleDestroy(e) {
    e.preventDefault();
    console.log(e.target.props);
    this.props.removeGameCollection(this.props.game.id, e.target.getAttribute('data'));

  }

  render () {
    let { game, edit, removeGameCollection,
      collectionId, collections, addGameCollection, defaultCollection } = this.props;
    let options = [];
    if (collections) {
      options = collections.map((collection => {
        if (collection.id === collectionId) {
          return null;
        }
        return ( <li key={collection.id}>
          <span
            onClick={(e) => this.handleCreate(e)}
            data={collection.id}
            className='collection-form-toggle'> + </span>
          <span
            className='collection-option-label'>
            {collection.name}
          </span>
          <span
            onClick={(e) => this.handleDestroy(e)}
            data={collection.id}
            className='collection-form-toggle'> - </span>
        </li>);
      }));
    }

    options.filter(li => li !== null);
    return (
      <div className='collection-button'>
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
          className={edit ?
            'dropdown-button red' : 'dropdown-button'}
          onClick={this.toggleDropdown}
        >

          <div className='arrow-down'></div>
        </button>
        <ul className={this.state.collectionDropdownClass}>
          {options}
        </ul>
      </div>
    );
  }

}
export default CollectionButton;
