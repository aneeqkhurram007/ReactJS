import React from 'react'
import { BrowserRouter, Route, /*useLocation*/ } from 'react-router-dom';
import Index from './UseLocation/index';
import About from './UseLocation/about';
import Nav from './UseLocation/nav';
const UseLocation = () => {
    // const location = useLocation();
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/index">
                <Index />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </BrowserRouter>
    )
}
export default UseLocation;