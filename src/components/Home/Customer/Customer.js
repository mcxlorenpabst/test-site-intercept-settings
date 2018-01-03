import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
      <section className='customer'>
        <img src={this.props.imgSrc} alt='customer img' />
      </section>
    );
  }
}

export default Customer;