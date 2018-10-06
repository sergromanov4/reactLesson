import React from 'react';
import ReactDOM from 'react-dom';

class Chesse extends React.Component{
  constructor(){
    super()
    this.state={numbColumn:2,
                numbRaw:2,
                flag:true}
  }

  edit=()=>{
    this.setState({flag:!this.state.flag})
  }

  save=()=>{
    this.refs.newColumn.value?
      this.setState({numbColumn:this.refs.newColumn.value})
      :
      this.setState({numbColumn:this.refs.newColumn.placeholder})

    this.refs.newRaw.value?
      this.setState({numbRaw:this.refs.newRaw.value})
      :
      this.setState({numbRaw:this.refs.newRaw.placeholder})

    this.setState({flag:!this.state.flag})

    this.sliceArr()
  }

  render(){
    const element =
            <div className="field">
              <h2>Размер доски:</h2>
              <p>Ширина: {this.state.numbColumn}</p>
              <p>Длинна: {this.state.numbRaw}</p>
              <button className="change" onClick={this.edit.bind(this)}>Изменить</button>
            </div>

    const changeElement =
            <div className="field">
              <h2>Размер доски:</h2>
              <p>Ширина: <input type="text" ref="newColumn" placeholder={this.state.numbColumn}/></p>
              <p>Длинна: <input type="text" ref="newRaw" placeholder={this.state.numbRaw}/></p>
              <button className="save" onClick={this.save.bind(this)}>Построить</button>
            </div>

    return(
      <div>
        {this.state.flag?element:changeElement}
        <table cellSpacing="0" cellPadding="0">
          <Desk column={this.state.numbColumn} raw={this.state.numbRaw} slice={this.sliceArr}/>
        </table>
      </div>
    )
  }
}


class Desk extends React.Component{
  constructor(props){
    super(props)
    this.state={numbColumn:this.props.column,
                numbRaw:this.props.raw}
  }
  render(){
    return(
      <Columns numbColumn={this.props.column} numbRaw={this.props.raw} slice={this.props.slice}/>
    )
  }
}

class Columns extends React.Component{
  constructor(props){
    super(props)
    this.state={numbColumn:this.props.numbColumn,
                numbRaw:this.props.numbRaw,
                arrColumn:[],
                arrRaw:[]
                }
  }

  render(){
    for(let i=0;i<this.props.numbColumn;i++){
      this.state.arrColumn[i]=" "
    }
    const tdshka = this.state.arrColumn.map((item,index)=>
    index%2==0?
      <td key={index} style={{background:"white"}}>{item}</td>
        :
      <td key={index} style={{background:"black"}}>{item}</td>
  )

  const tdshka1 = this.state.arrColumn.map((item,index)=>
  index%2==0?
    <td key={index} style={{background:"black"}}>{item}</td>
      :
    <td key={index} style={{background:"white"}}>{item}</td>
)

    const td1 = tdshka.slice(0, this.props.numbColumn)
    const td2 = tdshka1.slice(0, this.props.numbColumn)

    for(let i=0;i<this.props.numbRaw;i++){
        i%2==0?
        this.state.arrRaw[i]=td1
        :
        this.state.arrRaw[i]=td2
    }

    const trshka = this.state.arrRaw.map((item,index)=>
      <tr key={index}>{item}</tr>)

    const tr1 = trshka.slice(0, this.props.numbRaw)

    return(
      tr1
    )
  }
}

export default Chesse;
