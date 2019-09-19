import React,{Component} from 'react';
import Context from '../util/context';  //静态
import {BUTTON_CHANGE,Watch} from '../util/bus';
class LeftCont extends Component{
    render(){
        return <div className="leftcont">
            <Context.Consumer>
                {
                    (data)=>{
                        // console.log(data);
                        return data.map((item,i)=><div className="btnbox"
                        key={i}
                        style={{background:item.open?'yellow':'#999'}}
                        onClick={()=>{
                            Watch.emit(BUTTON_CHANGE,item);
                        }}>{item.name}</div>)
                    }
                }
            </Context.Consumer>
        </div>
    }
}

export default LeftCont;