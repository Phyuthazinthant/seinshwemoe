import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from '../home/components/Carousel'
import DiscountPage from '../pages/DiscountPage'
import ServicePage from '../pages/ServicePage';
import LoanPage from '../pages/LoanPage'
import ContactPage from '../pages/ContactPage';

function Routes() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Redirect to="/home" /></Route>
                    <Route path="/home" render={() => <Carousel />} />
                    <Route path="/discount" render={() => <DiscountPage />} />
                    <Route path='/contactus' component={ContactPage} />
                    <Route path="/loan" component={LoanPage} />
                    <Route path="/service" component={ServicePage} />
                    

                </Switch>
                <Footer />
            </Router>

        </div>
    )
}
export default Routes;
