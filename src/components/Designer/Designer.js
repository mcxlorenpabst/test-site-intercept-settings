import React, { Component } from 'react';
import './Designer.css';

import SurveyInvite from './../SurveyInvite/SurveyInvite.js';

class Designer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {state} = this.props;
        return (
            <section className='designer'>
                <div onClick={this.props.closeDesigner} className='designer_close' >X</div>
                <div className='designer_settings'>

                    <div className='designer_setting'>
                        <p>Logo URL:</p>
                        <input value={state.logoURL} onChange={(e) => this.props.setState({logoURL: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Logo Width:</p>
                        <input value={state.logoWidth} onChange={(e) => this.props.setState({logoWidth: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Logo Height:</p>
                        <input value={state.logoHeight} onChange={(e) => this.props.setState({logoHeight: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Logo Margin:</p>
                        <input value={state.logoMargin} onChange={(e) => this.props.setState({logoMargin: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Message:</p>
                        <textarea value={state.message} onChange={(e) => this.props.setState({message: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Accept Button Text:</p>
                        <input value={state.acceptText} onChange={(e) => this.props.setState({acceptText: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Accept Button Color:</p>
                        <input value={state.acceptBackground} onChange={(e) => this.props.setState({acceptBackground: e.target.value})} />
                    </div>

                    <div className='designer_setting'>
                        <p>Accept Button Left:</p>
                        <input value={state.acceptMarginLeft} onChange={(e) => this.props.setState({acceptMarginLeft: e.target.value})} />
                    </div>

                    <div className='settings_btn designer_save' onClick={this.props.saveDesigner} >Save</div>

                </div>

                <div className='designer_modal'>
                    <div className='modal'>
                        <div className='survey_close' onClick={this.props.closeDesigner} style={{color: "black"}} >X</div>
                        <img src={state.logoURL} alt='MaritzCX logo' className='modal_header_logo' style={{width: state.logoWidth, height: state.logoHeight, margin: state.logoMargin}} />
                        <p className='modal_words'>{state.message}</p>
                        <div className='modal_yes_wrapper'>
                            <a className='modal_yes' href='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' target='_blank' rel="noopener noreferrer" style={{background: state.acceptBackground, marginLeft: state.acceptMarginLeft}}>{state.acceptText}</a>
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

export default Designer;