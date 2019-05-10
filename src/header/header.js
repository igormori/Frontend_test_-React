import React, { Component } from 'react';
import './header.css'
import Image from 'react-bootstrap/Image'

class Header extends Component {
  render() {
    return <div>
      <div className="container-fluid">
        <div className="row bg-white pt-4 pb-4">
          <div className="col-sm-0 col-md-0 col-lg-6 col-xl-6"></div>
            <div className="col-sm col-md col-lg-6 col-xl-6" >
              <i className="far fa-bell fa-2x grey mr-3 icons "></i>
              <span className="step mr-5">7</span>
              <i className="fas fa-envelope-open-text fa-2x grey mr-3 icons"></i>
              <span className="step">9</span>
              <Image src={require("../pictures/profile_picture.jpg")} roundedCircle width="60px" className="ml-5 picture" />
            </div>
        </div>    
      </div>
    </div>;
  }
}

export default Header;
