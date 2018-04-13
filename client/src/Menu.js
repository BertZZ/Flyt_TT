import React, { Component } from 'react';
import Category from './Category';

class Menu extends Component {
  constructor(){
  super()
  this.state = {
    response:[]
  };
}

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: JSON.stringify(res[0]["categories"])}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/menu');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getCategory(category){
    var cat = this.state.response.find(item => item.name = category)
    return cat
  }

render() {
  var pre = this.getCategory("Pre Burger");
    return(
      <div>
      <p> {pre} </p>
      </div>
    )
  }
}
export default Menu;
