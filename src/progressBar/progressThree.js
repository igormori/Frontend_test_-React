import React, { Component } from 'react';
import "./progressBar.css"


class ProgressThree extends Component {
  state = {
    newLine:""
  }
  componentWillMount(){
    if(window.innerWidth< 600){
        this.setState({
          newLine:<br></br>
        })
    }
  }
  render() {
    return <div>
    <div className="container mt-5">
      <div className="row mb-3 text-left">
        <div className="col">
          <span className="steps2 mr-2">1</span>{this.state.newLine}
          <b className="text">Add address</b>
        </div>
        <div className="col">
          <span className="steps2 mr-2">2</span>{this.state.newLine}
          <b className="text">Appraisal type</b>
        </div>
        <div className="col">
          <span className="steps mr-2">3</span>{this.state.newLine}
          <b className="textActive">Appraisal Company</b>
        </div>
        <div className="col">
          <span className="steps2 mr-2">4</span>{this.state.newLine}
          <b className="text">Order Details</b>
        </div>
      </div>
      <div className="row shadow-sm">
      <div className="col bg-danger rounded-left progressBar ">
      
      </div>
      <div className="col bg-danger progressBar  ">
      
      </div>
      <div className="col bg-danger progressBar  ">
      
      </div>
      <div className="col bg-white rounded-right progressBar ">
      
      </div>
    </div>
    </div>
    </div>;
  }
}

export default ProgressThree;
