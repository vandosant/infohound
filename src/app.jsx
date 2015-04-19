var React = require("react");

var App = React.createClass({
  getDefaultProps(){
    return {
      text: 'this is a default prop',
      number: 0
    }
  },
  propTypes: {
    text: React.PropTypes.string,
    number: React.PropTypes.number.isRequired
  },
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <span>{this.props.text}</span>
      </div>
    )
  }
});

React.render(<App number={5}/>, document.getElementById("example"));