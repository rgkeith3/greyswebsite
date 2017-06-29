import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Splash from './splash';
import Resume from './resume';
import Web from './web';
import Video from './video';

const NavBar = ({path}) => {
  console.log(path)

  return (
    <div className='nav-bar'>
      <Link to='/'>
        <img className='nav-head' src="images/avatar.png" alt="Grey's Head"></img>
      </Link>
      <Link to='/about'>about</Link>
      <Link to='/resume'>resume</Link>
      <Link to='/web'>web</Link>
      <Link to='/video'>video</Link>
      <a href="mailto:r.grey.keith@gmail.com?Subject=I%20Love%20You" target="_top">
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </a>
    </div>
  )
}

const About = () => {
  return (
    <div className='about'>
      <div className='bg'></div>
      <h1>grey.KEITH</h1>
      <ul>
        <li>\\ i am from tennessee</li>
        <li>\\ i started my career in tv</li>
        <li>\\ i once worked on a show about snake handling churches in appalachia</li>
        <li>\\ i shot films that have screened at film festivals</li>
        <li>\\ i released it on vhs against better judgement</li>
        <li>\\ i have a large collection of vhs tapes</li>
        <li>\\ i have a large collection of coffee mugs</li>
        <li>\\ i moved to oakland</li>
        <li>\\ i started working in 360 video and vr</li>
        <li>\\ i developed some websites</li>
        <li>\\ i split time between building webapps and shooting documentaries</li>
        <li>\\ i want to reinvent how people experience their world, virtual or otherwise</li>
        <li>\\ i wear too many luau shirts</li>
        <li>\\ i keep a running list of the best tiki bars i've ever been to</li>
        <li>\\ i am very intent on becoming a parody of myself</li>
      </ul>
    </div>
  )
}

const App = ({location}) => (
  <div id='app'>
    <Route path='/' render={({location}) => {
        if (location.pathname === '/') {
          return (<Splash/>)
        } else {
          return (<NavBar path={location.pathname}/>)
        }
      }}/>
    <Route path='/about' component={About} />
    <Route path='/resume' component={Resume} />
    <Route path='/video' component={Video} />
    <Route path='/web' component={Web} />
  </div>
)

const Home = () => (
  <Router>
    <App/>
  </Router>
)

export default Home;
