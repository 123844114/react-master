import Movie from '../views/movie'
import My from '../views/my'
import Cinema from '../views/cinema'
import Ing from '../views/ing';
import Will from '../views/will'
import HotDetail from '../views/hotdetail'
import Position from '../views/position'
import Login from '../views/Login'

const routes = [
    {
        path:'/movie',
        component:Movie,
        children:[
            {
                path:'/movie/will',
                component:Will
            },
            {
                path:'/movie/hot',
                component:Ing,
            },
            {
                path:'/movie',
                redirect:'/movie/hot'
            }
        ]
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/cinema',
        component:Cinema
    },
    {
        path:'/',
        redirect:'/movie'
    },
    {
        path:'/position',
        component:Position
    },
    {
        path:'/detail/:id',
        component:HotDetail
    },
    {
        path:'/login',
        component:Login
    }
]

export default routes;