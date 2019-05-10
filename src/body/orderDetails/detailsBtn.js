import React from 'react';
import { Link } from 'react-router-dom'


export default class DetailsBtn extends React.Component {
    render() {
      return <div>
         
          <div className="container mt-5  mb-2 ">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 btnBackCol ">
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 btnSaveCol">
              <Link  to="/submit">
              <button type="submit" className="btnSave rounded"><b> Submit</b></button>
              </Link>
              </div>
            </div>
          </div>
          
      </div>;
    }
  }