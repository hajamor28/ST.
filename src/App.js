import './App.css';
import React, { Component } from 'react';
import Fullname from './Component/Profile/FullName';


class App extends Component {

  constructor() {
    super()
    this.state = {
      name: 'kawther',
      counter: "0",
      show: false
    }
  }
  Incerement() {
    this.setuser({
      counter: this.this.user.counter + 1
    })
  }
  Decrement = () => {
    if (this.state.counter > 0) {
      this.setuser({
        counter: this.state.counter - 1
      })
    }
  }
Reset =()=>{
this.setState({
  counter : 0
})

}
Incerement_with_value =(val) =>{
  this.setState({
    counter : this.state.counter + val
  })
}




    render(){

      let name = this.state.name


      return (
        <div className='App'>

          <h1> WS KHA </h1>
          <h2> {name}</h2>
          <hr />
          <h2> {this.state.counter}</h2>
          <button onClick={() => this.Incerement()}>+</button>
          <button onClick={ () => this.Decrement()}>-</button>
          <button onClick={() => this.Reset ()}>Reset</button >

          <p> Bonjour </p>
        </div>

      );

    }
  }

    export default App;
