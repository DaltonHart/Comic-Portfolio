import React, {Component} from 'react'
import Project from './Project'

class Projects extends Component {
  render(){
    let projects = this.props.projects.map( (project, i) => {
      return (
        <Project
          project={project}
          key={i} />
      )
    })
    
    return(
        <div className='projPanels'>
        {projects}
        </div>
        
    )
  }
}

export default Projects