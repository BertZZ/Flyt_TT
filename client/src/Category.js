import React, { Component } from 'react';

class Category extends Component{


getName() {
  var name = this.props.data.find(item => item.get('name') === "Pre Burger");
  return name
}

render() {
  return(
    <div>
      <p>{this.getName()}</p>
    </div>
  )

}
}

export default Category;
