import './App.css';
import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      person:{
        fullName:'Med Amine Brahmi',
        bio:"i'm a simple guy ",
        imgSrc:"/IMG_9261.jpg",
        profession:'student',
      },
      QnA: false,
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
   changeMessage(){
     this.setState({
      person:{

      },
      QnA:true,

     })
   }

   handleClick=()=>{
    this.setState(state=>({
      QnA: !state.QnA
    }));
    if (this.state.QnA==false){
      this.setState(()=>({
        count: 0
      }));
    }
    
  };
  
  render(){
    const {count} = this.state
    console.log(this.state.QnA)
    return (
      <div className="App">
        <button onClick={this.handleClick} className='button'>On/Off</button>
        <p>{this.state.QnA ? "ON" : 'OFF'}</p>
        <h1>{this.state.QnA ? 'my name is ' + `${this.state.person.fullName}`  : ''}</h1>
        <p>{this.state.QnA ? `${this.state.person.bio} and i work as a ${this.state.person.profession}`  : ''}</p>

        <img src={this.state.QnA ? `${this.state.person.imgSrc}` : 'OFF'} alt="" width='80'  ></img>
        <br />
        <h1>{this.state.QnA ? `current count :${count}` : `` } </h1>
      </div>

    );
  };
  componentDidMount(){
    this.myInterval=setInterval(() =>
      this.tick(),1000)
    console.log(this.myInterval)
  };
  tick(){
    this.setState({
      count: this.state.count +1
    })
  }
  componentWillUnmount(){
      clearInterval(this.myInterval);
  }
}



export default App;
