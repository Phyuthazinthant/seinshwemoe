import React from 'react'
import ProductList from './ProductList'
import Shop_contant from '../../home/components/shop_contant'
export default class DiscountPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ProductList />
                <Shop_contant/>
            </div>
        )
    }
}