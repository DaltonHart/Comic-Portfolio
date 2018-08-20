import React, {Component} from 'react'
import Projectslist from '../components/Projectslist'

class ProjectContainer extends Component{
    constructor(){
        super()
        this.state = {
          projects: [
              {
                name: 'Rainbow 6 React Site',
                img: '/assets/r6home.png',
                github: 'https://github.com/DaltonHart/R6-Tactics-Main-Site',
                desc: 'Community site around Rainbow 6 Siege, a game from Ubisoft. This site pulls all the info from an open Api I created to support it. Has built in tactical map as well.',
                hosted: '',
              },
              {
                name: 'Rainbow 6 Api',
                img: '/assets/r6api.png',
                github: 'https://github.com/DaltonHart/R6-Tactics',
                desc: 'Api developed to hold all game info for Rainbow 6 Siege, a game from ubisoft. Holds info for over 40 operators and 20 maps. ',
                hosted: '',
              },
              {
                name: 'Discord Dice Bot',
                img: '/assets/dicebot.png',
                github: 'https://github.com/DaltonHart/Dice-Discord-Bot',
                desc: 'Developed a Discord Bot to roll dice based on a set of commands. File structure is dynamic and allows for easy setup on additional commands by looping through a file structure.',
                hosted: '',
            },
            {
              name: 'Hobbit Ipsum',
              img: '/assets/hobbit-ipsum.png',
              github: 'https://github.com/DaltonHart/hobbit-ipsum',
              desc: 'A simple Ipsum Generator that uses quotes from the Hobbit. Themed from a template I created for others to make an ipsum generator.',
              hosted: 'https://hobbit-ipsum.herokuapp.com/',
            },
            {
              name: 'Bite Sized Voters',
              img: '/assets/bitesizedvoter.png',
              github: '',
              desc: 'Political hackathon project. A site was created in react to help voters made an educated decision with a navigated education system that would then email them their decision as a reminder',
              hostedL: '',
            }
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