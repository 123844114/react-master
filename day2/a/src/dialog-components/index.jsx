import React, { Component } from 'react'
import DialogComponent from './Dialog';
function Dialog(Componet){
    //Componet => DialogComponent
    return (props)=>class extends React.Component{
        render (){
            let {title} = this.props;
            return <div>
                <Componet title={title}>
                    <label>请输入用户名</label><input type="text" />
                    <label>请输入密码</label><input type="password" /> 
                </Componet>
            </div>
        }
    }
}
//
// let LoginDialog = Dialog(DialogComponent)({
//     title:'1610A'
// });

@Dialog(DialogComponent)  //react 修饰符

class Index extends Component {
  render() {
    return (
      <div>
          这是index组件
          {/* <LoginDialog /> */}
      </div>
    )
  }

}

export default Index;
