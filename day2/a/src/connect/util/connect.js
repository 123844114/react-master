import React, { Component } from 'react'
import Context from '../util/context';
const connect = (ck)=>{
    //实现数据分发
    return (Com)=>{
        // console.log(Com);
        return class extends Component{
            render(){
                // console.log(this.props);
                return <Context.Consumer>
                    {
                        (data)=>{
                            let res = ck(data);
                            // console.log(res);
                            return <Com data={{...res,...this.props}} />
                        }   
                    }
                </Context.Consumer>
            }
        }
    }
}

export default connect;