import React from 'react'
import ProductFilter from '../../products/components/ProductFilter'
import Shop_contant from '../../home/components/shop_contant'
import JBGems1 from '../../../assets/image/bgems1.jpeg'
import JBGems2 from '../../../assets/image/bgems2.jpg'
import Bracelet_nav from '../../jewellery/components/bracelet_nav'
import Earring_nav from '../../jewellery/components/earring_nav'
export default class Ejade extends React.Component{
    render(){
        return(
            <div className="container">
                <Earring_nav/>
                {/* <ProductFilter /> */}
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>

                                <img src={JBGems1} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height:300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0001</h5><br></br>

                                {/* </div> */}
                                <div>
                                    <hr className="new1" style={{ display: "block" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>

                                <img src={JBGems2} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height:300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0002</h5><br></br>

                                {/* </div> */}
                                <div>
                                    <hr className="new1" style={{ display: "block" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <Shop_contant/>
            </div>
        )
    }
}