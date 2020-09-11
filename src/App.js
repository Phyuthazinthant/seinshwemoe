import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiscountPage from './features/products/components/DiscountPage';
import Footer from './app/components/Footer';
import Routes from './app/routes'

import {BrowserRouter} from 'react-router-dom'
export default class App extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:'#f4f4f4'}}>
      <BrowserRouter>
         <Routes />
       </BrowserRouter>
       </div>
    )
  }
}
