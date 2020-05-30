import React, { Component } from 'react'
export default class ToDoInput extends Component {
   render() {
      const { item, handleChange, handleSubmit, editItem } = this.props
      return (
         <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="input-group-text bg-dark text-white">
                        <div className="fa fa-book"></div>
                     </div>
                  </div>
                  <input type="text" className="form-control text-capitalize" placeholder="Add Items To be done" style={{ border: "none" }} value={item} onChange={handleChange} />
               </div>
               <button type="submit" className="btn btn-block btn-primary mt-3" style={{ paddingLeft: "10px", alignSelf: "center", }}><span><i className="fa fa-plus"></i></span> Add Item</button>
            </form>
         </div>
      )
   }
}
