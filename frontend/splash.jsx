import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const Splash = () => {

  return (
    <div className='splash'>
      <div className='title'>
        <div className='title-left'>
          <h1>grey.</h1>
          <h1>web.</h1>
        </div>
        <div className='title-right'>
          <h1>KEITH</h1>
          <h1>SITE</h1>
        </div>
      </div>
      <div className='container'>
        <div className='center'>
          <img className='head' src="images/avatar.png" alt="Grey's Head"></img>
          <div id='shadow'></div>
          <Link id='about' to='/about'>about</Link>
          <Link id='resume' to='/resume'>resume</Link>
          <Link id='video' to='/video'>video</Link>
          <Link id='web' to='/web'>web</Link>
        </div>
      </div>
    </div>
)}


export default Splash
