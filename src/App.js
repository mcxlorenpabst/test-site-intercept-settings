import React, { Component } from 'react';
import router from './router';
import Header from './components/Header/Header.js';

import './reset.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showSettingsModal: false
    }
    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
  }

  toggleSettingsModal(){
    this.setState({
      showSettingsModal: !this.state.showSettingsModal
    })
  }

  render() {
    return (
      <div className="App">

        <Header toggleSettingsModal={this.toggleSettingsModal} />
        { router }

      </div>
    );
  }
}


export default App;
