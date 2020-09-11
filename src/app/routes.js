import React from 'react'
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from '../home/components/Carousel'

function Routes() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/carousel" />
                    </Route>
                    
                    <Route path="/carousel" render={() => <Carousel />} />
                </Switch>
                <Footer />
            </Router>

        </div>
    )
}

export default Routes
>>>>>>> 3e2e6d44c1e57ba786b7a1c5eb6a9b3a25fb51bf
