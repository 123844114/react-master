import React,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './css/style.css';
class Slide extends Component{
    render(){
        let {list} = this.props;
        return <div>
            <h2>热门话题</h2>
            <div className="swiper-container banner" ref={(container)=>{this.banner = container}}>
                <div className="swiper-wrapper">
                    {
                        list.map((item,i)=><div key={i} className="swiper-slide"><h3>{item.title}</h3></div>)
                    }
                </div>
            </div>
        </div>
    }
    componentDidMount(){
        new Swiper(this.banner,{
            slidesPerView: 'auto'
        })
    }
}

export default Slide;