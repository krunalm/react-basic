import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Interstellar"/>
    <HelloWorld greetTarget="The Avengers"/>
    <HelloWorld greetTarget="The Martian"/>
  </div>,
  document.querySelector("#container")
);  