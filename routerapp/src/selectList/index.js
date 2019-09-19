import React,{Component} from 'react';
import {connect} from 'react-redux'
import Select from './components/Select'
import {bindActionCreators} from 'redux'
import {getdata} from './store/car/car.action'
import Item from './components/Item'
class Index extends Component{
    render(){
        let {selectDate,brandData,typeData} = this.props.cardata;
        return <div>
            品牌：<Select type="brand" options={brandData}></Select>
            车型：<Select type="type" options={typeData}></Select>
            <ul>
                {
                   selectDate.map((item,key)=><Item key={key} itemdata={item}></Item>)
                }
            </ul>
        </div>
    }
    componentDidMount(){
        this.props.getBrand();
        this.props.getAllcar();
    }
}

const mapStateToProps = (state)=>{
    return state;
}
const mapDispatchToProps = dispatch=>bindActionCreators(getdata,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Index);
