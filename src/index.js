
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



// // 2nd example of state in react
// class CountCharacter extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       message:'',

//     };
//   }
//   onChangemessage = (event) => {
//     this.setState({message:event.target.value});
//   }


//   render(){
//     return(
//       <div>
//         <h1>Count the number of characters in the input field...</h1>
//         <input type='text' placeholder='Enter a message' onChange={this.onChangemessage}/>
//         <h2>Total characters: {this.state.message.length}</h2>
//       </div>
//     )
//   }
// }
// // 1st example of state in react
// class Employee extends React.Component {
// state={counter:0};
// addEmployee=()=>{
//   this.setState({counter:this.state.counter+1});
// }
//   render(){
//     return(
//       <div>
//         <h1>Welcome to my first React App...</h1>
//         <button onClick={this.addEmployee}>Click me</button>
//         <h2>Total Employees: {this.state.counter}</h2>
//       </div>
//     )
//   }
// }
// const element = <CountCharacter/>;
// ReactDOM.createRoot(document.getElementById('root')).render(element);


import React from 'react';
import ReactDOM from 'react-dom/client';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UpdateSalary: null
    };
  }

  getUpdateSalary = (salary) => {
    this.setState({ UpdateSalary: salary });
  }

  render() {
    return (
      <div>
        <h1>Employee Details</h1>

        <p>
          <label>ID:<b> {this.props.id}</b></label>
        </p>
        <p>
          <label>Name: <b>{this.props.name}</b></label>
        </p>
        <p>
          <label>Location: <b>{this.props.location}</b></label>
        </p>
        <p>
          <label>Total Salary: <b>{this.props.salary}</b></label>
        </p>
        <p>
          <label>Update total salary: <b>{this.state.UpdateSalary}</b></label>
        </p>

        <Salary
          basicSalary={this.props.basicSalary}
          allowance={this.props.allowance}
          totalSalary={this.props.totalSalary}
          onSalaryChange={this.getUpdateSalary}
        />
      </div>
    );
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicSalary: this.props.basicSalary,
      allowance: this.props.allowance,
      totalSalary: this.props.totalSalary
    };
  }

  UpdateSalary = () => {
    let salary =
      parseInt(this.state.basicSalary || 0) +
      parseInt(this.state.allowance || 0);

    this.setState({ totalSalary: salary });
    this.props.onSalaryChange(salary);
  }

  render() {
    return (
      <div>
        <h1>Salary Details</h1>

        <p>
          <label>
            Basic Salary:
            <input
              type="text"
              value={this.state.basicSalary}
              onChange={(e) =>
                this.setState({ basicSalary: e.target.value })
              }
            />
          </label>
        </p>

        <p>
          <label>
            Allowance:
            <input
              type="text"
              value={this.state.allowance}
              onChange={(e) =>
                this.setState({ allowance: e.target.value })
              }
            />
          </label>
        </p>

        <p>
          <label>
            Total Salary:
            <input
              type="text"
              value={this.state.totalSalary}
              readOnly
            />
          </label>
        </p>

        <button onClick={this.UpdateSalary}>Update</button>
      </div>
    );
  }
}

const element = (
  <Employee
    id={101}
    name={'pawan yadav'}
    location={'India'}
    salary={50000}
    basicSalary={40000}
    allowance={10000}
    totalSalary={50000}
  />
);

ReactDOM.createRoot(document.getElementById('root')).render(element);


