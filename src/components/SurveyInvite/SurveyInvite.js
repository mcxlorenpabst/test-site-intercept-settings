import React, { Component } from 'react';
import './SurveyInvite.css';

class SurveyInvite extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }

  }

  componentDidMount(){
    window.McxSiteInterceptOnExit.onPageLoad();
  }

  render() {
    return (
      <section id='mcxInviteModal'>
        <div className='modal_survey'>
          <div className='modal'>

            <div className='survey_close' onClick={window.McxSiteInterceptOnExit.declineSurvey} style={{color: "black"}} >X</div>

            <img src='https://www.maritzcx.com/wp-content/themes/allegiance/images/logo.svg' alt='MaritzCX logo' className='modal_header_logo' />

            <p className='modal_words'>Will you help us improve your experience by taking a short 30 second survey?</p>

            <div className='modal_yes_wrapper' onClick={this.props.acceptSurvey}>
              <a className='modal_yes' href='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' target='_blank' rel="noopener noreferrer">Yes</a>
            </div>

            <p className='modal_words2'>We appreciate your feedback.&nbsp; 
              <a href="https://www.maritzcx.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </p>

          </div>
        </div>
      </section>
    );
  }
}


export default SurveyInvite;