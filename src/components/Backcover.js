import React, { Component } from 'react';
import { Segment, Button, TextArea, Form } from 'semantic-ui-react';

class Backcover extends Component {
  render() {
    return (
      <div className='backcover'>
          <h2>Let's Build Something Together</h2>
          <Segment inverted>
            <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input required fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Input required fluid label='Email' placeholder='Email' />
            <div className='required field'>
              <label>Message</label>
            </div>
            <TextArea autoHeight className='textarea' required label='Message' placeholder='Message' />  
              
            <Button type='submit'>Submit</Button>
            
            <div className='required field'>
              <label>required field</label>
            </div>
            </Form>
            </Segment>
            <Segment inverted className='social'>
            <a href='https://www.linkedin.com/in/dalton-hart/'><i class="fab fa-linkedin"></i></a>
            <a href='https://github.com/DaltonHart'><i class="fab fa-github-square"></i></a>
            <a href='https://www.facebook.com/varenknight'><i class="fab fa-facebook"></i></a>
            <a href='https://twitter.com/DaltonJHart'><i class="fab fa-twitter-square"></i></a>
            </Segment>
          
        </div>
    );
  }
}

export default Backcover;
