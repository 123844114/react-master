import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
      let {match:{params}} = this.props;
      console.log(params.id);
    return (
      <div>
        detail
      </div>
    )
  }
}
