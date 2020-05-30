import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    }, () => console.log(this.state))
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
              React ToDo App<span>❤</span>
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
