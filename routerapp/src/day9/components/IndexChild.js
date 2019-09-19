import React, { Component } from 'react'

export default class IndexChild extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
          index下的子组件
      </div>
    )
  }
}
