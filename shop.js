const car = [
    {
        groupName:'水果',
        type:[
            {
                name:'苹果',
                price:10
            },
            {
                name:'橘子',
                price:40
            },
            {
                name:'香蕉',
                price:90
            }
        ]
    },
    {
        groupName:'蔬菜',
        type:[
            {
                name:'芹菜',
                price:10
            },
            {
                name:'菠菜',
                price:15
            },
            {
                name:'土豆',
                price:8
            }
        ]
    },
    {
        groupName:'衣服',
        type:[
            {
                name:'衬衣',
                price:50
            }
        ]
    }
]

function computedPrice(car){
    let res = {
        group:car.map(item=>({
            typeName:item.groupName,
            price:computedPrice.sum(item.type)
        }))
    }
    res.allPrice = computedPrice.sum(res.group);
    return res;
}

computedPrice.sum = (arr)=>{
    return arr.reduce((prev,next)=>prev+next.price,0)
}

console.log(computedPrice(car));


