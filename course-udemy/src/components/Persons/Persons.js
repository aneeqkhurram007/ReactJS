import React, { PureComponent } from 'react';
import People from './People/People'

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log(']Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.Persons !== this.props.people) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: "Snapshot!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] this.componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.people.map((p, index) => {
            return <People name={p.name}
                age={p.age}
                click={() => this.props.deletePerson(index)}
                key={index}
                change={(event) => {
                    this.props.changeState(event, index)
                }} />
        });
    }
}


export default Persons;