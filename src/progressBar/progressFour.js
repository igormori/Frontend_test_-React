import React, { Component } from 'react';
import "./progressBar.css"


class ProgressFour extends Component {
  state = {
    newLine:""
  }
 
  render() {
    
    if(window.innerWidth <= 980){
      var line =<br></br>
  }
    return <div>
    <div className="container mt-5">
      <div className="row mb-3 text-left">
        <div className="col">
          <span className="steps2 mr-2">1</span>{line}
          <b className="text">Add address</b>
        </div>
        <div className="col">
          <span className="steps2 mr-2">2</span>{line}
          <b className="text">Appraisal type</b>
        </div>
        <div className="col">
          <span className="steps2 mr-2">3</span>{line}
          <b className="text">Appraisal Company</b>
        </div>
        <div className="col">
          <span className="steps mr-2">4</span>{line}
          <b className="textActive">Order Details</b>
        </div>
      </div>
      <div className="row shadow-sm">
      <div className="col bg-danger rounded-left progressBar ">
      
      </div>
      <div className="col bg-danger progressBar ">
      
      </div>
      <div className="col bg-danger progressBar ">
      
      </div>
      <div className="col bg-danger rounded-right progressBar ">
      
      </div>
    </div>
    </div>
    </div>;
  }
}

export default ProgressFour;
