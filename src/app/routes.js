import React from 'react'

import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from '../home/components/Carousel'
import DiscountPage from '../pages/DiscountPage'
import Popular from '../popular/component/Popular'
function Routes() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" render={() => <Carousel />} />
                    <Route path="/discount" render={() => <DiscountPage />} />
                    <Route path="/popular" render={()=> <Popular />} />               
                </Switch>
                <Footer />
            </Router>

        </div>
    )
}
export default Routes;
