import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component{
  constructor(props){
    super(props)
    this.state={task:this.props.text,
                flag:false,
                checked:false}
  }

  editTask=()=>{
    this.setState({flag:!this.state.flag})
  }

  removeTask=()=>{
    this.props.remove(this.props.index)
  }

  checkTask=()=>{
  this.setState({checked:!this.state.checked})
  }

  saveTask=()=>{
    const x = this.refs.inputEdit.value?
    this.refs.inputEdit.value
    :
    this.refs.inputEdit.placeholder

    this.setState({task:x})
    this.setState({flag:!this.state.flag})
  }

  render(){
    const lineThrough=this.state.checked?{textDecoration:"line-through"}:{textDecoration:"none"}

    const normRender =
    <p className="field" ref="eachField" >
        <span style={lineThrough}>{this.state.task}</span>
      <p>
        <input type="checkbox" cheked={this.state.cheked} onChange={this.checkTask.bind(this)}/>
        {this.state.checked?"Выполнено":"Не выполнено"}
      </p>
      <button className="change" onClick={this.editTask.bind(this)}>Изменить</button>
      <button className="del" onClick={this.removeTask.bind(this)}>Удалить</button>
    </p>

    const editRender =
    <p className="field" ref="eachField">
      <input type="text" placeholder={this.state.task} ref="inputEdit"/>
        <br/>
      <button className="save" onClick={this.saveTask.bind(this)}>Сохранить</button>
    </p>

    return(
      this.state.flag?
      editRender
      :
      normRender
    )
  }
}

class Tasks extends React.Component{
  constructor(){
    super()
    this.state={tasks:["Научиться читать",
                       "Научиться писать",
                       "Научиться считать"]}
    }

  addTask=()=>{
    this.state.tasks.push(this.refs.inputAdd.value)
    this.refs.inputAdd.value?
      this.setState({tasks:this.state.tasks})
      :
      alert("Вы не ввели задачу")
      this.refs.inputAdd.value=""
  }

  removeTask=(index)=>{
    this.state.tasks.splice(index ,1)
    this.setState({tasks:this.state.tasks})
  }

  render(){
    const addPoint =
      <div className="field">
        <input type="text" placeholder="Добавить задачу" ref="inputAdd"/>
        <button className="add" onClick={this.addTask.bind(this)}>Добавить</button>
      </div>

    const taski =
      this.state.tasks.map((item,index)=>
        <Task key={index}
              text={item}
              index={index}
              remove={this.removeTask}/>)

    return(
      <div>
        {addPoint}
        {taski}
      </div>
    )
  }
}

export default Tasks
