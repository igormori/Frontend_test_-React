import React, { Component } from 'react';
import ProgressBar from '../../progressBar/progressTwo'
import {AppraisalType} from './appraisalType'
import {AppraisalBtn} from './appraisalBtn'


export default class Type extends Component {

   state = {address:localStorage.getItem('address'),company:"",selectedOption:localStorage.getItem('appraisalType') }

    handleChangesFromChild= (changeEvent) => {
      console.log(changeEvent)
      localStorage.setItem("appraisalType",changeEvent)
      this.setState({
        selectedOption: changeEvent
      })
  }
  render() {
    return <div>
        <ProgressBar></ProgressBar>

        <div className="container mt-5 ">
        <div className="row ">
            <div className="col text-left texts">
              <b>{this.state.address}</b>
            </div>
            <div className="col text-center">
            
            </div>
            <div className="col text-right texts">
            <b>{this.state.company}</b>
            </div>
          </div>
        </div>
        
        <AppraisalType selectedOption={this.state.selectedOption} optionsUpdate={this.handleChangesFromChild} style={this.state.selectedOption}></AppraisalType>
        <AppraisalBtn></AppraisalBtn>
    </div>;
  }
}

