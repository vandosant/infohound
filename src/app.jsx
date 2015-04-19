var React = require("react");

var App = React.createClass({
  getInitialState(){
    return {
      isActive: "true",
      id: 0
    }
  },
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
  update(e) {
    this.setState({isActive: e.target.value})
  },
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <h3>{this.state.isActive}</h3>
        <div>{this.props.text}</div>
        <input type="text" onChange={this.update} />
      </div>
    )
  }
});

React.render(<App number={5}/>, document.getElementById("example"));