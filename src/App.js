import './App.css';
import myimage from "./image.jpg"
import React, { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Smaoui Marwa",
      bio: "React ",
      profession: "student",
    };
  }

  showPerson=()=>{
    this.setState({
     isshow: !this.state.isshow,
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({isshow: true})
    }, 5000)
  }



render(){
  return (
  <div>
    
     {this.state.isshow ?(
       <div>
     <img src={myimage} alt="profile"/>
      <h1> {this.state.fullName}</h1>
        <p>
        {this.state.bio}
        </p>
        <p>
         {this.state.profession}
        </p>
      </div> 
     ):<h1>Click on the button to show the person </h1>
     }
      <button type="button"onClick={this.showPerson}><p>Show Person</p> </button>
     </div>)
}

  }


export default App;
