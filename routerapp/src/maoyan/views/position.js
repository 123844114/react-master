import React, { Component } from 'react'
import islogin from '../util/islogin'

class Position extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        选座页面
      </div>
    )
  }
}

export default islogin(Position)();
