import React from 'react'

export default class App extends React.Component
{
  constructor(){
    super()
    this.state = {
      patients : [],
      delete_data : undefined
    }
  }

  getData = ()=>
  {
    // GET URL
    fetch("https://todearhemant.pythonanywhere.com/patient/api/patients/")
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
        this.setState({patients:data})
    })
    .catch(err=>{
      alert("Something Wrong !")
    })
  }

  saveData = (event)=>
  {
    var ob = {
      name : this.namebox.value,
      age : this.agebox.value,
      gender : this.genderbox.value
    }
    fetch("https://todearhemant.pythonanywhere.com/patient/api/patients/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(ob)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)        
    })
    .catch(err=>{
      alert("Something Wrong !")
    })
    event.preventDefault()
  }

  deletePatient = ()=>{
    var id = this.state.delete_data.id
    fetch(`https://todearhemant.pythonanywhere.com/patient/api/patients/${id}/`,{
      method : "Delete"
    })
    .then(response=>{
      console.log(response.status)
      this.setState({delete_data:undefined,patients:this.state.patients.filter(ob=>ob.id!=id)})
    })
    .catch(err=>{
      alert("Something Wrong !")
      this.setState({delete_data:undefined})
    })
  }

  render()
  {
    return <div>
        <h1>Patient Records</h1>

        <form onSubmit={this.saveData}>
          <input type="text" ref={c=>this.namebox=c} placeholder='Patient Name' required/>&nbsp;
          <input type="number" ref={c=>this.agebox=c} placeholder='Patient Age' required/>&nbsp;
          <select ref={c=>this.genderbox=c} required>
            <option value=''>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br/><br/>
          <button type='submit'>Add Data</button>
          &nbsp;
          <button onClick={this.getData}>Get Data</button>
        </form>
        <hr/>

        {this.state.delete_data==undefined?"":
        <h5 style={{color:"red"}}>Are you sure to delete "{this.state.delete_data.name}" ! 
          &nbsp;&nbsp;<button onClick={this.deletePatient}>Ok</button>&nbsp;&nbsp; 
          <button onClick={()=>this.setState({delete_data:undefined})}>Close</button>
        </h5>}

        <table border='1' align='center' cellPadding='10' cellSpacing='5'>
          <tr>
            <th>Patient Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Operation</th>
          </tr>
          {this.state.patients.map((ob,index)=>{
            return <tr key={index}>
              <td>{ob.id}</td>
              <td>{ob.name}</td>
              <td>{ob.age}</td>
              <td>{ob.gender}</td>
              <th>
                <button onClick={()=>this.setState({delete_data:{id:ob.id,name:ob.name}})}>Delete</button>
              </th>
            </tr>
          })}
        </table>
    </div>
  }
}