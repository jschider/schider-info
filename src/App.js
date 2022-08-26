import logo from './assets/images/js-logo.png';
import reactjs from './assets/images/logo192.png';
import nodejs from './assets/images/nodejs-new-pantone-white.png';
import construction from './assets/images/under-construction.jpg';
import github from './assets/images/GitHub-Mark-Light-120px-plus.png';
//import firebase from 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_black.svg'
import './App.css';
import SkillCard from './containers/SkillCard';
//import { head } from 'lodash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="Joseph Schider" />
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <section className="App-header">
        <p>Joseph Schider - Software Engineer</p>
        <img className="img-con" src={construction} alt="From freepik." />
        <p>Image by <a href="https://www.freepik.com/free-vector/flat-construction-template_1584401.htm#page=2&query=work%20in%20progress&position=10&from_view=search">Freepik</a></p>
        {/*<p>Education</p>
        <p>Master of Science in Engineering - Software Engineering</p>
        <p>Bachelor of Science - Computer Science</p>
        <p>Skills</p>
        <SkillCard>Test</SkillCard>
        <p>Certifications</p>
      <p>Socials</p>*/}
        <br/>
        <p>This site is built with:</p>
        <p>
          <a href='https://reactjs.org/' ><img src={reactjs} className="Build-logo" alt="React" /></a>
          <a href='https://nodejs.org/'><img src={nodejs} className="Build-logo" alt="NodeJS" /></a>
          <a href='https://github.com/'><img src={github} className="Build-logo" alt="GitHub" /></a>
        </p>
      </section>
        {/*
        <footer className="App-header" >
          <img src={firebase} className="App-logo" alt="Firebase" />
          <img src={nodejs} className="App-logo" alt="NodeJS" />
          <img src={github} className="App-logo" alt="Github" />
        </footer>
        */}
    </div>
  );
}

export default App;
