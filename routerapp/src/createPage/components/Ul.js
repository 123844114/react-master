import React, { Component } from 'react'
import Del from './Del'
import Add from './Add'
class Ul extends Component{
    render(){
        let {data} = this.props;
        return <ul>
            {
                data.map(item=>{
                    return <li key={item.id}>
                        <span>{item.title}</span> <Add id={item.id} />   <Del />
                        {item.children && <Ul data={item.children}/>}
                    </li>
                })
            }
        </ul>
    }
}

export default Ul;
