import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import NavLinks from './components/NavLinks/NavLinks';
// import { useStateValue } from './StateProvider';
import { useReducer } from 'react';
import { useEffect } from 'react'
import { auth } from './components/Firebase/Firebase';
import Cart from './Cart';
import reducer, { initialState } from './reducer';
// import Cart from './Cart'
function App() {
  // const [{ loggedinuser }, dispatch] = useStateValue()
  // const initialState = useContext(Cart)
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        return dispatch({
          type: 'SET_LOGIN',
          user
        })
      }
      else {
        return dispatch({
          type: 'SET_LOGIN',
          user: null
        })

      }
    })
    return () => unsubscribe
  }, [])

  // console.log(loggedinuser);
  return (
    <Cart.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Switch>
            {/* One way of doing this */}
            {/* <Route exact path='/' render={() => {
            return (
              <>
                <Header />
                <Home />
              </>
            )
          }} /> */}
            {/* Another way */}
            <Route path="/" exact>
              <Header />
              <NavLinks />
              <Home />
              <Footer />
            </Route>
            <Route path="/checkout" exact>
              <Header />
              <NavLinks />
              <Checkout />
              <Footer />
            </Route>          <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </Cart.Provider>
  );
}

export default App;
