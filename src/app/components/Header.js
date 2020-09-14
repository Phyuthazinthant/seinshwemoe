import React, { Component } from 'react'
import MMText from 'react-mm-text';
import language from '../../configs/Language'
import logo from '../smlogo.png';
import { Link } from 'react-router-dom';
import '../styles.css'
import Ngold from '../../features/subJwellery.js/components/Ngold'
import Necklace from '../../features/jewellery/components/Necklace';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#dab03c" }}>
                <Link className="navbar-brand d-flex" to="#">
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
                        <span >
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
                        <Link to="/carousel">
                            <li class="nav-item active">
                                <a class="nav-link" href="#" style={{ fontSize: '1.2em' }}>Home <span class="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        <Link to="/discount">
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ fontSize: '1.2em' }}>New Arrival</a>
                            </li>
                        </Link>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{ fontSize: '1.2em' }}>Popular</a>
                        </li>

                        <li class="nav-item dropdown">

                            <a className="nav-link dropdown-toggle " style={{ fontSize: '1.2em' }} href="#" id="navbarDropdownMenuLink">Jwellery</a><span><ion-icon name="arrow-dropdown">
                            </ion-icon></span>
                            <ul className="dropul" style={{listStyleType:"none"}}>

                                <li><Link to="/necklace"><a class="dropdown-item" href="#" id="1">Necklace</a></Link>
                               
                                </li>
                                <li><Link to="/bracelet"><a class="dropdown-item" href="#">Bracelet</a></Link></li>
                                <li><Link to="/earrings"><a class="dropdown-item" href="#">Earrings</a></Link></li>
                                <li><Link to="/rings"><a class="dropdown-item" href="#">Rings</a></Link></li>
                                <li><Link to="/pendants"><a class="dropdown-item" href="#">Pendants</a></Link></li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/discountitem" style={{ fontSize: '1.2em' }}><a class="dropdown-item" href="#">Discount Items</a></Link>
                                </li>
                            </ul>

                            {/* <Link to="#" className="nav-link "><a className=" dropbtn nav-link dropdown-toggle " style={{fontSize: '1.2em'}} href="#" id="navbarDropdownMenuLink">Jwellery</a><span><ion-icon name="arrow-dropdown"></ion-icon></span> </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li className="dropdown-content1 small text-center" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link to="/necklace">Necklace</Link>
                            </li>
                            <li>
                                <div className="dropdown-divider"></div>
                                <Link to="/discountitem"><a class="nav-link" href="#" style={{ fontSize: '1.2em' }}>Discount Items</a></Link>
                            </li>
                            </div> */}
                            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <ul>
                                        <li><a class="dropdown-item mb-3" href="#">Necklace</a></li>
                                        <li><a class="dropdown-item mb-3" href="#">Bracelet</a></li>
                                        <a class="dropdown-item mb-3" href="#">Earrings</a>
                                        <a class="dropdown-item mb-3" href="#">Ring</a>
                                        <a class="dropdown-item mb-3" href="#">Pendant</a>

                                        <hr />
                                        <a class="dropdown-item bg-warning" href="#">Discount Items</a>
                                        </ul>

                                    </div> */}

                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" style={{ fontSize: '1.2em' }} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Info
                          </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Convertor</a>
                                <hr />
                                <a class="dropdown-item bg-warning" href="#">Loan Calculator</a>

                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{ fontSize: '1.2em' }} href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
export default Header;