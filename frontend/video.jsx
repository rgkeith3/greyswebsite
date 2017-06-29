import React from 'react';
import Iframe from 'react-iframe';

const Video = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-header'>
        <h1>a collection of video projects I've made</h1>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>Work Reel</h1>
          <p>A collection of some of the things I worked on in the past year or so.</p>
        </div>
        <div className='portfolio-ex-video'>
          <Iframe
          url="https://www.youtube.com/embed/RP4TzdtMpZE"
          position="relative"
          height="315px"
          width="560px"
          allowFullScreen />
        </div>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>Soap or Die</h1>
          <p>Soap or Die is a documentary about the last professional practitioner of the sport of Soaping. Once a fad in the 90's, Soaping never died in the eyes of Ryan Jaunzemis. Ryan now lives in Las Vegas where he soaps and continues to live the rockstar lifestyle. Soap or Die was in the official selection for the Vegas Indie Film Festival</p>
        </div>
        <div className='portfolio-ex-video'>
          <Iframe
          url="https://www.youtube.com/embed/VeQKVQONJ1c"
          position="relative"
          height="315px"
          width="560px"
          allowFullScreen />
        </div>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>We Make Money</h1>
          <p>We Make Money was an experiment in form. It was a proof of concept for Agency 2625's product the "micro-campaign." All videos were made in one shoot, making use of recycling and remixing footage to populate a feed with video content.</p>
        </div>
        <div className='portfolio-ex-video'>
          <Iframe
            url="https://www.youtube.com/embed/videoseries?list=PL9ktS8JpfjGLYC6Wj95P_BJrvdBYlMDux"
            position="relative"
            height="315px"
            width="560px"
            allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default Video;
