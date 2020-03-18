import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0,
        duration: 0
      };
    }

    render() {
      const {isPlaying, progress, duration} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          renderVideoPlayer={(settings) => {
            return (
              <VideoPlayer
                isPlaying={isPlaying}
                src={settings.src}
                width={settings.width}
                height={settings.height}
                poster={settings.poster}
                muted={settings.muted}
                looped={settings.looped}
                stopOnPause={settings.stopOnPause}
                videoClass={settings.videoClass}
                onTimeUpdate={(currentTime) => {
                  if (currentTime !== this.state.progress) {
                    this.setState({
                      progress: currentTime
                    });
                  }
                }}
                onStopPlaying={() => this.setState({
                  isPlaying: false
                })}
                setVideoDuration={(durationTime) => {
                  this.setState({
                    duration: durationTime
                  });
                }}
              />
            );
          }}
          onStartPlaying={() => {
            this.setState({
              isPlaying: true
            });
          }}
          onStopPlaying={() => {
            this.setState({
              isPlaying: false
            });
          }}
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
