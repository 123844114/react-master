import React, { Component } from 'react'
import islogin from '../util/islogin'
class My extends Component {
  render() {
    console.log(this.props);
    return <div>
        我的
    </div>
  }
}

export default islogin(My)();
