import React, { Component } from 'react';
import Cover from './components/Cover';
import Projects from './components/Projects';
import Backcover from './components/Backcover';
import './base.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
         {/* <Cover/> */}
         {/* <Projects/> */}
         <Backcover/>
        </main>
      </div>
    );
  }
}

export default App;
