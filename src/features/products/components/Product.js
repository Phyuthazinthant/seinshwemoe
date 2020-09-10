import React from 'react';
import First from '../../../assets/image/first.jpg'
import Second from '../../../assets/image/second.jpg'
import Third from '../../../assets/image/third.jpg'
import Four from '../../../assets/image/four.jpg'
import Five from '../../../assets/image/five.jpg'
import Six from '../../../assets/image/six.jpg'
import Seven from '../../../assets/image/seven.jpg'
import Eigth from '../../../assets/image/eight.jpg'
import Nine from '../../../assets/image/nine.jpg'
import Ten from '../../../assets/image/ten.jpg'
import Eleven from '../../../assets/image/11.jpg'
import Twelve from '../../../assets/image/12.jpg'
import '../styles.css'

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle:"none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4',borderStyle:"none" }}>

                                <img src={First} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Code No - 0001<br></br></h5>

                                </div>
                                <div>
                                    <hr className="new1" style={{display:"block"}}></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                <img src={Second} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Code No - 0002<br></br></h5>
                                </div>
                                <div>
                                    <hr className="new1" style={{display:"block"}}></hr>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4">
                        <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                            <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                <img src={Third} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Code No - 0003<br></br></h5>
                                </div>
                                <div>
                                    <hr className="new1" style={{display:"block"}}></hr>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Four} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0004<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>
                                    <img src={Five} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0005<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Six} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0006<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Seven} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0007<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>
                                    <img src={Eigth} className="card-img-top zoom" alt="Sein Shwe Moe" style={{height: 365}}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0008<br></br></h5>

                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Nine} className="card-img-top zoom" alt="Sein Shwe Moe" ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0009<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Ten} className="card-img-top zoom" alt="Sein Shwe Moe"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0010<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>
                                    <img src={Eleven} className="card-img-top zoom" alt="Sein Shwe Moe" style={{ height: 365 }}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0011<br></br></h5>

                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper  " style={{ backgroundColor: '#f4f4f4' }}>

                                    <img src={Twelve} className="card-img-top zoom" alt="Sein Shwe Moe" ></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Code No - 0012<br></br></h5>
                                    </div>
                                    <div>
                                        <hr className="new1" style={{display:"block"}}></hr>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>





        )
    }

}