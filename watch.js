class Watch{
    constructor(){
        this.events = {};
    }
    on(eventname, ck) {
        if (this.events[eventname] instanceof Array) {
            this.events[eventname].push(ck);
        } else {
            this.events[eventname] = [ck];
        }
    }
    emit(eventname, ...arg) {
        this.events[eventname].forEach(item => {
            item(...arg);
        })
    }
}
