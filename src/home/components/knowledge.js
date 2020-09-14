import React from 'react'
import Gold from './images/gold.jpg'
import Gem from './images/gem.jpeg'
import ProductList from './ProductList'
import Knowledge2 from './Knowledge2'

function Knowledge() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"><img class="img-fluid" src={Gold} alt="Gold" /></div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"> <ProductList /></div>
                <div class="w-100"></div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"><img src={Gem} alt="Gem" /></div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"><Knowledge2 /></div>
            </div>
        </div>
      
    )
}

export default Knowledge
