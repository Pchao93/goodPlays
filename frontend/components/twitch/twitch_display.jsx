import React from 'react';

class TwitchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {streams: undefined};
    this.props.fetchStreams(this.props.game);
  }

  componentDidMount() {
    // this.props.fetchStreams(this.props.game);

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
    console.log(this.props.streams);
    let streams = this.state.streams ? this.state.streams : this.props.streams;

    let streamListItems = this.props.streams.map(stream => (
      <li key={stream._id} className='twitch-list-item'>
        <iframe
          src={`https://player.twitch.tv/?channel=${stream.channel.display_name}&muted=true&autoplay=false`}
          height="180"
          width="320"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
        <div className='stream information'>
          <span className='display-name'>Channel: {stream.channel.display_name}</span>
          <span className='stream-viwers'>Viewers: {stream.viewers}</span>
        </div>
      </li>));

    return (
      <ul className='stream-display-list'>
        <h1 className='stream-header'>Top Streams</h1>
        {streamListItems}
      </ul>
    );
  }
}

export default TwitchDisplay;
