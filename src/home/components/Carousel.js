import React from 'react'
import Crl1 from './images/crl1.jpg';
import Crl2 from './images/crl2.jpg';
import Crl3 from './images/crl3.jpg';
import Crl4 from './images/crl4.jpg';
import MMText from 'react-mm-text';
import Shop_contant from '../../features/home/components/shop_contant'
import Knowledge from './Knowledge';
import './cstyles.css'
function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" class=" carousel_gp_img carousel slide " data-ride="carousel">
                <div class="carousel-inner " >
                    <div class="carousel-item active col-12">
                        <img src={Crl2} class="d-block w-100" alt="crl2" />
                    </div>
                    <div class="carousel-item">
                        <img src={Crl1} class="d-block w-100" alt="Crl1" />
                    </div>
                    <div class="carousel-item">
                        <img src={Crl3} class="d-block w-100" alt="Crl3" />
                    </div>
                    <div class="carousel-item">
                        <img src={Crl4} class="d-block w-100" alt="Crl4" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

                <marquee direction="right" style={{ fontSize: '1.2em', padding: "20px" }} >
                    <MMText
                        text={" ယေန့ ျမန္မာ့ေရႊေပါက္ေစ်း   1,330,000 MMK."}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </marquee>
            </div>
            <Knowledge />
            <Shop_contant />
        </div>
    )
}

export default Carousel
