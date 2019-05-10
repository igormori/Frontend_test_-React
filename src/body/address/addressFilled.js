import React from 'react';


export default class AddressFilled extends React.Component {

  
  componentDidMount(){
    console.log(this.props.streetNumber)
  }
  
    render() {
      return <div>
          <div className="row p-4 text-left">
            <div className="col ">
              <div >Street Number</div>
              <input onChange={this.handleAddress} type="text" value={this.props.streetNumber} className="form-control bg-light" ></input>
            </div>
            <div className="col ">
              <div >Street Name</div>
              <input onChange={this.handleAddress} type="text" value={this.props.streetName} className="form-control bg-light" ></input>
            </div>
            <div className="col ">
              <div >Street Type</div>
              <input onChange={this.handleAddress} type="text" value={this.props.streetType} className="form-control bg-light" ></input>
            </div>  
            <div className="col ">
              <div >Street Direction</div>
              <input onChange={this.handleAddress} type="text" value={this.props.streetDirection} className="form-control bg-light" ></input>
            </div>
            
          </div>

          <div className="row p-4 text-left">
            <div className="col  ">
              <div >Apt/Suit</div>
              <input onChange={this.handleAddress} type="text"  className="form-control bg-light" ></input>
            </div>
            <div className="col ">
              <div >City</div>
              <input onChange={this.handleAddress} type="text" value={this.props.city} className="form-control bg-light" ></input>
            </div>
            <div className="col ">
              <div >Province</div>
              <input onChange={this.handleAddress} type="text" value={this.props.province} className="form-control bg-light" ></input>
            </div>  
            <div className="col ">
              <div >Postal</div>
              <input onChange={this.handleAddress} type="text" value={this.props.postal} className="form-control bg-light" ></input>
            </div>
            
          </div>
          
          
          
      </div>;
    }
  }