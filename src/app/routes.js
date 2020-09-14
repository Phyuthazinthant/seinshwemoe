import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from '../home/components/Carousel'
import DiscountPage from '../pages/DiscountPage'
import Ngold from '../features/subJwellery.js/components/Ngold'
import Nplatinum from '../features/subJwellery.js/components/Nplatinum'
import Npearl from '../features/subJwellery.js/components/Npearl'
import Njade from '../features/subJwellery.js/components/Njade'
import Ndiamond from '../features/subJwellery.js/components/Ndiamond'
import Necklace from '../features/jewellery/components/Necklace'

import Bracelet from '../features/jewellery/components/Bracelet'
import Earrings from '../features/jewellery/components/Earrings'
import Ring from '../features/jewellery/components/Ring'
import Pendant from '../features/jewellery/components/Pendant'
import Discount_Items from '../features/jewellery/components/Discount_Items'

import Necklaceroutes from './necklaceroutes'
import RouteConfit from '../configs/components/routesconfit'
import Bdiamond from '../features/subJwellery.js/components/Bdiamond'
import Bgold from '../features/subJwellery.js/components/Bgold'
import Bplatinum from '../features/subJwellery.js/components/Bplatinum'
import Bpearl from '../features/subJwellery.js/components/Bpearl'
import Bjade from '../features/subJwellery.js/components/Bjade'
import Ediamond from '../features/subJwellery.js/components/Ediamond'
import Egold from '../features/subJwellery.js/components/Egold'
import Eplatinum from '../features/subJwellery.js/components/Eplatinum'
import Epearl from '../features/subJwellery.js/components/Epearl'
import Ejade from '../features/subJwellery.js/components/Ejade'
import Rdiamond from '../features/subJwellery.js/components/Rdiamond'
import Rgold from '../features/subJwellery.js/components/Rgold'
import Rpearl from '../features/subJwellery.js/components/Rpearl'
import Rplatinum from '../features/subJwellery.js/components/Rplatinum'
import Rjade from '../features/subJwellery.js/components/Rjade'
import Pdiamond from '../features/subJwellery.js/components/Pdiamond'
import Pgold from '../features/subJwellery.js/components/Pgold'
import Pplatinum from '../features/subJwellery.js/components/Pplatinum'
import Ppearl from '../features/subJwellery.js/components/Ppearl'
import Pjade from '../features/subJwellery.js/components/Pjade'
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
