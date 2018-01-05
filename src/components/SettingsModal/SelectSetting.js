import React, { Component } from 'react';

class InputSetting extends Component {
  render() {
    return (
      <div className='setting_wrapper'>
          <p>{this.props.title}</p>
          <select value={this.props.value} onChange={this.props.change} >
            {
              this.props.options.map( (item, i) => {
                return <option key={i}>{item}</option>
              })
            }
        </select>
      </div>
    );
  }
}

export default InputSetting;