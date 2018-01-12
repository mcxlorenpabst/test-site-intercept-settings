import React, { Component } from 'react';
import router from './router';

import Header from './components/Header/Header.js';
import SurveyInvite from './components/SurveyInvite/SurveyInvite.js';
import SettingsModal from './components/SettingsModal/SettingsModal.js';
import Designer from './components/Designer/Designer.js';

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
      openSurveyType: 'New Tab',
      showDesigner: false,
      logoURL: 'https://www.maritzcx.com/wp-content/themes/allegiance/images/logo.svg',
      logoWidth: '220px',
      logoHeight: 'auto',
      logoMargin: '50px 0px 60px 140px',
      message: 'Will you help us improve your experience by taking a short 30 second survey?',
      acceptText: 'Yes',
      acceptBackground: '#f5921e',
      acceptMarginLeft: '195px',
    }

    this.updateState = this.updateState.bind(this);
    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.openDesigner = this.openDesigner.bind(this);
    this.closeDesigner = this.closeDesigner.bind(this);
    this.acceptSurvey = this.acceptSurvey.bind(this);
  }

  componentDidMount(){
    this.setInitialSiteInterceptParameters();
    window.McxSiteInterceptOnExit.onPageLoad();
    document.cookie = "McxPageVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "mcxSurveyQuarantine=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    delete sessionStorage.mcxRandom;
  }

  updateState(obj){
    this.setState(obj)
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
    window.McxSiteInterceptOnExit.parameters.waitUntilClose = JSON.parse(this.state.waitUntilClose); 
    window.McxSiteInterceptOnExit.parameters.invitationID = this.state.invitationID; 
    window.McxSiteInterceptOnExit.parameters.probability = this.state.probability; 
    window.McxSiteInterceptOnExit.parameters.width = this.state.width; 
    window.McxSiteInterceptOnExit.parameters.height = this.state.height; 
    window.McxSiteInterceptOnExit.parameters.expireDaysIfYes = this.state.expireDaysIfYes; 
    window.McxSiteInterceptOnExit.parameters.expireDaysIfNo = this.state.expireDaysIfNo; 
    window.McxSiteInterceptOnExit.parameters.delay = this.state.delay; 
    window.McxSiteInterceptOnExit.parameters.pageVisit = this.state.pageVisit; 
    window.McxSiteInterceptOnExit.parameters.enabled = JSON.parse(this.state.enabled);
    
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

  openDesigner(){
    this.setState({
      showDesigner: true,
      showSettingsModal: false,
    })
  }

  closeDesigner(){
    this.setState({
      showDesigner: false
    })
  }

  saveDesigner(){
    this.saveSettings();
    this.closeDesigner();
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

        <SurveyInvite acceptSurvey={this.acceptSurvey} state={this.state} />

        { 
          this.state.showSettingsModal ? 
            <SettingsModal setState={this.updateState} state={this.state} closeSettingsModal={this.closeSettingsModal} updateOpenSurveyType={this.updateOpenSurveyType} resetPageCount={this.resetPageCount} deleteCookies={this.deleteCookies} saveSettings={this.saveSettings} openDesigner={this.openDesigner} closeDesigner={this.closeDesigner} />
          : null
        }

        {
          this.state.showDesigner ? 
            <Designer closeDesigner={this.closeDesigner} state={this.state} setState={this.updateState} saveDesigner={this.saveDesigner} />
          : null 
        }

      </div>
    );
  }
}

export default App;