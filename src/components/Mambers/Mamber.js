import React from 'react'
const mamber =(props)=>(
    <div className="col-md-6" key={props.mamber.id}>
    <div className="card" style={{margin:"10px"}}>
   <div className="card-body">
   <h5 className="card-title">{props.mamber.id}</h5>
   <h5 className="card-title">{props.mamber.first_name}</h5>
   <h5 className="card-title">{props.mamber.last_name}</h5>
   <button className="btn btn-primary" onClick={()=>props.onEdithandler(props.mamber)}>Edit</button>
   <button className="btn btn-danger" onClick={()=>props.onDeletehadler(props.mamber.id)}>Hapus</button>
   </div>
    </div>
  </div> ) 
export default mamber;