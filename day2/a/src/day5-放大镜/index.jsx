import React, { Component } from 'react';
import './css/style.css';
import Zoombox from './components/Zoombox';
import Tablebox from './components/Tablebox';
const data = [{
    imgurl: require('./image/min1.png'),
    bigurl: require('./image/big1.png')
},
{
    imgurl: require('./image/min2.png'),
    bigurl: require('./image/big2.png')
}]
class Index extends Component {
    state = {
        bigurl:data[0].bigurl
    }
    render() {
        let {bigurl} = this.state;
        return <div className="leftbox">
            <Zoombox imgurl={bigurl} />
            <Tablebox data={data} callback={this.changeIndex.bind(this)}/>
        </div>
    }
    changeIndex(index){
        this.setState({bigurl:data[index].bigurl});
    }

}

export default Index;