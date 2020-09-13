import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'
import Necklace_nav from '../../jewellery/components/necklace-nav'
import Bracelet_nav from '../../jewellery/components/bracelet_nav'
export default class Bdiamond extends React.Component{
    render(){
        return(
            <div className="container">
                <Bracelet_nav/>
                {/* <ProductFilter /> */}
                
                <Shop_contant/>
            </div>
        )
    }
}