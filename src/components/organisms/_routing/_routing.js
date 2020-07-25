import React from 'react';
import Home from '../../organisms/_home-main-content/_home-main-content';
import Contact from '../../organisms/_contact-main-content/_contact-main-content';

import {withRouter,Route} from 'react-router-dom';
const Routes=()=>{
    return(
        <>
    <Route exact path="/" component={withRouter(Home)} />


        <Route path="/contact" component={withRouter(Contact)} />

        </>
    );
}
export default Routes;
