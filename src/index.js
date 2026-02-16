
// const element = <h1 className='color'>Welcome to my React app and my first React Project</h1>;
// ReactDOM.createRoot(document.getElementById('root')).render(element);
// const Newelement = <h1 className='color'>understanding in element to crate the react app...</h1>;
// ReactDOM.createRoot(document.getElementById('name')).render(Newelement);

// const element =(
//   <div className='color'>
//     <h1>welcome to my first react app..</h1>
//     <h2>Learning react app..</h2>
//   </div>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(element);


// create element using react without using jsx
// const element = React.createElement('h1', {className: 'color'}, 'Welcome to my React app and my first React Project');
// ReactDOM.createRoot(document.getElementById('root')).render(element);


// create element using jsx 

// const element = React.createElement('div',{className: 'color'},
//   React.createElement('h1', null, 'Welcome to my React app and my first React Project'),
//   React.createElement('h2', null, 'Learning react app..')
// );
// ReactDOM.createRoot(document.getElementById('root')).render(element);

import React from 'react';
import ReactDOM from 'react-dom/client';

// 2nd example of state in react
class CountCharacter extends React.Component {
  constructor(props){
    super(props);
    this.state={
      message:'',
      
    };
  }
  onChangemessage = (event) => {
    this.setState({message:event.target.value});
  }
  

  render(){
    return(
      <div>
        <h1>Count the number of characters in the input field...</h1>
        <input type='text' placeholder='Enter a message' onChange={this.onChangemessage}/>
        <h2>Total characters: {this.state.message.length}</h2>
      </div>
    )
  }
}
// 1st example of state in react
class Employee extends React.Component {
state={counter:0};
addEmployee=()=>{
  this.setState({counter:this.state.counter+1});
}
  render(){
    return(
      <div>
        <h1>Welcome to my first React App...</h1>
        <button onClick={this.addEmployee}>Click me</button>
        <h2>Total Employees: {this.state.counter}</h2>
      </div>
    )
  }
}
const element = <CountCharacter/>;
ReactDOM.createRoot(document.getElementById('root')).render(element);

