import React from 'react'
import Crl1 from './images/crl1.jpg';
import Crl2 from './images/crl2.jpg';
import Crl3 from './images/crl3.jpg';
import Crl4 from './images/crl4.jpg';
import MMText from 'react-mm-text';


function Carousel() {
    return (

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Crl1} class="d-block w-100" alt="crl1"
                        style={{ width: "500px", height: "500px" }} />
                </div>
                <div class="carousel-item">
                    <img src={Crl2} class="d-block w-100" alt="Crl2"
                        style={{ width: "500px", height: "500px" }} />
                </div>
                <div class="carousel-item">
                    <img src={Crl3} class="d-block w-100" alt="Crl3"
                        style={{ width: "500px", height: "500px" }} />
                </div>
                <div class="carousel-item">
                    <img src={Crl4} class="d-block w-100" alt="Crl4"
                        style={{ width: "500px", height: "500px" }} />
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
            <marquee direction="right" style={{ color: 'olive', fontSize: '1.2em' }}>
                <MMText
                    text={" ယေန့ ျမန္မာ့ေရႊေပါက္ေစ်း   1,330,000 MMK."}
                    showFont={"unicode"}
                    conveter={"rabbit"}
                    detector={"knayi"}
                />
            </marquee>
           


                    </div>

    )
}

export default Carousel
