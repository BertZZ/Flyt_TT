import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: JSON.stringify(res) }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/menu');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
        <p className="App-intro">{this.state.response}</p>
    );
  }
}

export default App;
