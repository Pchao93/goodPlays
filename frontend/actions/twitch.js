import { getStreams } from '../utils/twitch';

export const RECEIVE_STREAMS = 'RECEIVE_STREAMS';
export const RECEIVE_STREAM_ERRORS = 'RECEIVE_STREAM_ERRORS';
export const CLEAR_STREAM_ERRORS = 'CLEAR_STREAM_ERRORS';

const receiveStreams = (payload, gameId) => {
  
  return {
    type: RECEIVE_STREAMS,
    streams: payload.streams,
    streamCount: payload._total,
    gameId,
  };
};

const receiveStreamErrors = (errors) => ({
  type: RECEIVE_STREAM_ERRORS,
  errors,
});

const clearStreamErrors = () => ({
  type: CLEAR_STREAM_ERRORS
});

export const fetchStreams = game => dispatch => getStreams(game)
  .then(streams => dispatch(receiveStreams(streams, game.id)),
    errors => dispatch(receiveStreamErrors(errors)));
