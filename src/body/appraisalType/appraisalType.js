import React from 'react';

export class AppraisalType extends React.Component {


  
    render() {
      var checkBox01 ="";var checkBox02 ="";var checkBox03 ="";var checkBox04 ="";var checkBox05 ="";

      this.props.selectedOption === "Acreage Appraisal" ? checkBox01 = 'chkBox01' :
      this.props.selectedOption === "AVM (Automated Valuation Model" ? checkBox02 = 'chkBox02' :
      this.props.selectedOption === "Mobile/Modular Fixed Foundation inspection Only" ? checkBox03 = 'chkBox03' :
      this.props.selectedOption === "Acreage Appraisal2" ? checkBox04 = 'chkBox04' :
      this.props.selectedOption === "Acreage Appraisal3" ? checkBox05 = 'chkBox05' :
      checkBox05 = "notSelected";
     

      return <div>
          <form>
          <div className="container mt-5 shadow bg-white rounded">
            <div className="row">
              <div className="col bg-danger topColor" width="1px"></div>
            </div>
            <div className="row p-4 text-left">
              <div className="col header">
                <div><b className="txtHeader">APPRAISAL TYPE</b></div>
                <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center">
                  <div className="row rounded border btnCheckBox m-1 mt-4 boxes" id={checkBox01} onClick={() => this.props.optionsUpdate("Acreage Appraisal")}>
                    <div className='col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                    <input type="radio" className="radio" value="Acreage Appraisal" checked={this.props.selectedOption === 'Acreage Appraisal'} ></input>
                    </div>
                    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <b> Acreage Appraisal</b>
                    </div>
                  </div>  
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center">
                  <div className="row rounded border btnCheckBox m-1 mt-4 boxes" id={checkBox02} onClick={() => this.props.optionsUpdate("AVM (Automated Valuation Model")}>
                    <div className='col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                    <input type="radio" value="AVM (Automated Valuation Model" className="radio" checked={this.props.selectedOption === 'AVM (Automated Valuation Model'}></input>
                    </div>
                    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <b> AVM (Automated Valuation Model</b>
                    </div>
                  </div>  
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3  text-center">
                  <div className="row rounded border btnCheckBox m-1 mt-4 boxes" id={checkBox03} onClick={() => this.props.optionsUpdate("Mobile/Modular Fixed Foundation inspection Only")}>
                    <div className='col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                    <input type="radio" className="radio" value="Mobile/Modular Fixed Foundation inspection Only"  checked={this.props.selectedOption === 'Mobile/Modular Fixed Foundation inspection Only'} ></input>
                    </div>
                    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <b> Mobile/Modular Fixed Foundation inspection Only</b>
                    </div>
                  </div>  
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center">
                  <div className="row rounded border  btnCheckBox m-1 mt-4 boxes " id={checkBox04} onClick={() => this.props.optionsUpdate("Acreage Appraisal2")}>
                    <div className='col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                    <input type="radio" className="radio" value="Acreage Appraisal2"  checked={this.props.selectedOption === 'Acreage Appraisal2'} ></input>
                    </div>
                    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <b> Acreage Appraisal</b>
                    </div>
                  </div>  
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center ">
                  <div className="row rounded border btnCheckBox m-1 mt-4 boxes" id={checkBox05} onClick={() => this.props.optionsUpdate("Acreage Appraisal3")}>
                    <div className='col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                    <input type="radio" className="radio" value="Acreage Appraisal3" checked={this.props.selectedOption === 'Acreage Appraisal3'}></input>
                    </div>
                    <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 '>
                    <b> Acreage Appraisal</b>
                    </div>
                  </div>  
                  </div>
                </div>
                
              </div>
            </div>
          </div>
  
          
          </form>
          
  
      </div>;
    }
  }
  