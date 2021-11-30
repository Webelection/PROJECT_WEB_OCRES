import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Widget extends React.Component {
  constructor (props) {
    super (props);
    this.state
  }

  render() {

  }
}

class DashBoard extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      widgets: Array(6).fill(null),
    };
  }

  render() {

  }
}

ReactDOM.render(
  <React.StrictMode>
    <DashBoard />
  </React.StrictMode>,
  document.getElementById('root')
);