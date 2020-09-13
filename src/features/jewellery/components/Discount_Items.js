import React from 'react';
import ProductFilter from '../../products/components/ProductFilter';
import Shop_contant from '../../home/components/shop_contant';
export default class Discount_Items extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="card card-body bg-light border-none">
                    <span style={{color: 'black',height: 80,textAlign: "center",backgroundColor: "#e5b73b",borderRadius:10}}><br></br>3% Discount (from 7-APR-2019 to 8-APR-2019 )</span>
                </div>
                <Shop_contant/>
            </div>
        )
    }
}