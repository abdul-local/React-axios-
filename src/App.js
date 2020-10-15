import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Mambers from'./components/Mambers/Mambers'
import Form from'./components/Mambers/Form'
import mamber from './components/Mambers/Mamber';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      first_name:'',
      last_name:'',
      disableSubmite:false,
      mamberId:null,
      mamberStatus:"create",
      mambers:[
       
      ]
    }
  }
  componentDidMount(){
    axios.get('https://reqres.in/api/users?page=1')
    .then(response=>{
      {this.setState({mambers:response.data.data})}
    })
    .catch(error=>{
      console.log(error);
    })
  }
  onhandlerChanger=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  onhandelerSubmit=(event)=>{
    console.log('ini sudah belakukan submit')
    this.setState({disableSubmite:true})
    event.preventDefault();

    var payload={
      first_name:this.state.first_name,
      last_name:this.state.last_name
    };
   
    if(this.state.mamberStatus === "create"){
      var url="https://reqres.in/api/users/";
      axios.post(url,payload)
      .then(response=>{
       console.log(response);
       var mambers=[...this.state.mambers];
        mambers.push(response.data);
        this.setState({mambers,disableSubmite:false,first_name:"",last_name:""})
      })
      .catch(error=>{
       console.log(error);
     })  
    }else{
      var url=`https://reqres.in/api/users/${this.state.mamberId}`;
      axios.put(url,payload)
      .then(response=>{
        var mambers=[...this.state.mambers];
        var indexmamber=mambers.findIndex(mamber=>mamber.id === this.state.mamberId)
        mambers[indexmamber].first_name=response.data.first_name;
        mambers[indexmamber].last_name=response.data.last_name;
        this.setState({
          mambers,
          first_name:"",
          last_name:"",
          disableSubmite:false,
          mamberStatus:"create"
        })
      })
      .catch(error=>{
        console.log(error);
      })
      }

    }
  

  onEdithandler=(mamber)=>{
    this.setState({
      first_name:mamber.first_name,
      last_name:mamber.last_name,
      mamberId:mamber.id,
      mamberStatus:"update",

    })
  }
  onDeletehadler=(id)=>{
    var url=`https://reqres.in/api/users/${id}`
    axios.delete(url)
      .then(response=>{
        var mambers=[...this.state.mambers]
        var index=mambers.findIndex(mamber=>mamber.id === id)
        mambers.splice(index,1)
        this.setState({mambers})
        console.log('sudah berhasil medelete data')

      }).catch(error=>{
        console.log(error)
      })
    
  }
  render(){
    return (
      <div className="container" >
         <h1>Abdul developer School</h1>
        <div className="row">
          <div className="col-md-6" style={{border:"1px solid black"}}>
           <h2>Member</h2>
           <div className="row">
          <Mambers 
          mambers={this.state.mambers}
          onhandelerSubmit={()=>this.onhandelerSubmit()}
          onDeletehadler={(id)=>this.onDeletehadler(id)}
          onEdithandler={(mamber)=>this.onEdithandler(mamber)}
          
          />
           
             
          </div>
          </div>
          <div className="col-md-6" style={{border:"1px solid black"}}>
             <h2>Form {this.state.mamberStatus}</h2>
            <Form 
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            onhandelerSubmit={this.onhandelerSubmit}
            onhandlerChanger={this.onhandlerChanger}
            disableSubmite={this.disableSubmite}
            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
