import React ,{useState} from "react";
import "./style.css"


function App() {
const [values,setValues]=useState({
  firstName:"",
  lastName:"",
  email:"",
  address:"",
})

const [submitted, setSubmitted]=useState(false)

const handleFirstNameInputChange=(event)=>{
  setValues({...values,firstName:event.target.value})
}

const handleLastNameInputChange=(event)=>{
  setValues({...values,lastName:event.target.value})

}

const handleEmailInputChange=(event)=>{
  setValues({...values,email:event.target.value})
}

const handleAddressInputChange=(event)=>{
  setValues({...values, address:event.target.value})
}

const handleSubmit = (event)=>{
  event.preventDefault();
  setSubmitted(true)
}

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
     
      {submitted ? <><div>success! Thank you</div><br></br></> : null }  
     
      <label>First Name</label><br></br>
      <input onChange={handleFirstNameInputChange} value={values.firstName}  id="first-name" class="form-field" name="firstName" type="text" placeholder="First Name"></input><br></br>
      {submitted && !values.firstName ? <><span>enter first name please </span><br></br></> : null}
      
      <label>Last Name</label><br></br>
      <input  onChange={handleLastNameInputChange} value={values.lastName}  id="last-name" class="form-field" name="lastName" type="text" placeholder="Last Name"></input> <br></br>
      {submitted && !values.lastName ? <><span>enter last name please </span> <br></br></> : null}
      
       <label>Email</label><br></br>
      <input onChange={handleEmailInputChange} value={values.email}  id="email" class="form-field" name="Email" type="text" placeholder="Email"></input><br></br>
      {submitted && !values.email ? <><span>enter email please </span><br></br></> : null}
     
      <label>Address</label><br></br>
      <input onChange={handleAddressInputChange} value={values.address}  id="address" class="form-field" name="Address" type="text" placeholder="Address"></input><br></br>
      {submitted && !values.address ? <><span>enter the address please</span><br></br></> : null}

      <button  class="form-field"  type="submit">Register</button>  <br></br>
      </form>
    </div>






  );
}

export default App;




















