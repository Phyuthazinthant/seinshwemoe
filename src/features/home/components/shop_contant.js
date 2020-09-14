import React from 'react'
import Showroom from '../../../assets/image/showroom3.jpg'
import './homestyle.css'
import {Link} from 'react-router-dom';
export default class Shop_contant extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="shop-contant">
                    <img src={Showroom} alt="ssm shop" className="w-100" />
                    <div className="shop_text text-center ">
                        <span>Sein Shwe Moe
                    <br></br>Gold and Jwellery Shop
                    </span><br></br>
                    <Link className="btn btn-warning" to="/contactus" style={{color:'black'}}>More...</Link>
                    </div>
                </div>
            </div>
        )
    }
}