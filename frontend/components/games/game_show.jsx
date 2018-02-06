import React from 'react';
import { Link } from 'react-router-dom';
import GameInfoBox from './game_info_box';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewListItem from '../reviews/review_list_item';

class GameShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      displayForm: false,
    });
    this.props.getOneGame(this.props.match.params.gameId);
    this.openForm = this.openForm.bind(this);
  }

  openForm(e) {
    e.preventDefault();
    this.setState({displayForm: true});
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({displayForm: false});
  }

  // componentDidMount() {
  //
  //   this.props.getOneGame(this.props.match.params.gameId);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.gameId !== this.props.match.params.gameId) {
      this.props.getOneGame(nextProps.match.params.gameId);
    }
  }

  render() {
    let { game, review, currentUser, reviews } = this.props;
    let platforms;
    

    let reviewListItems = reviews.map(_review => (
      <ReviewListItem key={_review.id} review={_review} />
    ));

    if (game){
      platforms = game.platforms.slice(0, 4).map(platform => (
        <li className='platform-badge' key={platform}>{platform}</li>
      ));
    }
    return  game === undefined ? '' : (
      <div className='game-show-container'>
        <GameInfoBox
          openForm={this.openForm}
          platforms={platforms}
          game={game}
          review={review}/>
        {this.state.displayForm &&
          <ReviewFormContainer
            closeForm={(e) => this.closeForm(e)}
            game={game}
            review={review}/> }
      </div>
    );
  }
}


export default GameShow;
