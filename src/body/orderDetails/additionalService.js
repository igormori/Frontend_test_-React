import React from 'react';
import '../body.css'
 
export default class UnderWriter extends React.Component {

    state={
      selectedOption:""
    }

    optionsUpdate= (changeEvent) => {
      localStorage.setItem("appraisalCompany",changeEvent)
      this.setState({
        selectedOption: changeEvent
      })
    }
    render() {
      var checkBox01 ="";var checkBox02 ="";var checkBox03 ="";

      this.state.selectedOption === "As Is $200" ? checkBox01 = 'chkBox01' :
      this.state.selectedOption === "As Improved $200" ? checkBox02 = 'chkBox02' :
      this.state.selectedOption === "Market Rent $200" ? checkBox03 = 'chkBox03' :
      checkBox02 = "notSelected";

      return <div>
            <div className="container mt-5 shadow bg-white rounded">
          <div className="row">
            <div className="col bg-danger topColor" width="1px"></div>
          </div>
          <div className="row p-4 ">
            <div className="col header">
              <div><b className="txtHeader">APPRAISAL COMPANY</b></div>   
              <div className="row mt-3">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox01} onClick={() => this.optionsUpdate("As Is $200")} >
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  As Is
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$200</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox02} onClick={() => this.optionsUpdate("As Improved $200")}>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  As Improved
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$200</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox03} onClick={() => this.optionsUpdate("Market Rent $200")}>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Market Rent
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$200</b>
                  </div>
                </div>  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 shadow bg-white rounded">
          <div className="row">
              <div className="col bg-danger topColor" width="1px">
              </div>
            </div>
            <div className="row p-4 text-left">
              <div className="col header">
                <div><b className="txtHeader">SPECIAL INSTRUCTIONS</b></div>
                <div className="mt-3 mb-3 ">  
                <div className="row  ">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <textarea className="form-control bg-light " rows="3"></textarea>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 text-right mt-2">
                     <button type="submit" className="btnBack border border-primary text-primary rounded bg-light"><b>Upload Document</b></button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
  

      </div>;
    }
  }