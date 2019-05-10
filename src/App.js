import React from 'react';
import './App.css';
import Header from './header/header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Address from './body/address/address'
import Type from './body/appraisalType/type'
import Company from './body/appraisalCompany/company'
import Details from './body/orderDetails/details' 
import Body from './body/body'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <BrowserRouter>
      <Switch> 
        
        
        <Route path="/type" component={Type}/>
        <Route path="/company" component={Company}/>
        <Route path="/details" component={Details}/>
        <Route path="/submit" component={Body}/>
        <Route path="/" component={Address}/>
        
      </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
