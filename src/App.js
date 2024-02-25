
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Profile from './Components/Profile';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        personne:{
          fullName:"Boutayna LOUAHBI",
          bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imgSrc:"profil.png",
          profession:"Developer",
        },
        show:false,
        time:0
    }
    this.ClickHandler=this.ClickHandler.bind(this)
  }
  ClickHandler(){
      this.setState((prevState)=>{
        return {show: !prevState.show}
      },console.log(this.state.show))
  }
  componentDidMount() {
   this.interval=setInterval(()=>{
    this.setState((prevState)=>{
      return {time:prevState.time+1}
    })
   },1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  
  render() {
    
    return (
      <div className='App d-flex flex-column align-items-center   ' style={{margin:'40px'}}>
        <Button onClick={this.ClickHandler}>SHOW PERSONNE</Button>
         <p>Elapsed Time: {this.state.time} seconds</p> 
        {this.state.show && <Profile data={this.state.personne}/> }
      </div>
    )
  }
}

export default App


