import React, { Component } from 'react';
import ProgressBar from '../../progressBar/progressThree'
import {AppraisalBtn} from './appraisalBtn'
import {AppraisalCompany} from './appraisalCompany'

class Company extends Component {
  state = {address:localStorage.getItem('address'),selectedOption:localStorage.getItem('appraisalCompany') }

    handleChangesFromChild= (changeEvent) => {
      console.log(changeEvent)
      localStorage.setItem("appraisalCompany",changeEvent)
      this.setState({
        selectedOption: changeEvent
      })
  }

  componentWillMount(){
    this.setState({
     type:localStorage.getItem("appraisalType")
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
            <div className="col text-center texts">
            <b>{this.state.type}</b>
            </div>
            <div className="col text-right">
            </div>
          </div>
        </div>
      <AppraisalCompany selectedOption = {this.state.selectedOption} optionsUpdate={this.handleChangesFromChild} style={this.state.selectedOption}></AppraisalCompany>
      <AppraisalBtn></AppraisalBtn>
  
        
    </div>;
  }
}

export default Company;
