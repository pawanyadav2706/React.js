
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


// how to create a react class component 
class Employee extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Employee Information...</h1>
        <p><label>Employee id:<b>{this.props.id}</b></label></p>
        <p><label>Employee name:<b>{this.props.name}</b></label></p>
        <p><label>Employee department:<b>{this.props.department}</b></label></p>
        <p><label>Employee salary:<b>{this.props.salary}</b></label></p>
        <Department id={this.props.departmentId} name={this.props.department} head={this.props.departmentHead} />
      </div>
    )
  }
}
class Department extends React.Component{
    render(){
      return(
        <div>
          <h1>Department Information</h1>
          <p><label>Department id:<b>{this.props.id}</b></label></p>
          <p><label>Department name:<b>{this.props.name}</b></label></p>
          <p><label>Department head:<b>{this.props.head}</b></label></p>
        </div>
      )
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Employee id='101' name='John Doe' department='Information Technology' salary='rs.5000' departmentId='1001' departmentHead='John Smith'/>
);