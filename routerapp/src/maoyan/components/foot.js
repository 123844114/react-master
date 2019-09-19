import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Foot extends Component {
  render() {
    return (
      <div>
          <NavLink to={'/movie'}>电影</NavLink>
          <NavLink to={'/cinema'}>影院</NavLink>
          <NavLink to={'/my'}>我的</NavLink>
      </div>
    )
  }
}


export default Foot