import { Redirect, Route, Switch } from "react-router-dom";

import pages, { RESETPASSWORD, SINGUP, PHASE1, SELLER, PHASE2, LOGIN, PROFILE, SERVICE, PROJECT, MyJobs, AddJob, EXPLORE, FindJobs, BuyerHome } from "../Imports/pages";
import { Navbar, DropDown, Tag } from '../Imports/genericComponents'
// import pages, { RESETPASSWORD, SINGUP, SELLER, PHASE2, PHASE1, LOGIN } from "../Imports/pages";

import isAuthenticated from "../Helpers/authentication";
import Upload from '../Helpers/upload'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <>
                    {
                        props.history.location.pathname != "/seller" &&
                        <Navbar />
                    }
                    <Component {...props} />
                </>
            ) : (
                <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
            )
        }
    />
);

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            ) : (
                <Component {...props} />
            )
        }
    />
);


export default function Routes() {
    return (
        <>
            <Switch>
                {/* <PrivateRoute exact path="/:username/follow" component={FollowAndFollowing} /> */}
                <LoginRoute exact path="/auth" component={LOGIN} />

                {/*Just For testing */}
                <PrivateRoute exact path="/" component={BuyerHome} />


                <Route exact path="/reset" component={RESETPASSWORD} />
                <Route exact path="/signup" component={SINGUP} />



                {/* <PrivateRoute exact path="/portfolio" component={PORTFOLIO} /> */}



                <Route exact path="/upload" component={Upload} />
                <PrivateRoute exact path="/seller" component={SELLER} />
                <PrivateRoute exact path="/phase2" component={PHASE2} />
                <PrivateRoute exact path="/explore" component={EXPLORE} />
                <PrivateRoute exact path="/phase1" component={PHASE1} />
                <PrivateRoute exact path="/profile" component={PROFILE} />
                <PrivateRoute exact path="/addservice" component={SERVICE} />
                <PrivateRoute exact path="/addproject" component={PROJECT} />
                <PrivateRoute exact path="/findjobs" component={FindJobs} />
                <PrivateRoute exact path="/myjobs" component={MyJobs} />
                <PrivateRoute exact path="/addjob" component={AddJob} />
                <Route exact component={pages.NOTFOUND} />



            </Switch>
        </>
    );
}
