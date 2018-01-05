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
      showSettingsModal: false,
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
      McxPageVisit: 1,
      openSurveyType: 'New Tab'
    }

    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.acceptSurvey = this.acceptSurvey.bind(this);
  }

  componentDidMount(){
    this.setInitialSiteInterceptParameters();
    window.McxSiteInterceptOnExit.onPageLoad();
    document.cookie = "McxPageVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "mcxSurveyQuarantine=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    delete sessionStorage.mcxRandom;
  }

  toggleSettingsModal(){
    this.setState({
      showSettingsModal: !this.state.showSettingsModal
    })
  }

  closeSettingsModal(){
    this.setState({
      showSettingsModal: false,
      surveyURL: window.McxSiteInterceptOnExit.parameters.surveyURL,
      waitUntilClose: window.McxSiteInterceptOnExit.parameters.waitUntilClose,
      invitationID: window.McxSiteInterceptOnExit.parameters.invitationID,
      probability: window.McxSiteInterceptOnExit.parameters.probability,
      width: window.McxSiteInterceptOnExit.parameters.width,
      height: window.McxSiteInterceptOnExit.parameters.height,
      expireDaysIfYes: window.McxSiteInterceptOnExit.parameters.expireDaysIfYes,
      expireDaysIfNo: window.McxSiteInterceptOnExit.parameters.expireDaysIfNo,
      delay: window.McxSiteInterceptOnExit.parameters.delay,
      pageVisit: window.McxSiteInterceptOnExit.parameters.pageVisit,
      pageVisit: window.McxSiteInterceptOnExit.parameters.pageVisit,
      enabled: window.McxSiteInterceptOnExit.parameters.enabled,
    })
  }

  updateOpenSurveyType(e){
    let newVal = e.target.value;
    if (newVal === 'New Tab'){
      this.setState({
        openSurveyType: newVal,
        width: undefined,
        height: undefined
      })
    }else{
      this.setState({
        openSurveyType: newVal,
        width: 900,
        height: 600
      })
    }
  }

  setInitialSiteInterceptParameters(){
    let params = localStorage.params ? JSON.parse(localStorage.params) : this.state;

    let surveyURL = params.surveyURL || this.state.surveyURL;
    let waitUntilClose = params.waitUntilClose || this.state.waitUntilClose; 
    let invitationID = params.invitationID || this.state.invitationID; 
    let probability = params.probability || this.state.probability; 
    let width = params.width || this.state.width; 
    let height = params.height || this.state.height; 
    let expireDaysIfYes = params.expireDaysIfYes || this.state.expireDaysIfYes; 
    let expireDaysIfNo = params.expireDaysIfNo || this.state.expireDaysIfNo; 
    let delay = params.delay || this.state.delay; 
    let pageVisit = params.pageVisit || this.state.pageVisit; 
    let enabled = params.enabled || this.state.enabled;

    this.setState({surveyURL, waitUntilClose, invitationID, probability, width, height, expireDaysIfYes, expireDaysIfNo, delay, pageVisit, enabled}, this.saveSiteInterceptParametersToWindow);
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
    
    //We'll also save it to localStorage so that it carries forward in future visits
    localStorage.params = JSON.stringify({
      surveyURL: this.state.surveyURL,
      waitUntilClose: this.state.waitUntilClose, 
      invitationID: this.state.invitationID, 
      probability: this.state.probability, 
      width: this.state.width, 
      height: this.state.height, 
      expireDaysIfYes: this.state.expireDaysIfYes, 
      expireDaysIfNo: this.state.expireDaysIfNo, 
      delay: this.state.delay, 
      pageVisit: this.state.pageVisit, 
      enabled: this.state.enabled
    })
  }

  deleteCookies(){
    document.cookie = "mcxSurveyQuarantine=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "McxPageVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    delete sessionStorage.mcxRandom;
  }

  resetPageCount(){
    document.cookie = "McxPageVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  /*
  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    let result;
    if (parts.length == 2) {
      if (parts[1].indexOf(';') > -1){
        result = parts[1].split(';')[0];
      }else{
        result = parts[1];
      }
    } 
    this.setState({
      [name]: result
    })
  }
  */

  saveSettings(){
    this.saveSiteInterceptParametersToWindow();
    this.closeSettingsModal();
  }

  acceptSurvey(){
    if (this.state.openSurveyType === 'New Tab'){
      let params = window.McxSiteInterceptOnExit.parameters;
      window.McxSiteInterceptOnExit.createCookie(
        ('mcxSurveyQuarantine' + params.cookieID),
        ('mcxSurveyQuarantine' + params.cookieID),
        params.expireDaysIfYes);
      var inv = document.getElementById(params.invitationID);
      if (inv) { inv.style.display = 'none'; }
      window.open(params.surveyURL);
    }else{
        window.McxSiteInterceptOnExit.acceptSurvey();
    }
  }

  render() {
    return (
      <div className="App">

        <Header toggleSettingsModal={this.toggleSettingsModal} />

        { router }

        <SurveyInvite acceptSurvey={this.acceptSurvey} />

        {
          this.state.showSettingsModal ? 
            <div className='settings'>

              <p className='settings_close' onClick={this.closeSettingsModal} >X</p>

              <div className='setting_wrapper'>
                <p>Survey URL:</p>
                <input className='settings_input_long' value={this.state.surveyURL} onChange={(e) => this.setState({surveyURL: e.target.value})} />
              </div>

              <div className='setting_wrapper'>
                <p>Enabled:</p>
                <select value={this.state.enabled} onChange={(e) => this.setState({enabled: e.target.value})} >
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
                <p>Open Survey In:</p>
                <select value={this.state.openSurveyType} onChange={(e) => this.updateOpenSurveyType(e)} >
                  <option>New Tab</option>
                  <option>Pop Up</option>
                </select>
              </div>

              {
                this.state.openSurveyType === 'New Tab' ? null
                : <div className='setting_wrapper'>
                    <p>Wait Until Close:</p>
                    <select value={this.state.waitUntilClose} onChange={(e) => this.setState({waitUntilClose: e.target.value})} >
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
              }

              {
                this.state.openSurveyType === 'New Tab' ? null
                : <div className='setting_wrapper'>
                    <p>Survey Width (pixels):</p>
                    <input className='settings_input_number' value={this.state.width} onChange={(e) => this.setState({width: e.target.value})} type='number' />
                  </div>
              }

              {
                this.state.openSurveyType === 'New Tab' ? null
                : <div className='setting_wrapper'>
                    <p>Survey Height (pixels):</p>
                    <input className='settings_input_number' value={this.state.height} onChange={(e) => this.setState({height: e.target.value})} type='number' />
                  </div>
              }

              <div className='setting_wrapper'>
                <p>Cookie Duration If Accepted (in days):</p>
                <input className='settings_input_number' value={this.state.expireDaysIfYes} onChange={(e) => this.setState({expireDaysIfYes: e.target.value})} type='number' />
              </div>

              <div className='setting_wrapper'>
                <p>Cookie Duration If Declined (in days):</p>
                <input className='settings_input_number' value={this.state.expireDaysIfNo} onChange={(e) => this.setState({expireDaysIfNo: e.target.value})} type='number' />
              </div>

              {/* <div className='settings_btn settings_reset' onClick={this.resetPageCount} >Reset Page Count</div> */}
              <div className='settings_btn settings_delete' onClick={this.deleteCookies} >Delete Cookies</div>
              <div className='settings_btn settings_save' onClick={this.saveSettings} >Save & Close</div>

            </div>
          : null
        }

      </div>
    );
  }
}

export default App;