import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {src, width, height, poster, muted, looped, onTimeUpdate, onStopPlaying} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.width = width;
    video.height = height;
    video.poster = poster;
    video.muted = muted;
    video.ontimeupdate = () => onTimeUpdate(video.currentTime);
    if (!looped) {
      video.onended = () => onStopPlaying();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.ontimeupdate = null;
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
    const {isPlaying, stopOnPause, onTimeUpdate} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      if (stopOnPause) {
        video.currentTime = 0;
        onTimeUpdate(0);
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
  looped: PropValidator.LOOPED,
  stopOnPause: PropValidator.STOP_ON_PAUSE,
  onTimeUpdate: PropValidator.ON_TIME_UPDATE,
  onStopPlaying: PropValidator.ON_STOP_PLAYING
};

export default VideoPlayer;
