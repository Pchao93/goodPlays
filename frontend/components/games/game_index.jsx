import React from 'react';
import GameControls from './game_controls';
import GameIndexItem from './game_index_item';

class GameIndexContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllGames();
  }

  render() {
    let gamesListItems = this.props.games.map((game) =>(
        <GameIndexItem key={game.id} game={game}/>
    ));



    return (
      <div className='game-index-container'>
        <div className='game-index-header'>
          Top Games
        </div>
        <ul className='game-index-list'>
          {gamesListItems}
        </ul>
      </div>
    );
  }
}

export default GameIndexContainer;
