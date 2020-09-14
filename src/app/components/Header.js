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
                <div className="collapse navbar-collapse dropdownclick " id="collapsibleNavbar">
                    <ul className=" nav navbar-nav ml-auto ">
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/home">Home</Link>
                        </li>
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/discount">New Arrival</Link>
                        </li>
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/popular">Popular </Link>
                        </li>
                        <li className="nav-item dropdown " >
                            <Link to="#" className="nav-link ">Jwellery <i className="fa fa-caret-down"></i> </Link>
                            <li className="dropdown-content small text-center" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to="/"> Necklace</Link>
                            <Link to="/">Bracelet</Link>
                            <Link to="/"> Earrings</Link>
                            <Link to="/"> Ring</Link>
                            <Link to="/"> Pendant</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/">Discount Items</Link>
                            </li>
                        </li> 

                        <li className="nav-item dropdown " >
                            <Link to="#" className="nav-link ">Info <i className="fa fa-caret-down"></i> </Link>
                            <li className="dropdown-content small text-center" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to="/service"> Convertor</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/loan">Loan Calculator</Link>
                            </li>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
export default Header;