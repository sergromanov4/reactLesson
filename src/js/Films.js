import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom'

//////////////////////////////////////////////

class Films extends React.Component{
  constructor(){
    super()
    this.state={film:[{name:"Harry Potter", yers:2001},
                      {name:"The Lord of the Ring", yers:2001},
                      {name:"Avengers", yers:2012},
                      {name:"Venom", yers:2018},
                      {name:"GodFather", yers:1972}
                    ],
                valueName:"",
                valueYers: ""
                }
  }

  changeInputName(event){
      this.setState({valueName:event.target.value})
  }
  changeInputYers(event){
      this.setState({valueYers:event.target.value})
  }

  deleteFilm(index){
      this.state.film.splice(index,1);
      this.setState({film:this.state.film})
  }

  saveFilm(){
    let FilmConstructor =function(name,yers){
        this.name=name||"Неизветно";
        this.yers=yers||"Неизветен"
    }
    let newFilmAdd = new FilmConstructor(this.state.valueName,
                                      this.state.valueYers)
    this.state.film.unshift(newFilmAdd)
    this.setState({film:this.state.film})
  }

  render(){
      const filmName=this.state.film.map((item,index)=>
                        <div className="field" key={index}>
                            <p>Название фильма: {item.name}</p>
                            <p>Год выхода: {item.yers}</p>
                            <button className="del" onClick={this.deleteFilm.bind(this,index)}>Удалить</button>
                            <button className="change">Подробнее</button>
                        </div>
                      )

      const newFilm=<div className="field">
                      <p>Введите название фильма:</p>
                      <input type="text" value={this.state.valueName} onChange={this.changeInputName.bind(this)}/>
                      <p>Введите год выхода:</p>
                      <input type="text" value={this.state.valueYers} onChange={this.changeInputYers.bind(this)}/>
                      <button className="save" onClick={this.saveFilm.bind(this)}>Добавить</button>
                    </div>
      return(
        <div>
            {newFilm}
            {filmName}
        </div>
      )
  }
}

export default Films
