import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

jest.spyOn(window.HTMLMediaElement.prototype, `pause`)
  .mockImplementation(() => { });

jest.spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

it(`Should have two states playing and not playing`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={false}
        src={``}
        width={``}
        height={``}
        poster={``}
        muted={true}
        stopOnPause={true}
      />
  );

  videoPlayer.instance()._videoRef.current.onplay();

  expect(videoPlayer.instance().state.isPlaying).toBe(true);

  videoPlayer.instance()._videoRef.current.onpause();

  expect(videoPlayer.instance().state.isPlaying).toBe(false);
});
