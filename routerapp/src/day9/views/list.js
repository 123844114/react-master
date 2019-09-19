import React, { Component } from 'react'

export default class List extends Component {
    state = {
        list:[
            {
                title:'今日头条1',
                id:1
            }
            ,{
                title:'今日头条2',
                id:2
            }
        ]
    }
  render() {
      let {list} = this.state;
      let {history:{push}} = this.props;
    return (
      <div>
          {list.map(item=><p key={item.id} onClick={()=>{
              push(`/detail/${item.id}`)
          }}>{item.title}</p>)}
      </div>
    )
  }
}
