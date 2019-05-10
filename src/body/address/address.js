import React, { Component } from 'react';
import ProgressBar from '../../progressBar/progressOne'
import '../body.css'
import AddressBtn from './addressBtn'
import AddressFilled from './addressFilled'
import Script from 'react-load-script';




class Address extends Component {
  
  constructor(props) {
    super(props);


     // Bind Functions
     this.handleScriptLoad = this.handleScriptLoad.bind(this);
     this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
 
  }

  state = {
    addressFilled:"",
    btn:"",
    query: ''
  }
  
  handleScriptLoad() { 
    var options = { types: ['address'] }; 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById('autocomplete'),
                          options ); 
    this.autocomplete.addListener('place_changed',
                                  this.handlePlaceSelect); 
  }
     

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    if (address) {
      if(address[0] == null || address[1]  == null || address[2] == null ||  address[5] == null|| address[6] == null){
        window.alert("address not found")
      }else{
        this.setState({
          addressFilled:<AddressFilled  streetNumber={address[0].long_name}
          streetName={address[1].long_name} streetType={address[1].long_name}
          streetDirection={address[1].long_name} city={address[2].long_name} 
          province={address[5].long_name} postal={address[6].long_nam} ></AddressFilled>
          
        })
        localStorage.setItem("address",address[0].long_name+" "+address[1].long_name+", "+address[2].long_name+", "+address[5].long_name)
      }

      
    
      this.setState(
        {
          query: addressObject.formatted_address,
        }
        
      );

      console.log(this.state.postal)
    }
  }

  handleAddress = (address) =>{
    this.setState({
      addressFilled:<AddressFilled></AddressFilled>,
      btn:<AddressBtn></AddressBtn>
    })
    
  }
 
  
  

  

    
  render() {
    return <div>
        <ProgressBar></ProgressBar>
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlnlalL-MIRfoC9BOkFskN9trfsK-Imdk&libraries=places"          
      onLoad={this.handleScriptLoad}        
    />       
        <div className="container mt-5 shadow bg-white rounded">
        <div className="row">
            <div className="col bg-danger topColor" width="1px">
            </div>
          </div>
          <div className="row p-2 text-left">
            <div className="col header">
              <div><b className="txtHeader">ADDRESS</b></div>
              <div className="mt-3">Search Address</div>
              <input
              onChange={this.handleAddress} type="text" className="form-control"
              id="autocomplete"  hintText="Search City" 
              />
              
            </div>
          </div>
          {this.state.addressFilled}
        </div>
        {this.state.btn}
    </div>;
  }
}

export default Address;
