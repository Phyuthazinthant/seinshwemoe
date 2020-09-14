import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'
import Necklace_nav from '../../jewellery/components/necklace-nav'
export default class Njade extends React.Component{
    render(){
        return(
            <div className="container">
                <Necklace_nav />
                {/* <ProductFilter /> */}
                
                <Shop_contant/>
            </div>
        )
    }
}