import React,{Component} from 'react';
class Good extends Component{
    constructor(props){
        super(props);
        this.state = {
            good:this.props.num  //1
        }
    }
    render(){
        let {good} = this.state;  //自己组件状态
        let {addGood,index,num} = this.props;
        // console.log(addGood);
        return <p><button onClick={()=>{
            // this.setState({good:good+1});
            addGood(index);
        }}>赞</button>{num}----{good}</p>
    }
    static getDerivedStateFromProps(nextProps,nextState){
        return {good:nextProps.num};
    }
    // componentDidMount(){
    //     //1
    // }
    // componentWillReceiveProps(nextProps){
    //     this.setState({good:nextProps.num});
    // }
}

export default Good;