import React, { Component } from 'react';
import './Home.css';

import Customer from './Customer/Customer.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    window.McxSiteInterceptOnExit.onPageLoad();
  }

  render() {
    return (
      <div className="home">

        <div className='home_landing_img'>
          <div className='home_landing_words'>
            <p>Customer Experience</p>
            <p>Data Driven Results</p>
          </div>
        </div>
        
        <div className='home_customers'>
          <div className='home_customers_inner'>
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/sanofi.png' bottomImg='https://s2.reutersmedia.net/resources/r/?m=02&d=20170711&t=2&i=1192469267&r=LYNXMPED6A073&w=1280' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/reliant.png' bottomImg='http://www.underconsideration.com/brandnew/archives/reliant_stadium_01.jpg' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/quantas.png' bottomImg='https://www.qantaspoints.com/documents/4777318/4782849/section_flights.jpg/47c6fedf-e034-4709-91fb-d4466553e9b3?t=1404115380000' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/drager.png' bottomImg='https://my.ifdesign.de/upload/Wdg/Profile/716/images/medium/730_pt_image.jpg' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/GM_LOGO.png' bottomImg='https://fortunedotcom.files.wordpress.com/2017/05/gettyimages-668234814.jpg' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/sanofi.png' bottomImg='https://media.glassdoor.com/l/7f/89/1e/94/sanofi-head-office-exterior.jpg' />
          </div>
        </div>

      </div>
    );
  }
}


export default Home;