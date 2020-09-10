import React from 'react'
import ProductList from '../features/products/components/ProductList'
import Shop_contant from '../features/home/components/shop_contant'
export default class DiscountPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ProductList />
                <Shop_contant />
            </div>
        )
    }
}