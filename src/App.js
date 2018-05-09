import React, {Component} from 'react';
import logo from './logo.svg';
import Contact from "./Contact";
import './App.css';
import Gallery from './Gallery';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Nugen</h1>
          < Gallery/>
        </header>

				<Link to="/nugen" className="link">go To Nugen Component</Link>
        <p className="App-intro">
        </p>
				<Contact/>
      </div>
    );
  }
}

export default App;
