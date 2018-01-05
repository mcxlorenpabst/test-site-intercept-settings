import React, { Component } from 'react';

class InputSetting extends Component {
  render() {
    return (
      <div className='setting_wrapper'>
          <p>{this.props.title}</p>
          <input className={this.props.class} value={this.props.value} onChange={this.props.change} type={this.props.type} />
      </div>
    );
  }
}

export default InputSetting;