import React, { Component } from 'react';
import ProgressBar from '../../progressBar/progressFour'
import UnderWriter from './underWriter'
import DetailsBtn from './detailsBtn'
import Contact from './contact'
import AdditionalServices from './additionalService'

export default class Details extends Component {
  state = {
    address:localStorage.getItem('address'),
    type:localStorage.getItem('appraisalType'),
    company:localStorage.getItem('appraisalCompany')
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
            <div className="col text-right texts">
            <b>{this.state.company}</b>
            </div>
          </div>
        </div>
        <UnderWriter></UnderWriter>
        <Contact></Contact>
        <AdditionalServices></AdditionalServices>

        <DetailsBtn></DetailsBtn>
        
    </div>;
  }
}


