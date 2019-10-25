import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Chance = require('chance');
var chance = new Chance();
// import FirstComponent from './firstComponent';

//PREWORK
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//     input: '',
//     items: []
//   }
//   }

// FALSE BUTTON
// E TARGET VALUE
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//       todos: [],
//       isClicked: false   
//     };
//   }

 // FALSE BUTTON
 // E TARGET VALUE 
  // onChange = e =>{
  //   this.setState({
  //     text: e.target.value
  //   })
  // }

  // ON CLICK BUTTON
  class App extends React.Component {
    buttonClicked() {
         console.log('Button was clicked!')
    }
 

  render(){
    // FALSE BUTTON CONSOLE LOG
    // console.log('this is', this.state.isClicked)
    // console.log('Button was clicked!', this.buttonClicked)
    return (
      <div>
      <header className="App-header">
        {/* logo */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* false button */}
          <h1>On Click</h1>
          {/* <input value={this.state.text} onChange={this.onChange}/> */}

          <form onSubmit={this.formSubmit}>
            <button>Submit</button>
          </form>
          {/* ON CLICK BUTTON  */}
          <p>Hello, {chance.first()}.</p>
            <p>You're from {chance.country({ full: true })}.</p>

       </header>
      </div>
    )
  }
}
//PREWORK
  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  // handleClick = event =>{
  //   this.setState({input: })
  // }
   
//   inputUpdate = event => {
//     this.setState({input: event.target.value})
//   }

//   forSubmit = event => {
//     event.preventDefault()
//     console.log("THIS IS STATE===", this.state.items)
//     this.setState({
//       items : [...this.state.items, this.state.input],
//       input: ''
//     })
//   }

// render() {
// // console.log("===THIS IS STATE===", this.state.isOn)
//   return (
//     <div className="App">
//       <header className="App-header">

//         <img src={logo} className="App-logo" alt="logo" />
        
//         <form onSubmit={this.formSubmit}>
//           <input value={this.state.input} onChange={this.inputUpdate}/>
//           <button>Submit</button>
//         </form>
       
//         <FirstComponent items={this.state.items}/>
//       </header>
      
//     </div>
//   );
// }
// }
export default App;
