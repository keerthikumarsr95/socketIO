import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { newEmail, newrequest } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        name: 'No Name Yet'
      }
    }; 
  }

  componentDidMount(){
    newEmail((email) => this.setState({ 
      email
    }));
  }

  render() {
    newrequest('Create Message')
    return (
      <div className="App">
      <p className="App-intro">
        Name is: {this.state.email.name}
      </p>
    </div>
    );
  }
}

export default App;
