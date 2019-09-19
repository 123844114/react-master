import React, { Component } from 'react'
import propTypes from 'prop-types';
import Container from './utils/container';
class Index extends Component {
    static defaultProps = {
        title:'标题'
    }
    static propTypes = {
        title:propTypes.string,
        p:propTypes.element,
        n:propTypes.number,
        addGood:propTypes.func,
        one:propTypes.symbol
        // obj:propTypes.instanceOf(React.Component)
    }
  render() {
      let {title,p,n,addGood,one,obj} = this.props;
    return (
      <div>
          <p>{title}</p>
          {p}
          <b>{n}</b>
          <button onClick={()=>{
              addGood();
          }}>点赞+1</button>
          <p>{one}</p>
          {obj}
      </div>
    )
  }
}

export default Index;
