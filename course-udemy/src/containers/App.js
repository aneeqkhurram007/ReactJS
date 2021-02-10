import { Component } from 'react';
import './App.css';
import People from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructotr');
    this.state = {
      people: [
        {
          name: "Aneeq",
          age: 20
        }, {
          name: "John",
          age: 21
        }, {
          name: "Dave",
          age: 18
        }
      ],
      toggle: false,
      cockpit: true,
      authenticated: false
    };

  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerviedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  changeState = (arg, id) => {


    const peopleIndex = id;
    const person = this.state.people[peopleIndex];

    person.name = arg.target.value;

    const persons = [...this.state.people];
    persons[peopleIndex] = person;

    this.setState({
      people: persons
    });
  }

  deletePerson = (index) => {
    const person = [...this.state.people];
    person.splice(index, 1);
    this.setState({
      people: person,
    });
  }


  toggleChange = () => {
    const doesShow = this.state.toggle;
    this.setState({
      toggle: !doesShow
    });
  }


  authenticHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    console.log('[App.js] render')
    let person = null;

    if (this.state.toggle) {
      person = <People
        people={this.state.people}
        deletePerson={this.deletePerson}
        changeState={this.changeState}
        isAuthenticated={this.state.authenticated}
      />

    }
    return (<div className="App" >
      <button onClick={() => {
        this.setState({ cockpit: false });
      }}>Remove Cockpit</button>
      {this.state.cockpit ?
        <Cockpit person={person} toggle={this.state.toggle}
          login={this.authenticHandler}
          toggleChange={this.toggleChange} people={this.state.people} />

        : null}

    </div>);

  }
}

export default App;
