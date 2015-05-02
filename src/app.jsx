var React = require("react");

var App = React.createClass({
  getInitialState(){
    return {
      id: 0,
      first:"first",
      second:"second",
      third:"third",
      fourth:"fourth"
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
    this.setState({
      first: this.refs.first.refs.inp.getDOMNode().value,
      second: this.refs.second.refs.inp.getDOMNode().value,
      third: this.refs.third.refs.inp.getDOMNode().value,
      fourth: this.refs.fourth.refs.inp.getDOMNode().value
    })
  },
  render(){
    return (
      <div>
        <Binder ref="first" update={this.update} />
        <label>{this.state.first}</label>
        <Binder ref="second" update={this.update} />
        <label>{this.state.second}</label>
        <Binder ref="third" update={this.update} />
        <label>{this.state.third}</label>
        <Binder ref="fourth" update={this.update} />
        <label>{this.state.fourth}</label>
      </div>
    )
  }
});

var Binder = React.createClass({
  render(){
    return (
      <div>
        <input ref="inp" type="text" onChange={this.props.update} />
      </div>
    )
  }
});

React.render(<App number={5}/>, document.getElementById("example"));