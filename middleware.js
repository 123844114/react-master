let obj = {
    num: 0,
    add() {
        this.num++;
    }
}

// console.log(obj.num);  //0
// obj.add();
// console.log(obj.num);  //1

// console.log(obj.num);  //1
// obj.add();
// console.log(obj.num);  //2

let add = obj.add;

let a = () => {
    console.log(obj.num);
    add.call(obj);
    console.log(obj.num);
}

a();
a();
a();


