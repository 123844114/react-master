import React, { Component } from 'react'
import Detail from './components/Deatil';
import List from './components/list';
import Context from './util/context';
function Wrap(){
    return <div className="wrap">
        <Detail name="detail" index={1} />
        <List name="list" index={2} />
    </div>
}
class Index extends Component {
  render() {
      let {data} = this.props;
    return (
      <div className="index">
        <Context.Provider value={data}>
          <Wrap />
        </Context.Provider>
      </div>
    )
  }
}
export default Index;