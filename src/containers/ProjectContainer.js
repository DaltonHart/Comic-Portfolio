import React, {Component} from 'react'
import Projectslist from '../components/Projectslist'

class ProjectContainer extends Component{
    constructor(){
        super()
        this.state = {
          projects: [
              {
                  name: 'Dice Bot',
                  img: '/assets/dicebot.png',
                  github: 'https://github.com/DaltonHart/Dice-Discord-Bot',
                  desc: 'Developed a Discord Bot to roll dice based on a set of commands. File structure is dynamic and allows for easy setup on additional commands by looping through a file structure.',
                  hosted: '',
              },
              {
                name: 'Dice Bot',
                img: '/assets/dicebot.png',
                github: 'https://github.com/DaltonHart/Dice-Discord-Bot',
                desc: 'Developed a Discord Bot to roll dice based on a set of commands. File structure is dynamic and allows for easy setup on additional commands by looping through a file structure.',
                hosted: '',
            },
            {
              name: 'Dice Bot',
              img: '/assets/dicebot.png',
              github: 'https://github.com/DaltonHart/Dice-Discord-Bot',
              desc: 'Developed a Discord Bot to roll dice based on a set of commands. File structure is dynamic and allows for easy setup on additional commands by looping through a file structure.',
              hosted: '',
          },
          {
            name: 'Dice Bot',
            img: '/assets/dicebot.png',
            github: 'https://github.com/DaltonHart/Dice-Discord-Bot',
            desc: 'Developed a Discord Bot to roll dice based on a set of commands. File structure is dynamic and allows for easy setup on additional commands by looping through a file structure.',
            hosted: '',
        },
          ],
        }
      }
      
    render(){
        console.log(`here is the state ${this.state.projects}`)
      return (
        <div className='projectcontainer'>
          <Projectslist projects={this.state.projects}/>
        </div>
      )
    }
  }
  
  export default ProjectContainer