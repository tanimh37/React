import React, { useState } from 'react';

export default function App3() {
    const [profile, setProfile] = useState({
        name:"",
        email:"",
        address:"",
        contact:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let output = 'Name:' + profile.name + '\n';
        output += 'Email:' +profile.email + '\n';
        output += 'Address:' +profile.address + '\n';
        output += 'Contact:' +profile.contact + '\n';

        alert(output);


        

    }
//console.log(porfile);

const handleChange = (event) => {
   setProfile(profileinfo =>{
    return {...profileinfo,[event.target.name]:event.target.value}
   }) 
}


  return (
<>
<h1>Student Information</h1>
<form onSubmit={handleSubmit}>
    Name: <br />
    <input type="text" name='name' value={profile.name} onChange={handleChange} /> <br />
    Email: <br />
    <input type="text" name='email' value={profile.email} onChange={handleChange} /> <br />
    Addrress: <br />
    <input type="text" name='address' value={profile.address} onChange={handleChange} /> <br />
    Contact: <br />
    <input type="text" name='contact' value={profile.contact} onChange={handleChange} /> 


</form>

<button onClick={handleSubmit}>Submit</button>

</>
  )
}