import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {src, width, height, poster, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.width = width;
    video.height = height;
    video.poster = poster;
    video.muted = muted;

    video.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onpause = null;
    video.src = ``;
    video.width = ``;
    video.height = ``;
    video.poster = ``;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
      />
    );
  }

  componentDidUpdate() {
    const {isPlaying, stopOnPause} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      if (stopOnPause) {
        video.currentTime = 0;
        video.load();
      }
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropValidator.IS_PLAYING,
  src: PropValidator.SRC,
  width: PropValidator.WIDTH,
  height: PropValidator.HEIGHT,
  poster: PropValidator.POSTER,
  muted: PropValidator.MUTED,
  stopOnPause: PropValidator.STOP_ON_PAUSE
};

export default VideoPlayer;
