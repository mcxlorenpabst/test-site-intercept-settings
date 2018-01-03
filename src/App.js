import React, { Component } from 'react';
import router from './router';
import Header from './components/Header/Header.js';

import './reset.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSettingsModal: true,
      surveyURL: "https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F", 
      showOnLoad: false, 
      invitationID: 'mcxInviteModal', 
      probability: 5, 
      width: 900, 
      height: 600, 
      expireDaysIfYes: 60, 
      expireDaysIfNo: 45, 
      delay: 3000, 
      pageVisit: 4,
      enabled: true
    }

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.resetSurvey = this.resetSurvey.bind(this);
  }

  componentDidMount(){
    window.mcxSiteInterceptParameters = {
      surveyURL: this.state.surveyURL, 
      showOnLoad: this.state.showOnLoad, 
      invitationID: this.state.invitationID, 
      probability: this.state.probability, 
      width: this.state.width, 
      height: this.state.height, 
      expireDaysIfYes: this.state.expireDaysIfYes, 
      expireDaysIfNo: this.state.expireDaysIfNo, 
      delay: this.state.delay, 
      enabled: this.state.enabled
    }
  }

  toggleSettingsModal(){
    this.setState({
      showSettingsModal: !this.state.showSettingsModal
    })
  }

  closeSettingsModal(){
    this.setState({
      showSettingsModal: false
    })
  }

  resetSurvey(){
    window.mcxSiteInterceptParameters = {
      surveyURL: this.state.surveyURL, 
      showOnLoad: this.state.showOnLoad, 
      invitationID: this.state.invitationID, 
      probability: this.state.probability, 
      width: this.state.width, 
      height: this.state.height, 
      expireDaysIfYes: this.state.expireDaysIfYes, 
      expireDaysIfNo: this.state.expireDaysIfNo, 
      delay: this.state.delay, 
      enabled: this.state.enabled
    }
    // clear cookies, reset page visit, etc...
    this.closeSettingsModal();
  }

  render() {
    return (
      <div className="App">

        <Header toggleSettingsModal={this.toggleSettingsModal} />
        { router }

        {
          this.state.showSettingsModal ? 
            <div className='settings'>

              <p className='settings_close' onClick={this.closeSettingsModal} >X</p>

              <div className='setting_wrapper'>
                <p>Survey URL:</p>
                <input className='settings_input_long' value={this.state.surveyURL} onChange={(e) => this.setState({surveyURL: e.target.value})} />
              </div>

              <div className='setting_wrapper'>
                <p>Show On Load:</p>
                <select value={this.state.showOnLoad} onChange={(e) => this.setState({showOnLoad: e.target.value})} >
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>

              <div className='setting_wrapper'>
                <p>Probability (%):</p>
                <input className='settings_input_number' value={this.state.probability} onChange={(e) => this.setState({probability: e.target.value})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Page Visit:</p>
                <input className='settings_input_number' value={this.state.pageVisit} onChange={(e) => this.setState({pageVisit: e.target.value})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Delay (in seconds):</p>
                <input className='settings_input_number' value={this.state.delay/1000} onChange={(e) => this.setState({delay: (e.target.value * 1000)})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Enabled:</p>
                <select value={this.state.enabled} onChange={(e) => this.setState({enabled: e.target.value})} >
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>

              <div className='setting_wrapper'>
                <p>Survey Width (pixels):</p>
                <input className='settings_input_number' value={this.state.width} onChange={(e) => this.setState({width: e.target.value})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Survey Height (pixels):</p>
                <input className='settings_input_number' value={this.state.height} onChange={(e) => this.setState({height: e.target.value})} type='number' />
              </div>

              <div className='settings_save' onClick={this.resetSurvey} >Save & Close</div>

            </div>
          : null
        }

      </div>
    );
  }
}

export default App;