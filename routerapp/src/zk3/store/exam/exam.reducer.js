const exam = (state = {
    index:0, //当前题下标
    examdata:[],
    examCurData:{},
    startTime:0,
    endTime:0,
    dialog:{
        open:false
    }
},action)=>{
    switch(action.type){
        //开始答题
        case 'INIT_DATA':
            state.examdata = action.examdata
            state.examCurData = state.examdata[state.index];
            state.startTime = action.starttime;
        return {...state,examdata:[...state.examdata],examCurData:{...state.examCurData}}
        //点击选项
        case 'CHANG_NEXT':
        {
            let {id,nextIndex} = action;
            let length = state.examdata.length-1;
            nextIndex = nextIndex >= length ? length : nextIndex;
            //改变当前题的状态
            state.examdata[state.index].response = id;
            state.examdata[state.index].open = true;
            //设置下一题的数据
            state.index = nextIndex;
            state.examCurData = state.examdata[nextIndex];
            return {
                ...state,
                examCurData:{...state.examCurData},examdata:[...state.examdata]
            }
        }
        //点击上一题下一题
        case 'CHANGE_ITEM':
        {
            let {newindex} = action;
            let length = state.examdata.length-1;
            if(newindex <= 0){
                newindex = 0
            }else if(newindex >= length){
                newindex = length;
            }else{
                newindex = newindex;
            }
            state.index = newindex;
            //当前题
            state.examCurData = state.examdata[newindex];
            return {
                ...state,
                examCurData:{...state.examCurData}
            }
        }
        //点击提交
        case 'SUBMIT_ITEM':
            let time =  action.endtime - state.startTime;
            let n = state.examdata.reduce((prev,item)=>{
               return prev + (item.response === item.successResponse ? 1 : 0)
            },0);
            state.dialog = {n,time,open:true}
        return {...state,dialog:{...state.dialog}}
        default :
        return state;
    }
}


export default exam;
