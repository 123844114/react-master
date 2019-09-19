import React, { Component } from 'react'

class DialogComponent extends React.Component{
    static defaultProps={
        title:'弹窗标题',
        cont:'弹窗内容'
    }
    render(){
        let {title,cont,children} = this.props;
        return <div className="dialog">
            <div className="dialogTitle">
                    {title}
                </div>
            <div className="dialogCont">
                {children ? children : cont}
            </div>
        </div>
    }
}

export default DialogComponent;