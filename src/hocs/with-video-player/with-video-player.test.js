import React from 'react';
import renderer from 'react-test-renderer';
import withVideoPlayer from './with-video-player.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const mockVideoSettings = {
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  width: `280`,
  height: `175`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  muted: true,
  looped: true,
  stopOnPause: true,
  videoClass: ``
};

const MockComponent = (props) => {
  const {renderVideoPlayer} = props;

  return (
    <React.Fragment>
      {renderVideoPlayer(mockVideoSettings)}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  renderVideoPlayer: PropValidator.RENDER_VIDEO_PLAYER
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`Should withVideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>, {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
