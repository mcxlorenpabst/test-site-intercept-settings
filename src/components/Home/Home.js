import React, { Component } from 'react';
import './Home.css';

import Customer from './Customer/Customer.js';

class Home extends Component {

  render() {
    return (
      <div className="home">

        <div className='home_landing_img'>
          <div className='home_landing_words'>
            <p>Sustainable Growth</p>
            <p>Innovation That Excites</p>
          </div>
        </div>
        
        <div className='home_customers'>
          <div className='home_customers_inner'>
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/sanofi.png' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/reliant.png' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/quantas.png' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/drager.png' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/GM_LOGO.png' />
            <Customer imgSrc='https://www.maritzcx.com/wp-content/uploads/2014/10/sanofi.png' />
          </div>
        </div>

      </div>
    );
  }
}


export default Home;