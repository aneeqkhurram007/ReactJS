import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Menu from "./Menu";

function App() {

  const Error = () => {
    return <h1>Error 404</h1>
  }

  return (
    <div className="App">
    
      <header className="App-header">
      <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CompA />
        <Switch>

          <Route path='/' component={()=>
            <About name="About" />
          } exact />
          <Route path='/contact' render={()=>
            <Contact name="Contact" />
          } />
          <Route component={Error} />
        </Switch>

        {/* <About />
        <Contact /> */}
      </header>
    </div>
  );
}

export default App;
