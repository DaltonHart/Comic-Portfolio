import React, { Component } from 'react';
import ProjectContainer from '../containers/ProjectContainer';




class Projects extends Component {

  render() {
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

            </section>

          </section>
    </div>
    );
  }
}

export default Projects;
