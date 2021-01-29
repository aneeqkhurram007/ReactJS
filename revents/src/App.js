import 'semantic-ui-css/semantic.min.css';
import EventDashboard from './event/EventDashboard'
import './App.css';
import NavBar from './navbar/Navbar';
import { Container } from 'semantic-ui-react';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>

      <NavBar />
      <Container className="main">

        <EventDashboard />

      </Container>

    </Fragment>
  );
}

export default App;
