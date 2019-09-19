import React, { Component } from 'react'

class Item extends Component {
  render() {
      let {itemdata} = this.props;
      return <li>
          <h3>品牌：{itemdata.brand}</h3>
          <h3>车系：{itemdata.type}</h3>
      </li>
  }
}

export default Item;