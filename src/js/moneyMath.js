import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Worker extends React.Component{

  constructor(){
    super()
    this.state={workers:[{name:"Вася", surname:"Васильев", money:25000, check:false},
                         {name:"Петя", surname:"Петров", money:30000, check:false},
                         {name:"Женя", surname:"Мухин", money:12000, check:false},
                         {name:"Маша", surname:"Гусева", money:50000, check:false},
                         {name:"Варя", surname:"Цветкова", money:8500, check:false}],
                itogo:0       }
  }

  handleCheck=(index)=>{
    this.state.workers[index].check=!this.state.workers[index].check;
    const money = this.state.workers.map((item,index)=>
      item.check ? item.money:0
    )
      var sum=0;
      for(var i = 0; i< money.length; i++){
        sum = sum + money[i]}
     this.setState({itogo:sum});
      console.log(money)
  }

  render(){
  const td =  this.state.workers.map((item,index)=>
  <tr key={index}>
    <td>
      {item.name}
    </td>
    <td>
      {item.surname}
    </td>
    <td>
      {item.money}
    </td>
    <td><input type="checkbox" checked={this.state.workers[index].check} onClick={this.handleCheck.bind(this,index)}/></td>
  </tr>)

    return(
      <table className="moneyTable">
      <tr><th>Имя</th><th>Фамилия</th><th>Зарплата</th></tr>
          {td}
      <tr><td colSpan="3">Итого: {this.state.itogo}</td></tr>
      </table>
    )
  }
}

export default Worker;
