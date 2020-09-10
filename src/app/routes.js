import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Footer from './components/Footer'
import DiscountPage from '../pages/DiscountPage'
export default class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/* <Switch>
                    <Route path="discount" component={DiscountPage} />
                </Switch> */}
                <DiscountPage />
                <Footer />

            </div>
        )
    }
}