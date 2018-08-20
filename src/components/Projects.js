import React, { Component } from 'react';
import ProjectContainer from '../containers/ProjectContainer';
import { Document, Page } from 'react-pdf';



class Projects extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
    <div className='projects'>
          <section className='leftpg'>
            <section className='innerContent'>
                <h2>Projects</h2>
                <section>
                    <ProjectContainer/>
                </section>
            </section>
          </section>
          <section className='rightpg'>
            <section className='innerContent'>
            <div className='resumeTop'>
            <h2>Resume</h2>
              <form method="get" action="/assets/Dalton_Hart_resume.pdf">
                <button className='button is-success' type="submit">Download!</button>
              </form>

            </div>
              
              <section className='resume'>
              <Document
                file="/assets/Dalton_Hart_resume.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber}/>
                </Document>
              </section>
            </section>
          </section>
    </div>
    );
  }
}

export default Projects;
