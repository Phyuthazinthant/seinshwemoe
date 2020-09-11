
import React from 'react'
import '../styles.css'
export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="w-100">
            <div className="card-body text-center foot_text_gp" style={{height:280}}>
                <span>စိန်ရွှေမိုး စိန်ရွှေရတနာဆိုင်
                    <br></br>လက်ဝတ်ရတနာလက်လီလက်ကားအရောင်းဆိုင်
                    <br></br>ဆိုင်အမှတ်(G-86) ၇၈ လမ်း ။ ၃၃ * ၃၄ လမ်းကြား ဒိုင်းမွန်းပလာဇာ မန္တလေးမြို့
                    <br></br>
                    <span>
                        <ion-icon name="mail" role="img"></ion-icon>
                        seinshwemoegold@gmail.com
                        <ion-icon name="phone-portrait" role="img"></ion-icon>
                        +959798988144
                    </span>
                    <br></br>
                    <br></br>
                    <div className="card body text-center footer-bottom">
                        <span>
                           <br></br>
                            
                            <small className='text-center'>Copyright © 2019 -All Rights Reserved by SeinShweMoe   Developed By KumoSolutions</small>
                        </span>
                    </div>
                </span>
            </div>
            </div>
        )
    }
}

