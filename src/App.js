import React, { Component } from 'react';
import Cover from './components/Cover';
import Projects from './components/Projects';
import './base.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
         {/* <Cover/> */}
         <Projects/>
        </main>
      </div>
    );
  }
}

export default App;
