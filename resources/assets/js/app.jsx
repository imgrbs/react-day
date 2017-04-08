import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      item : []
    }
    this.addList = this.addList.bind(this)
  }

  addList(newList){
    this.setState({
      item: this.state.item.concat(newList)
    })
  }

  render(){
    let { item } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4 text-center">
            <h1>Hello Lara-React <br/> To Do List</h1>
            <ToDoInput addList={this.addList} />
          </div>
          <div className="col-xs-4 col-xs-offset-4">
            <br/><br/><br/>
            <ToDoList items={ item } /> 
          </div>
        </div>
      </div>
    );
  }
}

class ToDoInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      txt : ''
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    let { addList } = this.props
    addList(this.state.txt)
    this.setState({
      txt : ''
    })
  }
  render(){
    let {txt}= this.state
    return(
      <div>
        <div className="col-xs-9">
          <input value={txt} className="form-control" type="text" onChange={(e)=>this.setState({
          txt: e.target.value
          })}/>
        </div>
        <div className="col-xs-3">  
          <button className="btn btn-primary" type="button" onClick={this.onClick}> ADD </button>
        </div>
      </div>  
    );
  }
}

class ToDoList extends React.Component{
  render(){
    let { items } = this.props
    return (
      <ul className="list-group">
        { items.map((todo,i) => <ToDoItem key={i} txt={todo} />) }
      </ul>
    );
  }
}

class ToDoItem extends React.Component{
  render(){
    return(
      <li className="list-group-item">{this.props.txt}</li>
    );
  }
}

export default App;   