import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
class App extends Component {

  state = {
    items: [{ id: 1, title: 'Wake Up bruh!!' }, { id: 2, title: 'Make Breakfast!!' }],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    console.log("Handle Change");
  }
  handleSubmit = (e) => {
    console.log("handle Submit");
  }
  clearList = () => { console.log('Clear List Method') }
  handleDelete = (id) => {
    console.log(`Handle edit ${id}`)
  }
  handleEdit = (id) => { console.log(`Handle Edit ${id}`) }
  render() {
    // console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto col-md-6 mt-5">
            <h3 className="text-capitalize text-center" style={{ color: "teal" }}>
              add items toDo 😃
            </h3>
            <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <ToDoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
