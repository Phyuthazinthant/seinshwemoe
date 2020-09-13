import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'

import Bracelet_nav from '../../jewellery/components/bracelet_nav'
import Ring_nav from '../../jewellery/components/ring_nav'
import Pendant_nav from '../../jewellery/components/pendant_nav'
export default class Pdiamond extends React.Component{
    render(){
        return(
            <div className="container">
                <Pendant_nav/>
                {/* <ProductFilter /> */}
                <h1>hello pendent diamond page</h1>
                <Shop_contant/>
            </div>
        )
    }
}