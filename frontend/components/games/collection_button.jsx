import React from 'react';


class CollectionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collectionDropdownClass: 'collection-button-dropdown hidden'
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    let newClass = this.toggleHelper(
      'collectionDropdownClass',
      'collection-button-dropdown hidden',
      'collection-button-dropdown');
    this.setState({
      collectionDropdownClass: newClass
    });
  }

  handleInput(type) {
    return (e) => {
      this.setState({
          [type]: e.target.value
      });
    };
  }

  handleClick(e) {
    this.props.addGameCollection(this.props.game.id, e.target.value);
  }

  render () {
    let { game, edit, removeGameCollection, collectionId, collections } = this.props;

    let options = collections.map((collection => {
      if (collection.id === collectionId) {
        return null;
      }
      return ( <li>
        <span onClick={(e) => this.handleCreate(e)} className='collection-form-toggle'> + </span>
        <span className='collection-option-label'>{collection.name}</span>
        <span onClick={(e) => this.handleDestroy(e)} className='collection-form-toggle'> - </span>
      </li>);
    }));

    options.filter(li => li !== null);
    return (
      <div className='collection-button'>
        <button
          className={edit ?
            'default-collection-button red' :
              'default-collection-button'}
          onClick={edit ? () => removeGameCollection(game.id, collectionId) : () => {}}
              >
          {edit ? 'Remove from Collection' : 'Want to Play'}
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
