import React, { Component } from 'react'
import p1 from './images/p1.jpeg'
import p2 from './images/p2.jpeg'
import p3 from './images/p3.jpeg'
import p4 from './images/p4.jpeg'
import p5 from './images/p5.jpeg'
import p6 from './images/p6.jpg'
import p7 from './images/p7.jpg'
import p8 from './images/p8.jpg'
import p9 from './images/p9.jpg'
import p10 from './images/p10.jpg'
import p11 from './images/p11.jpg'
import p12 from './images/p12.jpg'
import p13 from './images/p13.jpg'
import p14 from './images/p14.jpg'
import p15 from './images/p15.jpg'
import p16 from './images/p16.jpg'
import p17 from './images/p17.jpg'
import p18 from './images/p18.jpg'
import '../../features/products/styles.css'


class PopularList extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        let products = [{ "img": p1, "id": "Code No - 0001" }, { "img": p2, "id": "Code No -0002" },
        { "img": p3, "id": "Code No - 0003" }, { "img": p4, "id": "Code No - 0004" }, { "img": p5, "id": "Code No - 0005" },
        { "img": p6, "id": "Code No - 0006" }, { "img": p7, "id": "Code No - 0007" }, { "img": p8, "id": "Code No - 0008" }, { "img": p9, "id": "Code No - 0009" },
        { "img": p10, "id": "Code No - 0010" }, { "img": p11, "id": "Code No - 0011" }, { "img": p12, "id": "Code No - 0012" },
        { "img": p13, "id": "Code No - 0013" }, { "img": p14, "id": "Code No - 0014" }, { "img": p15, "id": "Code No - 0015" },
        { "img": p16, "id": "Code No - 0016" }, { "img": p17, "id": "Code No - 0017" }, { "img": p18, "id": "Code No - 0018" }]
        return (
            <div className="container">
                <div className="row">

                    {products.map((result) =>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">

                            <div className="card cta cta--featured cardImage d-flex justify-content-around " style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>
                                <div className="card-block zoomWrapper" style={{ backgroundColor: '#f4f4f4', borderStyle: "none" }}>

                                    <img src={result.img} height="330" width="330" className="card-img-top zoom " alt="Sein Shwe Moe" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{result.id}<br></br></h5>

                                    </div>
                                    <div>
                                        <hr className="new1" style={{ display: "block" }}></hr>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        );
    }
}
export default PopularList;




