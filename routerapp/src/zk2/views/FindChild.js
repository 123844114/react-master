import React, { Component } from 'react'

class FindChild extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
        {this.props.data.title}
      </div>
    )
  }
}

export default FindChild;