import React, { Component } from 'react';
import Cover from './components/Cover'
import './base.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
         <Cover/>
        </main>
      </div>
    );
  }
}

export default App;
