import React, { Component } from 'react'
// import RouterStart from './day8/routerstart';
// import RouterConfig from './day9/routerConfig';
// import RouterConfig from './baidu/routerConfig';
// import Router from './maoyan/router/routerConfig';
// import ZkRuter from './zk2/router';
// import {Provider} from 'react-redux';
// import store from './redux/store'
// import Computed from './redux/computed';
// import List from './redux/List'
// import Router from './day12/router/router'
// import Index from './shopcar/index'
// import store from './shopcar/store/store'
import {Provider} from 'react-redux'
// import Index from './day15/index'
// import store from './day15/store/store'
// import Index from './antd/index'
// import Index from './selectList/index'
// import store from './selectList/store/store'
// import store from './createPage/store/store'
// import Index from './createPage/Index';
import RouterConfig from './zk3/route/route.config'
import store from './zk3/store/store'
class App extends Component {
  render() {
    return <Provider store={store}><RouterConfig /></Provider>
  }
}

export default App
