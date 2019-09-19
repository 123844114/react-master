const data = [{
    id:10,
    parentId:0
},
{
    id:9,
    parentId:0
},{
    id:20,
    parentId:9
},{
    id:21,
    parentId:9
},{
    parentId:21,
    id:100
}]
function format(list,key,rootId){
    //补全
    return {
        [key]:rootId,
        children:getChildren(list,rootId)
    }
}
function getChildren(list,rootId){
    let res = list.filter(item=>item.parentId===rootId);
    //10 9
    res.forEach(item=>{
        let children = getChildren(list,item.id);
        children.length && (item.children = children);
    })
    return res;
}

console.log(format(data,'parentId',0));

// {
//     parentId:0,
//     children:[
//         {
//             id:10,
//             parentId:0,
//             children:[{id:100,parentId:10}]
//         },
//         {
//             id:9,
//             parentId:0,
//             children:[
//                 {
//                     id:20,
//                     parentId:9
//                 },
//                 {
//                     id:21,
//                     parentId:9
//                 }
//             ]
//         }
//     ]
// }