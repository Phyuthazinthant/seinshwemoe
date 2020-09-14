import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
                    
                    <Route path="/necklace" render={() => <Necklace />} />
                    
                       
                   
                    <Route path="/bracelet" render={() => <Bracelet />} />
                    
                    <Route path="/earrings" render={() => <Earrings />} />
                    <Route path="/rings" render={() => <Ring />} />
                    <Route path="/pendants" render={() => <Pendant />} />
                    <Route path="/discountitem" render={() => <Discount_Items />} />
                    <Route path="/goldnecklace" render={()=><Ngold/>}/>
                    <Route path="/platinum-necklace" render={()=><Nplatinum /> }/>
                    <Route path="/pearl-necklace" render={()=><Npearl/> }/>
                    <Route path="/jade-necklace" render={()=><Njade/> }/>
                    <Route path="/diamond-necklace" render={()=><Ndiamond/> }/>

                    <Route path="/diamond-bracelet" render={()=><Bdiamond/> }/>
                    <Route path="/gold-bracelet" render={()=><Bgold/> }/>
                    <Route path="/platinum-bracelet" render={()=><Bplatinum/> }/>
                    <Route path="/pearl-bracelet" render={()=><Bpearl/> }/>
                    <Route path="/jade-bracelet" render={()=><Bjade/> }/>

                    <Route path="/diamond-earring" render={()=><Ediamond/> }/>
                    <Route path="/gold-earring" render={()=><Egold/> }/>
                    <Route path="/platinum-earring" render={()=><Eplatinum/> }/>
                    <Route path="/pearl-earring" render={()=><Epearl/> }/>
                    <Route path="/jade-earring" render={()=><Ejade/> }/>

                    <Route path="/diamond-rings" render={()=><Rdiamond/> }/>
                    <Route path="/gold-rings" render={()=><Rgold/> }/>
                    <Route path="/platinum-rings" render={()=><Rplatinum/> }/>
                    <Route path="/pearl-rings" render={()=><Rpearl/> }/>
                    <Route path="/jade-rings" render={()=><Rjade/> }/>

                    <Route path="/diamond-pendant" render={()=><Pdiamond/> }/>
                    <Route path="/gold-pendant" render={()=><Pgold/> }/>
                    <Route path="/platinum-pendant" render={()=><Pplatinum/> }/>
                    <Route path="/pearl-pendant" render={()=><Ppearl/> }/>
                    <Route path="/jade-pendant" render={()=><Pjade/> }/>
                    <Route path="/popular" render={()=> <Popular />} />               
                </Switch>

                <Footer />
            </Router>







        </div>
    )
}
export default Routes;
