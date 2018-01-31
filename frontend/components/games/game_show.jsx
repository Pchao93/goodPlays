import React from 'react';
import { Link } from 'react-router-dom';
import GameInfoBox from './game_info_box';

class GameShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getOneGame(this.props.match.params.gameId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.gameId !== this.props.match.params.gameId) {
      this.props.getOneGame(nextProps.match.params.gameId);
    }
  }

  render() {
    let { game } = this.props;
    let platforms;

    if (game){
      platforms = game.platforms.slice(0, 4).map(platform => (
        <li className='platform-badge' key={platform}>{platform}</li>
      ));
    }
    return  game === undefined ? null : (
      <div className='game-show-container'>
        <GameInfoBox platforms={platforms} game={game} />

      </div>
    );
  }
}






export default GameShow;
