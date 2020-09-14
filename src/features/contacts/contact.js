import React, { Component, createContext } from 'react'
import MMText from 'react-mm-text'
import lan from '../../configs/Language'
import Map from './ssm_map'
import './contactstyle.css'

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const clan = "mm"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-2 p-0">
                        <Map />
                    </div>
                    <div className="col-lg-3 col-xs-6 col-sm-12 card border-0 pb-2">
                        <div className="text-center">
                            <div className="card-body">
                                <p>
                                    <i class="fas fa-map-marked-alt"></i>&nbsp;
                                    <MMText
                                        text={lan[clan].address2}
                                        showFont={"unicode"}
                                        converter={"rabbit"}
                                        detector={"knayi"} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6  col-sm-12 card border-0 pb-2">
                        <div class="text-center">
                            <div class="card-body">
                                <p>
                                    <i class="far fa-clock"></i>&nbsp;Opening Time<br />
                                    <small>Everyday  9:00 AM - 6:00 PM</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6  col-sm-12 card border-0 pb-2">
                        <div class="">
                            <div class="card-body " >
                                <p style={{ alignItems: "left" }}>
                                    <i class="fas fa-mobile-alt"></i>&nbsp;Phone <br />
                                    <small>(+95)9-798988144</small>   <br />
                                    <small>(+95)9-783510998</small>  <br />
                                    <small>(+95)9-2100927 </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6  col-sm-12  card border-0 pb-2" >
                        <div class=" text-dark text-center">
                            <div class="card-body">
                                <p> <i class="fa fa-thumbs-up" ></i>&nbsp;Facebook Page<br />
                                    <a href='https://www.facebook.com/seinshwemoegold/' target="_blank"  >
                                        <i className="fab fa-facebook-square" style={{ fontSize: '48px' }}></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
