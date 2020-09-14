
import React from 'react'
import Header from './app/components/Header'
import Routes from './app/routes';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
