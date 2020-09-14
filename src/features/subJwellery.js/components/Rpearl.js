import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'

import Bracelet_nav from '../../jewellery/components/bracelet_nav'
import Ring_nav from '../../jewellery/components/ring_nav'
export default class Rpearl extends React.Component{
    render(){
        return(
            <div className="container">
                <Ring_nav/>
                {/* <ProductFilter /> */}
                
                <Shop_contant/>
            </div>
        )
    }
}