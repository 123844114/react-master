import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {change} from '../store/car/car.action'
class Select extends Component {
    state = {
        selectid:'-1'
    }
    render() {
        let {options,type,brandId} = this.props;
        let {selectid} = this.state;
        return <select value={selectid} onChange={this.changeaSelect} disabled={(type==='brand')?false:(brandId!="-1"?false:true)}>
            <option value="-1">{type==='brand'?"请选择品牌":"请选择车型"}</option>
            {
                options && options.map((item,key)=>{
                    return <option key={key} value={item[type+'Id']}>{item[type]}</option>
                })
            }
        </select>
    }
    changeaSelect= (e)=>{
        let {changeBrandID,type,changeTypeID} = this.props;
        this.setState({selectid:e.target.value},()=>{
            type === 'brand' && changeBrandID(this.state.selectid);
            type === 'type' && changeTypeID(this.state.selectid);
        })
    }
}


export default connect(
    (state)=>{
        return {brandId:state.cardata.brandId};
    },
    (dispatch)=>bindActionCreators(change,dispatch)
)(Select);