import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


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


// create element using jsx without using react

const element = React.createElement('div',{className: 'color'},
  React.createElement('h1', null, 'Welcome to my React app and my first React Project'),
  React.createElement('h2', null, 'Learning react app..')
);
ReactDOM.createRoot(document.getElementById('root')).render(element);

