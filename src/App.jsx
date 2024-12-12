import React, { Component } from 'react'
import './App.css'
export class App extends Component {

  constructor(){
    super()
    this.state={
      value:0,
      error:''
    }
  }
  Increment(){
    if(this.state.value<10){
       this.setState({
      value:this.state.value+1,
      error:''
    }
    )
  }
  else{
    this.setState(
      {error:'Maximum Attempts Reached'}
    )
  }
}
  Decrement(){
    if(this.state.value>0){
    this.setState(
      {value:this.state.value-1,
       error:''
      }
    )
  }
  else{
    this.setState(
      {error:"Oh Sorry Counter Value can't be Negative"}
    )
  }
}

  render() {
    return (
      <>
      <header>Interactive Counter</header>   <br/>
      <div className="counter">
        <div>      
        <h2>{this.state.value}</h2>   <br/> 
        </div>
        <div className="btn">
        <button id='inc' onClick={()=>{this.Increment()}} title='Increment'>Increment</button>        
        <button id='dec' onClick={this.Decrement.bind(this)} title='Decrement'>Decrement</button>
        </div>
        <progress max={10} value={this.state.value} ></progress> {this.state.value*10}%
        <footer>{this.state.error}</footer>
      </div>
      </>
    )
  }
}

export default App