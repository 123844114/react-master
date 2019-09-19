import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import IndexChild from '../components/IndexChild';
 class Index extends Component {
  render() {
      let {history:{push}} = this.props;
    //   console.log(push);
    return (
      <div>
          <button onClick={()=>{
              push({pathname:'/list'})
          }}>前往列表</button>
          <Link to={'/list'}>前往列表aa</Link>

          <IndexChild />
      </div>
    )
  }
}
export default Index;