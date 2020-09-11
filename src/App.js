<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiscountPage from './features/products/components/DiscountPage';
import Footer from './app/components/Footer';
import Routes from './app/routes'
import Contact from './features/contacts/contact'
import Service from './pages/ServicePage'

import {BrowserRouter} from 'react-router-dom'
export default class App extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:'#f4f4f4'}}>
       <BrowserRouter>
         <Routes />
       </BrowserRouter>
       <Contact/>
       <Service/>
       </div>
    )
  }
=======
import React from 'react'
import Header from './app/components/Header'
import Routes from './app/routes';
function App() {
  return (
    <div>
      <Routes />
    </div>
  )
>>>>>>> 2fbf3042ee23fd42e176af946f0a2c75051d09b2
}

export default App
