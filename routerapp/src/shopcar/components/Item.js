import React, { Component } from 'react'
import CheckBtn from './CheckBtn'
import Computed from './Computed'
class Item extends Component {
  render() {
      let {item,groupIndex,itemIndex} = this.props
    return (
      <div>
          <h4>{item.title}</h4>
          <CheckBtn isCheck={item.itemCheck} groupIndex={groupIndex} itemIndex={itemIndex}/>
          <b>{item.price}</b>
          <Computed count={item.itemCount} groupIndex={groupIndex} itemIndex={itemIndex}/>
      </div>
    )
  }
}
export default Item;
