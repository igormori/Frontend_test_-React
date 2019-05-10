import React from 'react';
import { Link } from 'react-router-dom'


export class AppraisalBtn extends React.Component {
    render() {
      return <div>
         
          <div className="container mt-5  mb-2 ">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 btnBackCol ">
              <Link  to="/address">
              <button type="submit" className="btnBack border border-primary text-primary rounded bg-light"><b>Back</b></button>
              </Link>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 btnSaveCol">
              <Link  to="/company">
              <button type="submit" className="btnSave rounded"><b> Save and continue</b></button>
              </Link>
              </div>
            </div>
          </div>
          
      </div>;
    }
  }