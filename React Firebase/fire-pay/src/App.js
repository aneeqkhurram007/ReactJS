import React from 'react'
import Home from './components/Home/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="" component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
