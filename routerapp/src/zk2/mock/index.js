import Mock from 'mockjs';

let title = ['home','type','find/index','find/like']

title.forEach(item=>{
    Mock.mock(`/api/${item}`,{
        title:item,
        'data|10':[{
            title:'@ctitle'
        }]
    })
})
