import React, { Component } from 'react'
import Contact from '../features/contacts/contact'
import ContactCC from '../home/components/Contact_Carousel'
import Slider from '../../src/home/components/Carousel'

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container" style={{ overflowX: 'hidden'}}>
        <ContactCC/>
        <Contact/>
       
      </div>
    )
  }
}