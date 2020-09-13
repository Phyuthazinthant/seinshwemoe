import React from 'react'
import JE1 from '../../../assets/image/e1.jpeg'
import JE2 from '../../../assets/image/e2.jpeg'
import JE3 from '../../../assets/image/e3.jpeg'
import JE4 from '../../../assets/image/e4.jpeg'
import JE5 from '../../../assets/image/e5.jpg'

import Shop_contant from '../../home/components/shop_contant';
import Earring_nav from './earring_nav'
export default class Earrings extends React.Component{
    render(){
        return(
            <div className="container">
                <Earring_nav/>
                {/* <ProductFilter /> */}
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>

                                <img src={JE1} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 300}}></img>
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

                                <img src={JE2} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0002</h5><br></br>

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

                                <img src={JE3} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0003</h5><br></br>

                                {/* </div> */}
                                <div>
                                    <hr className="new1" style={{ display: "block" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>

                                <img src={JE4} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0004</h5><br></br>

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

                                <img src={JE5} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 300}}></img>
                                {/* <div className="card-body"> */}
                                <h5 className="card-title text-center">Code No - 0005</h5><br></br>

                                {/* </div> */}
                                <div>
                                    <hr className="new1" style={{ display: "block" }}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Shop_contant />
            </div>
        )
    }
}