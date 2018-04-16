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

render() {
    return(
      <div>
        <Category data = { this.state.response.find(item => item.name = "Pre Burger") }/>
        <Category data = { this.state.response.find(item => item.name = "Beef") }/>
        <Category data = { this.state.response.find(item => item.name = "Chicken") }/>
        <Category data = { this.state.response.find(item => item.name = "Veggie") }/>
        <Category data = { this.state.response.find(item => item.name = "Speciality") }/>
        <Category data = { this.state.response.find(item => item.name = "Salads") }/>
        <Category data = { this.state.response.find(item => item.name = "Fries & Sides") }/>
        <Category data = { this.state.response.find(item => item.name = "Sauces") }/>
        <Category data = { this.state.response.find(item => item.name = "Milkshakes") }/>
        <Category data = { this.state.response.find(item => item.name = "Fresh & Fizzy") }/>
        <Category data = { this.state.response.find(item => item.name = "Soft Drinks") }/>
        <Category data = { this.state.response.find(item => item.name = "Gluten Free") }/>
        <Category data = { this.state.response.find(item => item.name = "Beer & Cider") }/>
        <Category data = { this.state.response.find(item => item.name = "Wine") }/>
      </div>
    )
  }
}
export default Menu;
