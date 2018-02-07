import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/twitch';
import { withRouter } from 'react-router-dom';
import TwitchDisplay from './twitch_display';


const mapStateToProps = (state, ownProps) => {
  let currentUser;
  let streams = [];
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }
  let game = ownProps.game;
  if (game.streams) {
     game.streams.forEach(streamId => {
       if (state.entities.streams[streamId]) {
         streams.push(state.entities.streams[streamId]);
       }
     });
  }
  return ({
    game,
    currentUser,
    streams,
  });
};


const mapDispatchToProps = dispatch => ({
  fetchStreams: game => dispatch(fetchStreams(game)),


});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TwitchDisplay));
