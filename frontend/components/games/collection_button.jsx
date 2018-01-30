import React from 'react';


class CollectionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { game } = this.props;
    return (
      <div className='collection-button'>
        <button className='default-collection-button'>Want to Play</button>
        <button className='dropdown-button'>
          <div className='arrow-down'></div>
        </button>
        <ul className='collection-button-dropdown hidden'>
          <li className='collection-option default'>
          </li>
          <li className='collection-option default'>
          </li>
          <li className='collection-option'>
          </li>
          <li className='collection-option'>
          </li>
          <li className='collection-option'>
          </li>
        </ul>
      </div>
    );
  }

}
export default CollectionButton;
