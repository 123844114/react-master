function reduce(arr,ck,init){
    // console.log(init);
    init = init===undefined ? arr[0] : init ; //{num:1}
    let i = init===undefined ? 1 : 0;
    for(;i<arr.length;i++){  //{num:2}
        init = ck(init,arr[i]);
    }
    return init;
}

console.log(reduce([{num:1},{num:2},{num:3},{num:4}],(prev,item)=>{
    return prev + item.num;
},0));