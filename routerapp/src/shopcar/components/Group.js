import React, { Component } from 'react'
import CheckBtn from './CheckBtn'
import Item from './Item'
class Group extends Component {
  render() {
      let {list,groupIndex} = this.props;
    return (
      <div>
        <h2><CheckBtn isCheck={list.groupCheck} groupIndex={groupIndex}/>{list.title}</h2>
        {
            list.list.map((item,key)=><Item key={key} item={item} groupIndex={groupIndex} itemIndex={key}/>)
        }
      </div>
    )
  }
}

export default Group;
