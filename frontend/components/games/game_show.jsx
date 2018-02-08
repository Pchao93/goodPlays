import React from 'react';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

import GameInfoBox from './game_info_box';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewListItem from '../reviews/review_list_item';
import ReviewIndexContainer from '../reviews/review_index_container';
import TwitchDisplayContainer from '../twitch/twitch_display_container';

class GameShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      displayForm: false,
      loading: true
    });
    this.props.getOneGame(this.props.match.params.gameId).then(()=> this.setState({loading:false}));
    this.openForm = this.openForm.bind(this);
  }

  openForm(e) {
    e.preventDefault();
    this.setState({displayForm: true});
  }

  closeForm(e) {
    this.setState({displayForm: false});
  }

  handleDelete() {

  }

  // componentDidMount() {
  //
  //   this.props.getOneGame(this.props.match.params.gameId);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.gameId !== this.props.match.params.gameId) {
      this.setState({loading:true});
      this.props.getOneGame(nextProps.match.params.gameId).then(()=> this.setState({loading:false}));
    }
  }

  render() {
    if (this.state.loading) {
      return (<div className='index-spinner'>
        <CircleLoader
          color={'#4b367c'}
          loading={this.state.loading}
        />
    </div>);
    }
    let { game, review, currentUser, reviews } = this.props;
    let platforms;
    let genres;
    if (game){

      platforms = game.platforms.slice(0, 4).map(platform => (
        <li className='platform-badge' key={platform}>{platform}</li>
      ));
      genres = game.genres.slice(0, 3).map((genre, idx) => (
        <li className='platform-badge' key={idx}>{genre}</li>
      ));

    }
    return  game === undefined ? '' : (
      <div className='show-plus-streams'>
        <div className='game-show-container'>
          <GameInfoBox
            openForm={this.openForm}
            platforms={platforms}
            genres={genres}
            game={game}
            review={review}/>
          {this.state.displayForm &&
            <ReviewFormContainer
              closeForm={(e) => this.closeForm(e)}
              game={game}
              review={review}/> }
          <ReviewIndexContainer toggleEdit={this.openForm} />


        </div>

        <TwitchDisplayContainer game={game} />
      </div>
    );
  }
}


export default GameShow;
