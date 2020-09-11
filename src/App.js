<<<<<<< HEAD
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
=======
import React from 'react'
import Header from './app/components/Header'
import Routes from './app/Routes';
function App() {
  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
>>>>>>> 3e2e6d44c1e57ba786b7a1c5eb6a9b3a25fb51bf
