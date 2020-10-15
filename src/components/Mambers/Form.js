import React from'react'

const form =(props)=>(
    <form onSubmit={props.onhandelerSubmit}>
            <div className="form-group">
            <label>First Name</label>
            <input type="text" 
            className="form-control"
            name="first_name"
            onChange={props.onhandlerChanger}
             value={props.first_name} />
            <label>Last Name</label>
            <input type="text"
             className="form-control"
              name="last_name"
              onChange={props.onhandlerChanger}
              value={props.last_name}
               />
            </div>
            <button className="btn btn-primary" disabled={props.disableSubmite}>Simpan</button>  
            </form>

        )
export default form;