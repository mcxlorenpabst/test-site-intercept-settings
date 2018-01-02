import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <section className='header'>
        <div className='settings_gear' onClick={this.props.toggleSettingsModal} >
          <img src='https://cdn2.iconfinder.com/data/icons/web-icons/512/Gear-512.png' alt='settings gear' />
        </div>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </ul>
      </section>
    );
  }
}

export default Header;