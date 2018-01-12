import React, { Component } from 'react';
import InputSetting from './InputSetting.js';
import SelectSetting from './SelectSetting.js';

class Settings extends Component {
  render() {
    return (
        <div className='settings'>

            <p className='settings_close' onClick={this.props.closeSettingsModal}>X</p>

            <InputSetting title='Survey URL:' class='settings_input_long' value={this.props.state.surveyURL} change={(e)=> this.props.setState({surveyURL: e.target.value})} />

            <SelectSetting title='Enabled:' value={this.props.state.enabled} change={(e)=> this.props.setState({enabled: e.target.value})} options={['true', 'false']} />

            <div className='setting_wrapper'>
                <p>Probability (%):</p>
                <input className='settings_input_number' value={this.props.state.probability} onChange={(e)=> this.props.setState({probability: e.target.value})} type='number' />
            </div>

            <div className='setting_wrapper'>
                <p>Page Visit:</p>
                <input className='settings_input_number' value={this.props.state.pageVisit} onChange={(e)=> this.props.setState({pageVisit: e.target.value})} type='number' />
            </div>

            <div className='setting_wrapper'>
                <p>Delay (in seconds):</p>
                <input className='settings_input_number' value={this.props.state.delay/1000} onChange={(e)=> this.props.setState({delay: (e.target.value * 1000)})} type='number' />
            </div>

            <div className='setting_wrapper'>
                <p>Open Survey In:</p>
                <select value={this.props.state.openSurveyType} onChange={(e)=> this.props.updateOpenSurveyType(e)} >
                    <option>New Tab</option>
                    <option>Pop Up</option>
                </select>
            </div>

            { this.props.state.openSurveyType === 'New Tab' ? null :
                <div className='setting_wrapper'>
                    <p>Wait Until Close:</p>
                    <select value={this.props.state.waitUntilClose} onChange={(e)=> this.props.setState({waitUntilClose: e.target.value})} >
                        <option>true</option>
                        <option>false</option>
                    </select>
                </div>
            } 

            { this.props.state.openSurveyType === 'New Tab' ? null :
                <div className='setting_wrapper'>
                    <p>Survey Width (pixels):</p>
                    <input className='settings_input_number' value={this.props.state.width} onChange={(e)=> this.props.setState({width: e.target.value})} type='number' />
                </div>
            } 

            { this.props.state.openSurveyType === 'New Tab' ? null :
                <div className='setting_wrapper'>
                    <p>Survey Height (pixels):</p>
                    <input className='settings_input_number' value={this.props.state.height} onChange={(e)=> this.props.setState({height: e.target.value})} type='number' />
                </div>
            }

            <div className='setting_wrapper'>
                <p>Cookie Duration If Accepted (in days):</p>
                <input className='settings_input_number' value={this.props.state.expireDaysIfYes} onChange={(e)=> this.props.setState({expireDaysIfYes: e.target.value})} type='number' />
            </div>

            <div className='setting_wrapper'>
                <p>Cookie Duration If Declined (in days):</p>
                <input className='settings_input_number' value={this.props.state.expireDaysIfNo} onChange={(e)=> this.props.setState({expireDaysIfNo: e.target.value})} type='number' />
            </div>

            {/* <div className='settings_btn settings_reset' onClick={this.props.resetPageCount}>Reset Page Count</div> */}
            <div className='settings_btn settings_designer' onClick={this.props.openDesigner}>Designer</div>
            <div className='settings_btn settings_delete' onClick={this.props.deleteCookies}>Delete Cookies</div>
            <div className='settings_btn settings_save' onClick={this.props.saveSettings}>Save & Close</div>

        </div>
    );
  }
}


export default Settings;