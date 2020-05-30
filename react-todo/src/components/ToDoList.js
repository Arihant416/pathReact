import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
export default class ToDoList extends Component {
   render() {
      const { items, clearList, handleDelete, handleEdit } = this.props
      return (
         <ul className="list-group list-group-flush my-5">
            <h3
               className="text-capitalize text-center"
               style={{ color: "Purple", fontFamily: "Open Sans" }}>
               {items.length > 0 ? <div>List of Items<span>😃</span></div> : <div>No items to display<span>🎭</span></div>}
            </h3>
            {items.map(item => { return (<ToDoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} />) })}
            <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>Clear list</button>
         </ul>
      )
   }
}
