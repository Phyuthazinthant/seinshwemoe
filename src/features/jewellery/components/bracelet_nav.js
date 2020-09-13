import React from 'react'
import { Link } from 'react-router-dom';
import Ngold from '../../../features/subJwellery.js/components/Ngold'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './jewerrystyle.css'
export default class Bracelet_nav extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="sectional-nav mt-2 clearBoth sticky-top">
                    <div className="horizontalMenu w-100">
                        <ul className="hidden-sm-down p-0 d-flex align-items-center justify-content-between sticky w-100" >
                        <Link to='/gold-bracelet' ><li>Gold</li></Link>
                        <Link to='/platinum-bracelet' ><li>Platinum</li></Link>
                        <Link to='/pearl-bracelet' ><li>Pearl</li></Link>
                        <Link to='/jade-bracelet' ><li>Gems</li></Link>
                        <Link to='/diamond-bracelet' ><li>Diamond</li></Link>
                        </ul>

                    </div>
                    <div className="dropdownMenu">
                        <select name="sectional_nav" id="sectional_nav" className="form-control hidden-md-up w-100" >
                            <option value="0">Filter By</option>
                            <option value="#">Gold</option>
                            <option value="#">Platinum</option>
                            <option value="#">Pearl</option>
                            <option value="#">Gems</option>
                            <option value="#">Diamond</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}