import React, { Component } from 'react';

import WithClass from '../../../hoc/WithClass'
import styles from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount')
      }
    
    render () {
        return (
            <WithClass style={styles.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
    }
}

export default Person;