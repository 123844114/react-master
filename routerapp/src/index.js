import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx';
class Index extends Component {
  render() {
    return (
      <div>
          <App />
      </div>
    )
  }
}

ReactDOM.render(<Index />,document.getElementById('root'));
