import React from 'react';
 
export default class UnderWriter extends React.Component {
    render() {
      return <div>
          <div className="container mt-5 shadow bg-white rounded">
          <div className="row">
              <div className="col bg-danger topColor" width="1px">
              </div>
            </div>
            <div className="row p-4 text-left">
              <div className="col header">
                <div><b className="txtHeader">UNDERWRITER</b></div>
                <div className="mt-3 mb-3 ">  
                <input type="radio" className="mr-2"></input>Small Commercial
                <input type="radio" className="mr-2 ml-4"></input>Residential
                </div>
                <input onChange={this.handleAddress} placeholder="Type UnderWriter`s name or Select from dropdown" type="text" className="form-control bg-light "></input>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 shadow bg-white rounded mt-5 mr-5 transactionBox">
                    <div className="row">
                        <div className="col bg-danger topColor" width="1px">
                        </div>
                    </div>
                    <div className="row p-4 text-left">
                        <div className="col-sm header" width="1px">
                        <div><b className="txtHeader">TRANSACTION TYPE</b></div>
                        <div className="mt-3 mb-3 ">  
                            <div className="row text-left mt-4">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <input type="radio" className="mr-2" ></input>Purchase
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <input type="radio" className="mr-2"></input>Transfer
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <input type="radio" className="mr-2"></input>Refinance
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 shadow bg-white rounded mt-5 transactionBox2">
                    <div className="row">
                        <div className="col bg-danger topColor" width="1px">
                        </div>
                    </div>
                    <div className="row p-4 text-left">
                        <div className="col-sm header" width="1px">
                        <div><b className="txtHeader">REQUIRED BY DATE</b></div>
                            <div className="mt-3 mb-3 ">  
                            <div className="row text-left mt-4">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
                                <input type="radio" className="mr-2"></input>Choose Date
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 ">
                                <input type="radio" className="mr-2 ml-4"></input>Rush (Deliver by tomorrow) $150 extra
                                </div>
                               
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