import React, { Component } from 'react'
import Foot from '../components/foot'
class Cinema extends Component {
  render() {
    console.log(this.props);
    return <div>
        <header>影院</header>
        <main></main>
        <Foot/>
    </div>
  }
}

export default Cinema;
