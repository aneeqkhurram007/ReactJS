import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
function App() {
  return (
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
            <Home />
          </Route>
          <Route exact path='/checkout' component={Header} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
