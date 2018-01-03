import React, { Component } from 'react';

class Customer extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFront: true
    }
  }

  handleFlip(){
    this.setState({
      showFront: !this.state.showFront
    })
  }

  render() {
    return (
      <section className='customer' onMouseOver={() => this.handleFlip} >
        {
          this.state.showFront ? 
            <img src={this.props.imgSrc} alt='customer img' />
          : <p>MaritzCX</p>
        }
      </section>
    );
  }
}

export default Customer;