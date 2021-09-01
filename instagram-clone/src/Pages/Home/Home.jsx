import React from 'react'
import { Switch, Route } from 'react-router'
import Header from '../../components/Header/Header'
import Dashboard from '../Dashboard/Dashboard';
import Explore from '../Explore/Explore';
import Profile from '../Profile/Profile'
const Home = (props) => {
    return (
        <>
            <Header islog={props.islog} />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/explore" component={Explore} />
                <Route path='/:username' component={Profile} />
            </Switch>
        </>
    )
}

export default Home
