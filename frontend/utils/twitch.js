import {receiveStreams} from '../actions/twitch';

export const getStreams = game => {
  
  return $.ajax({
      type: 'GET',
      url: `https://api.twitch.tv/kraken/streams/?game=${game.title.split(' ').join('+')}&limit=5&`,
      headers: {
        'Client-ID': 'na8g0pa4bcs9mfi1qjwklfkg2gcvq9'
      },
    });
  };
