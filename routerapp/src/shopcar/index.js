import React,{Component} from 'react';
import CheckBtn from './components/CheckBtn'
import './mock/index'
import {connect} from 'react-redux'
import shopAction from './store/shopcar/shopcar.action'
import {bindActionCreators} from 'redux'
import Group from './components/Group'
import './css/style.css'
class Index extends Component{
    render(){
        let {allPrice,group,allCheck} = this.props.shopcar;
        return <div className="shopbox">
            {
                group && group.map((item,key)=><Group key={key} list={item} groupIndex={key} />)
            }
            <footer>
                <CheckBtn isCheck={allCheck}/>全选
                <span>总价：{allPrice}</span>
            </footer>
        </div>
    }
    componentDidMount(){
        this.props.getdata();
    }
}
const mapStateToProps = (state)=>{ 
    return state;
}
const mapDispatchToProps = (dispatch)=>bindActionCreators(shopAction,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Index);