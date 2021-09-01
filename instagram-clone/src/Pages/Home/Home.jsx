import React from 'react'
import { Switch, Route } from 'react-router'
import Header from '../../components/Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Explore from '../../Pages/Explore/Explore';
const Home = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/explore" component={Explore} />
            </Switch>
        </>
    )
}

export default Home
