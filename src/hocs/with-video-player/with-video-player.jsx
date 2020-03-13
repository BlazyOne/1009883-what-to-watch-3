import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0
      };
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
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
                onTimeUpdate={(progress) => this.setState({
                  progress
                })}
                onStopPlaying={() => this.setState({
                  isPlaying: false
                })
                }
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
