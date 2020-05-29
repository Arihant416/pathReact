import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
export default class ToDoList extends Component {
   render() {
      return (
         <div>
            <h2>ToDo List</h2>
            <ToDoItem />
         </div>
      )
   }
}
