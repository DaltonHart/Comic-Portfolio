import React, { Component } from 'react';


class Cover extends Component {
  render() {
    return (
      <div >
          <header className='comicTop'>
          <section className='compLogo'>
            <div className='imgLogo'>
              <img src='/assets/personallogo.png'/>
            </div>
            <div className='compPrice'>
              <p className='price'>75&#162;</p>
              <section className='date'>
                <p>1</p>
                <p>MAY</p>
              </section>
            </div>
          </section>
          <section className='title'>
            <img src='assets/title.png'/>
          </section>
          </header>
          <section className='comicBot'>
            <div className='centralContent'>
            
            </div>
            <div className='bottomContent'>
              <img src='/assets/ComicBarcode.jpg'/>
            </div>

          </section>
        </div>
    );
  }
}

export default Cover;
