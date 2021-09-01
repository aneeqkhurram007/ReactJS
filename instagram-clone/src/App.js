import React, { useState } from 'react'

import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home';
import Error404 from './Pages/Error/Error404';
function App() {
  const [state, setstate] = useState({
    isLog: false
  })

  const handleLogin = (isLog) => setstate({ ...state, isLog })


  return (
    <>
      <Switch>
        {
          !state.isLog ?
            <Route path="/" exact render={() => <Login isLogin={handleLogin} />} /> :
            <Route path='/' component={Home} />
        }
        <Route path="" component={Error404} />
      </Switch>
    </>
  );
}

export default App;
