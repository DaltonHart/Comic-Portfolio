import React, {Component} from 'react';

class Project extends Component {
  

  render(){
    return(

  <div className="projectCard">
  <img src={this.props.project.img}/>
  <p>{this.props.project.name}</p>
  {/* <p>{this.props.project.desc}</p>
  <a href={this.props.project.github}>Github</a>
  <a href={this.props.project.hosted}>Visit</a> */}

  </div>
  
    )
  }
}

export default Project