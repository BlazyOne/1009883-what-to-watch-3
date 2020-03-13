import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const mock = {
  video: {
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    width: `280`,
    height: `175`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    muted: true,
    looped: true,
    stopOnPause: true
  }
};

it(`Should VideoPlayer render correctly`, () => {
  const {video} = mock;

  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    src={video.src}
    width={video.width}
    height={video.height}
    poster={video.poster}
    muted={video.muted}
    looped={video.looped}
    stopOnPause={video.stopOnPause}
    onTimeUpdate={() => {}}
    onStopPlaying={() => {}}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
