import React from 'react';

export class AppraisalCompany extends React.Component {

    render() {
      var checkBox01 ="";var checkBox02 ="";var checkBox03 ="";var checkBox04 ="";var checkBox05 ="";

      this.props.selectedOption === "Appraisal Company 01 $150" ? checkBox01 = 'chkBox01' :
      this.props.selectedOption === "Appraisal Company 02 $200" ? checkBox02 = 'chkBox02' :
      this.props.selectedOption === "Appraisal Company 03 $170" ? checkBox03 = 'chkBox03' :
      this.props.selectedOption === "Appraisal Company 04 $150" ? checkBox04 = 'chkBox04' :
      this.props.selectedOption === "Appraisal Company 05 $300" ? checkBox05 = 'chkBox05' :
      checkBox05 = "notSelected";

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
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox01} onClick={() => this.props.optionsUpdate("Appraisal Company 01 $150")} >
                  <div className='col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <input type="radio" checked={this.props.selectedOption === 'Appraisal Company 01 $150'}></input>
                  </div>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Appraisal Company 01
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$150</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox02} onClick={() => this.props.optionsUpdate("Appraisal Company 02 $200")}>
                  <div className='col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <input type="radio" checked={this.props.selectedOption === 'Appraisal Company 02 $200'}></input>
                  </div>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Appraisal Company 02
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$200</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox03} onClick={() => this.props.optionsUpdate("Appraisal Company 03 $170")}>
                  <div className='col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <input type="radio" checked={this.props.selectedOption === 'Appraisal Company 03 $170'}></input>
                  </div>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Appraisal Company 03
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$170</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                <div className="row rounded border btnCheckBox  mt-4 boxesCompany" id={checkBox04} onClick={() => this.props.optionsUpdate("Appraisal Company 04 $150")}>
                  <div className='col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <input type="radio" checked={this.props.selectedOption === 'Appraisal Company 04 $150'}></input>
                  </div>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Appraisal Company 04
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$150</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center ">
                <div className="row rounded border btnCheckBox mt-4 boxesCompany" id={checkBox05} onClick={() => this.props.optionsUpdate("Appraisal Company 05 $300")}>
                  <div className='col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <input type="radio" checked={this.props.selectedOption === 'Appraisal Company 05 $300'}></input>
                  </div>
                  <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 boxLabel'>
                  Appraisal Company 05
                  </div>
                  <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <b>$300</b>
                  </div>
                </div>  
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center pt-3 ">
                <div className="row rounded border btnCheckBox mt-4 boxesMoreCompanies">
                  <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                  <b>More Appraisal Companies </b>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <i class="fas fa-angle-right fa-2x icons pt-1"></i>
                  </div>
                </div>  
                </div>
              </div>
              
            </div>
          </div>
        </div>
          
  
      </div>;
    }
  }
  