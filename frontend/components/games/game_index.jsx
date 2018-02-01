import React from 'react';
import GameControls from './game_controls';
import GameIndexItem from './game_index_item';

class GameIndexContainer extends React.Component {

  constructor(props) {
    super(props);

    this.props.action();


  }

  componentDidMount() {
    this.props.action();

  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname){
      this.props.action();
    }
  }

  render() {

    let gamesListItems = [];
    if (this.props.games.length > 0) {
      gamesListItems = [];
      this.props.games.forEach((game) =>{

        if (game !== undefined) {
          gamesListItems.push(<GameIndexItem key={game.id} game={game}/>);
        }
      });
    }

    return (
      <div className='game-index-container'>
        <div className='game-index-header'>
          {this.props.headerText}
        </div>
        <ul className='game-index-list'>
          {gamesListItems}
        </ul>
      </div>
    );
  }
}

export default GameIndexContainer;
