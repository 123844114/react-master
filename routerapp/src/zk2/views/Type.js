import React, { Component } from 'react'
import getDataToWrap from '../components/getdatatowrap'


class Type extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
          {this.props.data.title}
      </div>
    )
  }
}

export default getDataToWrap({
  url:'/api/type'
})(Type);