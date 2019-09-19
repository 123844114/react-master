//async 是 generator函数的语法糖

const getnum = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Math.random()*100)
        },time)
    })
}
// getnum(1000).then(res=>{
//     console.log(res);
// })
// getnum(100).then(res=>{
//     console.log(res);
// })
function* a(){
   let a =  yield getnum(1000)
   console.log('a',a);
   let b =  yield getnum(100)
   console.log('b',b);
   let c =  yield getnum(200)
   console.log('c',c);
   return a+b+c;
}

let o = a();
o.next().value.then(res=>{
    console.log(o.next(res));
    console.log(o.next());
    console.log(o.next());
});  //a
// console.log(o.next());


//redux-saga 控制异步进程 






