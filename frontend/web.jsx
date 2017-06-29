import React from 'react'

const Web = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-header'>
        <h1>a collection of web projects I've built</h1>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>Bulletin</h1>
          <p>Bulletin is a location based social networking app where friends can leave a message for you at a certain location. You then get a notification that there are messages waiting for you, but you can't check the message until you visit the location where it was left. This project was built by a team of 4 engineers including myself, using React Native and Google Places API.</p>
        </div>
        <div className='portfolio-ex'>
          <video autoPlay loop>
            <source src='/videos/bulletin.webm' type='video/webm' />
          </video>
        </div>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>Sunset Synth</h1>
          <p>Sunset Synth is a synthesizer and looper that was built entirely with vanilla JavaScript. Utilizing the Web Audio API, users can play four different synth-waves and record loops, entirely inside the browser. The visualizer was made using the Web Audio Analyser Node and HTML canvas.</p>
        </div>
        <div className='portfolio-ex'>
          <video autoPlay loop>
            <source src='/videos/sunsetsynth.webm' type='video/webm' />
          </video>
        </div>
      </div>
      <div className='portfolio-item'>
        <div className='portfolio-desc'>
          <h1>GreysWeb.club</h1>
          <p>Grey's Web Club is a social media platform where users can share text posts, images, links, audio and video files. Users can follow their friends, like their posts, explore all posts, and search for users or posts. It was built with a React/Redux front-end and a Ruby on Rails backend</p>
        </div>
        <div className='portfolio-ex'>
          <video autoPlay loop>
            <source src='/videos/greyswebclub.webm' type='video/webm' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Web;
