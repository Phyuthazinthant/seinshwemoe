import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'

import Bracelet_nav from '../../jewellery/components/bracelet_nav'
import Earring_nav from '../../jewellery/components/earring_nav'
export default class Egold extends React.Component{
    render(){
        return(
            <div className="container">
                <Earring_nav/>
                {/* <ProductFilter /> */}
                
                <Shop_contant/>
            </div>
        )
    }
}