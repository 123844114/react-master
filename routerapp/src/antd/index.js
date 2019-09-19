import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Button , Rate , List , Icon ,Row,Col} from 'antd';
import Mock from 'mockjs';

let listdata = Mock.mock({
    'listdata|10':[
        {
            'id|+1':0,
            'title':'@ctitle',
            'name':'@cname',
            'type|1':['理论','机式']
        }
    ]
})
function Head(){
    return <Row>
        <Col span={3}>行号</Col>
        <Col span={8}>考试计划名称</Col>
        <Col span={7}>科目名称</Col>
        <Col span={6}>下载</Col>
    </Row>
}

function Item (props){
    let {data} = props;
    return <List.Item>
            <Col span={3}>{data.id}</Col>
            <Col span={8}>{data.title}</Col>
            <Col span={7}>{data.type}</Col>
            <Col span={6}><Icon type="arrow-down" /></Col>
    </List.Item>
}
class Index extends Component {
    render(){
        return <div>
            
            <Rate onChange={(value)=>{
                console.log(value);
            }} />

            <Span onClick={()=>{
                alert(11);
            }}></Span>
            
            <div className="page">
                <List
                    header={<Head/>}
                    dataSource={listdata.listdata}
                    renderItem={item=>{
                        // console.log(item);
                        return <Item data={item}/>
                    }}
                ></List>

            </div>
        </div>
    }
}


class Span extends Component{
    render(){
        // console.log(this.props);
        return <span onClick={this.props.onClick}>11111111</span>
    }
}
export default Index;