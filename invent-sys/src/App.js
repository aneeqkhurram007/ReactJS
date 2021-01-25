import './App.css';
import Navbar from './Menu';
import { Switch, Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import Delete from './Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Create} />
          <Route exact path="/read" component={Read} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/delete" component={Delete} />
<Route component={()=><h1>404 Error</h1> } />
        </Switch>
      </header>
    </div>
  );
}

export default App;
