import React, { Component } from 'react';
import router from './router';

import Header from './components/Header/Header.js';
import SurveyInvite from './components/SurveyInvite/SurveyInvite.js';

import './reset.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSettingsModal: true,
      surveyURL: "https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F", 
      waitUntilClose: false, 
      invitationID: 'mcxInviteModal', 
      probability: 100, 
      width: 900, 
      height: 600, 
      expireDaysIfYes: 60, 
      expireDaysIfNo: 45, 
      delay: 1000, 
      pageVisit: 3,
      expireDaysIfYes: 60,
      expireDaysIfNo: 30,
      enabled: true,
    }

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.deleteCookie = this.deleteCookie.bind(this);
    this.resetPageCount = this.resetPageCount.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  componentDidMount(){
    this.saveSiteInterceptParametersToWindow();
    document.cookie = "McxPageVisit=1";
    window.McxSiteInterceptOnExit.onPageLoad();
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

  saveSiteInterceptParametersToWindow(){
    window.McxSiteInterceptOnExit.parameters.surveyURL = this.state.surveyURL; 
    window.McxSiteInterceptOnExit.parameters.waitUntilClose = this.state.waitUntilClose; 
    window.McxSiteInterceptOnExit.parameters.invitationID = this.state.invitationID; 
    window.McxSiteInterceptOnExit.parameters.probability = this.state.probability; 
    window.McxSiteInterceptOnExit.parameters.width = this.state.width; 
    window.McxSiteInterceptOnExit.parameters.height = this.state.height; 
    window.McxSiteInterceptOnExit.parameters.expireDaysIfYes = this.state.expireDaysIfYes; 
    window.McxSiteInterceptOnExit.parameters.expireDaysIfNo = this.state.expireDaysIfNo; 
    window.McxSiteInterceptOnExit.parameters.delay = this.state.delay; 
    window.McxSiteInterceptOnExit.parameters.pageVisit = this.state.pageVisit; 
    window.McxSiteInterceptOnExit.parameters.enabled = this.state.enabled;
  }

  deleteCookie(){
    document.cookie = "mcxSurveyQuarantine=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }

  resetPageCount(){
    document.cookie = "McxPageVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  // getCookie(name) {
  //   var value = "; " + document.cookie;
  //   var parts = value.split("; " + name + "=");
  //   if (parts.length == 2) {
  //     this.setState({
  //       [name]: parts.pop().split(";").shift()
  //     })
  //   } 
  // }

  saveSettings(){
    this.saveSiteInterceptParametersToWindow();
    this.closeSettingsModal();
  }

  render() {
    return (
      <div className="App">

        <Header toggleSettingsModal={this.toggleSettingsModal} />
        { router }

        <SurveyInvite />

        {
          this.state.showSettingsModal ? 
            <div className='settings'>

              <p className='settings_close' onClick={this.closeSettingsModal} >X</p>

              <div className='setting_wrapper'>
                <p>Survey URL:</p>
                <input className='settings_input_long' value={this.state.surveyURL} onChange={(e) => this.setState({surveyURL: e.target.value})} />
              </div>

              <div className='setting_wrapper'>
                <p>Wait Until Close:</p>
                <select value={this.state.waitUntilClose} onChange={(e) => this.setState({waitUntilClose: e.target.value})} >
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

              <div className='setting_wrapper'>
                <p>Cookie Duration If Accepted (in days):</p>
                <input className='settings_input_number' value={this.state.expireDaysIfYes} onChange={(e) => this.setState({expireDaysIfYes: e.target.value})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Cookie Duration If Declined (in days):</p>
                <input className='settings_input_number' value={this.state.expireDaysIfNo} onChange={(e) => this.setState({expireDaysIfNo: e.target.value})} type='number' />
              </div>

              <div className='settings_btn settings_reset' onClick={this.resetPageCount} >Reset Page Count</div>
              <div className='settings_btn settings_delete' onClick={this.deleteCookie} >Delete Cookie</div>
              <div className='settings_btn settings_save' onClick={this.saveSettings} >Save & Close</div>

            </div>
          : null
        }

      </div>
    );
  }
}

export default App;