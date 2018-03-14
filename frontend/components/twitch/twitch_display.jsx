import React from 'react';

class TwitchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {streams: undefined};

  }

  componentDidMount() {
    this.props.fetchStreams(this.props.game);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.streams && !nextProps.streams) {
      this.setState({
        streams: this.props.streams
      });
    }

  }

  shouldComponentUpdate() {
    if (this.props.streams && this.props.streams.length > 1) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    let streams = this.state.streams ? this.state.streams : this.props.streams;

    let streamListItems = this.props.streams.map(stream => (
      <li key={stream._id} className='twitch-list-item'>
        <iframe
          src={`https://player.twitch.tv/?channel=${stream.channel.name}&muted=true&autoplay=false`}
          height="270"
          width="480"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
        <div className='stream-information'>
          <span className='channel-label'>Channel: </span><span className='display-name'>{stream.channel.display_name}</span>
          <span className='channel-label'>Viewers: </span><span className='stream-viwers'>{stream.viewers}</span>
        </div>
      </li>));

    return (
      <ul className='stream-display-list'>
        <h1 className='stream-header'>Top Streams</h1>
        {streamListItems.length > 0 ? streamListItems : <div className='no-stream-text'>No streams found. <a target="_blank" className="no-stream-link" href='https://twitch.tv'>Why don't you start?</a></div>}
      </ul>
    );
  }
}

export default TwitchDisplay;
