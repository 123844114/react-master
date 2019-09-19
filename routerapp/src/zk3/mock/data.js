const data =[
    {
        title:"今天张金城考了多少分",
        response:-1,
        open:false,
        successResponse:3,
        item:[
            {title:'80',id:1},
            {title:'90',id:2},
            {title:'70',id:3},
            {title:'100',id:4}
        ]
    },
    {
        title:"王坤及格了几次？",
        response:-1,
        open:false,
        successResponse:1, //正确答案
        item:[
            {title:'1',id:1},
            {title:'2',id:2},
            {title:'3',id:3},
            {title:'4',id:4}
        ]
    },
    {
        title:"还有几天月考？",
        response:-1,
        open:false,
        successResponse:2, //正确答案
        item:[
            {title:'4',id:1},
            {title:'2.5',id:2},
            {title:'6',id:3},
            {title:'9',id:4}
        ]
    },
    {
        title:"清明放几天假？",
        response:-1,  //你选择的结果
        open:false, //这道题做过没有
        successResponse:2, //正确答案
        item:[
            {title:'4',id:1},
            {title:'2.5',id:2},
            {title:'6',id:3},
            {title:'9',id:4}
        ]
    }
]

export default data;