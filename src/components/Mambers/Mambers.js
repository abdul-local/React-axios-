import React from'react'
import Mamber from'./Mamber'
var mambers=(props)=>(
    props.mambers.map((mamber,index)=>(
       <Mamber 
       mamber={mamber}
       onhandelerSubmit={(mamber)=>props.onEdithandler(mamber)}
       onDeletehadler={(id)=>props.onDeletehadler(id)}
       onEdithandler={(mamber)=>props.onEdithandler(mamber)}
       
     />
))
)
export default mambers;


   