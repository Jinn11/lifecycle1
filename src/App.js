import React, {Component}  from 'react';

class Ticker extends Component{
constructor(){
  super();
  this.state={
    count:0
  }
}


componentDidMount(){
  setInterval(()=>{
  this.setState({count:this.state.count +1 })
  },100)
}

clear = () => {
  this.setState({
    count: 0,
  })
}

  render(){
    return(
      <div>
      <h1>The Ticker is ={this.state.count} </h1>
      
      <button type="button" onClick={this.clear}>Reset Ticker</button>

      </div>
    )
  }
}

export default Ticker;