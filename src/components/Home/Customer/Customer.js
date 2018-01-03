import React, { Component } from 'react';

class Customer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customerLogoShowing: true
    }

    this.slideCustomerUp = this.slideCustomerUp.bind(this);
    this.slideCustomerDown = this.slideCustomerDown.bind(this);
  }

  slideCustomerUp(){
    this.setState({
      customerLogoShowing: false
    })
  }

  slideCustomerDown(){
    this.setState({
      customerLogoShowing: true
    })
  }

  render() {
    let customerInnerTop = this.state.customerLogoShowing ? '0px' : '-180px';
    return (
      <section className='customer' onMouseEnter={this.slideCustomerUp}  onMouseLeave={this.slideCustomerDown} >
        <section className='customer_inner' style={{top: customerInnerTop}}>
          <img src={this.props.imgSrc} alt='customer img' />
          <img src={this.props.bottomImg} alt='customer img' className='customer_bottom_img' />
        </section>
      </section>
    );
  }
}

export default Customer;