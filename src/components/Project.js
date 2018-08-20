import React, {Component} from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  

  render(){

    var divStyle = {
      backgroundImage: `url(${this.props.project.img})`
    };

    return(
  <a className="projectCard" style={divStyle} href={this.props.project.github} target="_blank" onMouseEnter={this.handleMouseHover}
  onMouseLeave={this.handleMouseHover}>
    <p>{this.props.project.name}</p>
    {this.state.isHovering && <span>{this.props.project.desc}</span>}
    {/* 
    <a href={this.props.project.github}>Github</a>
    <a href={this.props.project.hosted}>Visit</a> */}
  </a>
  
  
    )
  }
}

export default Project