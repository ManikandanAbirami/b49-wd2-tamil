import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    }
  }
  componentDidMount() {
    console.log("Component mounted!");
  }
  componentDidUpdate(prevProps, prevState) {  
    console.log('Component updated!');
  }
  componentWillUnmount(){
    console.log("Component unmounted!");
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
    this.setState({name: "Manikandan"});
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Name: {this.state.name}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default Home