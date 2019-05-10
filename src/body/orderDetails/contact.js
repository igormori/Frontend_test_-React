import React from 'react';
 
export default class Contact extends React.Component {
    render() {
      return <div>

          <div className="container">
            <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 shadow bg-white rounded mt-5 mr-5 contactBox">
                    <div className="row">
                        <div className="col bg-danger topColor" width="1px">
                        </div>
                    </div>
                    <div className="row p-4 text-left">
                        <div className="col header" width="1px">
                        <div><b className="txtHeader">APPRAISAL DETAILS</b></div>
                        <div className="mt-3 mb-3 ">  
                            <div className="row text-left ">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="mt-3 "><b>Mortage Number</b></div>
                                    <input onChange={this.handleAddress} type="text" className="form-control bg-light" ></input>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="mt-3"><b>EPV</b></div>
                                    <input onChange={this.handleAddress} type="text" className="form-control bg-light" ></input>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 shadow bg-white rounded mt-5 contactBox2 ">
                    <div className="row">
                        <div className="col bg-danger topColor" width="1px">
                        </div>
                    </div>
                    <div className="row p-4 text-left">
                        <div className="col header" width="1px">
                        <div><b className="txtHeader">PAYMENT OPTIONS</b></div>
                            <div className="mt-3 mb-3 ">  
                            <div className="row text-left mt-4">
                                <div className="col-12">
                                    <input type="radio" className="mr-4" ></input>Pay by Lander
                                </div>
                                <div className="col-12">
                                    <input type="radio" className="mr-4"></input>Pay by Broker
                                </div>
                                <div className="col-12">
                                    <input type="radio" className="mr-4"></input>Pay by Customer
                                </div>
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
            <div className="row p-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 header border-right inspectionBox">
              <div><b className="txtHeader">PROPERTY INSPECTION CONTACT</b></div>
              <div className="row text-left mt-4">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
                   <input type="radio" className="mr-2" ></input>Client
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                 <input type="radio" className="mr-2"></input>Real State Agent
              </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <input type="radio" className="mr-2"></input>Builder
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <input type="radio" className="mr-2"></input>Superintendent
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <input type="radio" className="mr-2"></input>Other
                </div>
            </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 header inspectionBox2">
              <div><b className="txtHeader"> CONTACT</b></div>
              <div className="row text-left ">
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                <div className="mt-3 "><b>Name</b></div>
                                    <input onChange={this.handleAddress} type="text" className="form-control bg-light" ></input>
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                <div className="mt-3"><b>Phone</b></div>
                                    <input onChange={this.handleAddress} type="text" className="form-control bg-light" ></input>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="mt-3"><b>Email</b></div>
                                    <input onChange={this.handleAddress} type="text" className="form-control bg-light" ></input>
                                </div>
                            </div>
              </div>
            </div>
          </div>

      </div>;
    }
  }