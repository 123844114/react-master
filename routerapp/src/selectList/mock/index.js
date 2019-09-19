import Mock from 'mockjs';
import allcar from './allcar.json';
import brand from './brand.json';

Mock.mock('/car/all',allcar)

Mock.mock('/car/brand',brand)

Mock.mock('/car/type',({body})=>{
    let {brandId} = JSON.parse(body);
    return allcar.filter(item=>item.brandId===brandId)
})
