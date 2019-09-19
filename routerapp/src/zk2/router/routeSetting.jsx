import Home from '../views/Home';
import Find from '../views/Find';
import Type from '../views/Type';
import getDataToWrap from '../components/getdatatowrap'
import FindChild from '../views/FindChild';
export default [{
    path:'/',
    redirect:'/home'
},
{
    path:'/home',
    component:Home
},
{
    path:'/find',
    component:Find,
    children:[
        {
            path:'/find/index',
            component:getDataToWrap({url:'/api/find/index'})(FindChild)
        },
        {
            path:'/find/like',
            component:getDataToWrap({url:'/api/find/like'})(FindChild)
        },
        {
            path:'/find',
            redirect:'/find/index'
        }
    ]
},{
    path:'/type',
    component:Type
}]