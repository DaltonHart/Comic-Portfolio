import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <main>
          <header className='comicTop'>
          <section className='compLogo'>
            <div className='imgLogo'>
              <img src='/assets/personallogo.png'/>
            </div>
            <div className='compPrice'>
              <p className='price'>75c</p>
            </div>
          </section>
          <section className='title'>
            <h5>#1 in a limited series!</h5>
            <h1>Dalton Hart</h1>
            <h4>Full Stack Web Developer</h4>
          </section>
          </header>
          <section className='comicBot'>
            <div className='centralContent'>
            
            </div>
            <div className='bottomContent'>
              <img src='/assets/ComicBarcode.jpg'/>
            </div>

          </section>
          
        </main>


      </div>
    );
  }
}

export default App;
