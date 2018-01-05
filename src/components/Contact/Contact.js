import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    window.McxSiteInterceptOnExit.onPageLoad();
  }

  render() {
    return (
      <section className='contact'>
        
      </section>
    );
  }
}


export default Contact;