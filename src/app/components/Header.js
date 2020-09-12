import React, { Component } from 'react'
import MMText from 'react-mm-text';
import language from '../../configs/Language'
import logo from '../smlogo.png';
import { Link } from 'react-router-dom';
import '../styles.css'

class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light "
                style={{ backgroundColor: "#dab03c" }} >

                <Link className="navbar-brand d-flex">
                    <img src={logo} alt="logo text" className="imgLogo rounded-circle " />
                    <p className="logoText" >
                        <small>
                            <MMText
                                text={language["mm"].logotext}
                                showFont={"unicode"}
                                conveter={"rabbit"}
                                detector={"knayi"}
                            />
                        </small>
                        <br />
                        <span className="logoText2">
                            <MMText
                                text={language["mm"].shop}
                                showFont={"unicode"}
                                conveter={"rabbit"}
                                detector={"knayi"}
                            />
                        </span>
                    </p>

                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="nav navbar-nav ml-auto">
                        <Link to="/home" style={{textDecoration:'none'}} >
                        <li class="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show" >
                            <a  class="nav-link" style={{ fontSize: '1.2em' }}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to="/discount" style={{ textDecoration:'none' }}>
                        <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a class="nav-link" style={{ fontSize: '1.2em' }}>New Arrival</a>
                        </li>
                        </Link >
                        <Link style={{textDecoration:'none'}} >
                        <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a class="nav-link" style={{ fontSize: '1.2em' }}>Popular</a>
                        </li>
                        </Link>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" style={{ fontSize: '1.2em' }} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Jwellery
                          </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <Link><a class="dropdown-item mb-3" href="#">Necklace</a></Link>
                                <Link><a class="dropdown-item mb-3" href="#">Bracelet</a></Link>
                                <Link><a class="dropdown-item mb-3" href="#">Earrings</a></Link>
                                <Link><a class="dropdown-item mb-3" href="#">Ring</a></Link>
                                <Link><a class="dropdown-item mb-3" href="#">Pendant</a></Link>

                                <hr />
                                <Link><a class="dropdown-item bg-warning" href="#">Discount Items</a></Link>


                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" style={{ fontSize: '1.2em' }} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Info
                          </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link><a class="dropdown-item" href="#">Convertor</a></Link>
                                <hr />
                                <Link><a class="dropdown-item bg-warning" href="#">Loan Calculator</a></Link>

                            </div>
                        </li>
                        <Link>
                        <li class="nav-item">
                            <a class="nav-link" style={{ fontSize: '1.2em' }} href="#">Contact Us</a>
                        </li>
                        </Link>
                    </ul>
                </div>

            </nav>


        );
    }
}
export default Header;