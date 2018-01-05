import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    window.McxSiteInterceptOnExit.onPageLoad();
  }

  render() {
    return (
      <section className='about'>
        <div className='about_header_img'>
          <p>Our Story</p>
        </div>
        <div className='about_green_box'>
          <h2 className='about_green_header'>Innovation + Experience = Results</h2>
          <div className='about_green_left'>
            MaritzCX started with the simple idea that businesses need more than scores and reports to meet their customer experience (CX) challenges in the 21st century – and that idea drove us to combine the deep expertise of a proven research leader with the speed and innovation of a modern tech startup. The result is a faster, smarter approach to CX that gives businesses the power to see, sense, and act on the experiences of every individual customer – across every touchpoint — live.
          </div>
          <div className='about_green_right'>
            With MaritzCX, businesses constantly discover new insights about their customers. They always have instant access to the CX information and resources they need to drive organizational change. And they never have to guess about how to earn the loyalty of customers. That means banks can change policies and operationalize procedures that help them retain more customers. Car manufacturers can find better ways to serve their clients at the moment they purchase or repurchase. And companies around the world can create new value for customers and accelerate their organic growth.
          </div>
        </div>
      </section>
    );
  }
}


export default About;