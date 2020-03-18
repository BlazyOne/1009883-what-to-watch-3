import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

class FullScreenPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._playerWrapperRef = React.createRef();
  }

  render() {
    const {
      film: {id, title, video: videoSrc},
      changeScreen,
      isPlaying,
      progress,
      duration,
      renderVideoPlayer,
      onStartPlaying,
      onStopPlaying
    } = this.props;

    const timeLeft = duration - progress;
    const timeLeftHours = Math.floor(timeLeft / 3600);
    const timeLeftMinutes = Math.floor((timeLeft % 3600) / 60);
    const timeLeftSeconds = Math.floor(timeLeft % 60);
    const timeLeftString = `${timeLeftHours}:${timeLeftMinutes}:${timeLeftSeconds}`;

    const progressPercent = (progress / duration) * 100;

    return (
      <div className="player" ref={this._playerWrapperRef}>
        {renderVideoPlayer({
          src: videoSrc,
          width: `auto`,
          height: `auto`,
          poster: `img/player-poster.jpg`,
          muted: false,
          looped: false,
          stopOnPause: false,
          videoClass: `player__video`
        })}

        <button
          type="button"
          className="player__exit"
          onClick={() => {
            changeScreen(id);
          }}
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressPercent} max="100"></progress>
              <div className="player__toggler" style={{left: progressPercent + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeLeftString}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                if (isPlaying) {
                  onStopPlaying();
                } else {
                  onStartPlaying();
                }
              }}
            >
              {isPlaying ?
                <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>
                :
                <React.Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </React.Fragment>}
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                if (!document.fullscreenElement) {
                  this._playerWrapperRef.current.requestFullscreen();
                } else {
                  document.exitFullscreen();
                }
              }}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div >
      </div >
    );
  }
}

FullScreenPlayer.propTypes = {
  film: PropValidator.FILM,
  changeScreen: PropValidator.CHANGE_SCREEN,
  isPlaying: PropValidator.IS_PLAYING,
  progress: PropValidator.PROGRESS,
  duration: PropValidator.DURATION,
  renderVideoPlayer: PropValidator.RENDER_VIDEO_PLAYER,
  onStartPlaying: PropValidator.ON_START_PLAYING,
  onStopPlaying: PropValidator.ON_STOP_PLAYING
};

export default FullScreenPlayer;
