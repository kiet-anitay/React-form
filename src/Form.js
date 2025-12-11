import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student")
  const [section, setSection] = useState("A");
  const [showName, setShowName] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    //to pass as query parameter
    //console.log(new URLSearchParams(formData).toString());

    const userName = formData.get("userName");
    console.log(formData.get("userEmail"), formData.get("selectedRole"), form)
    alert(`Name: ${userName}`);
  };

  return (
   <>
    <form onSubmit={handleSubmit}>
        <h2>Controlled Form</h2>
        <label>
            Name:
            <input
            name="userName"
            type="text"
            value={name}   
                 // controlled by React state
                // defaultValue="test"
            onChange={(e) => {
                console.log(e.target.value, name)
                setName(e.target.value)
            }}
            />
        </label>
        <br /><br />
        <label>
            Email:
                <input
                name="userEmail"
                type="text"
                value={email}        
                onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br /><br />
        <label>
            Role:
            <select name="selectedRole" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="student">Student</option>
                <option value="teacher">teacher</option>
                <option value="staff">Staff</option>
            </select>

        </label>
        <br /><br />
        <label>
            <label>
                <input 
                    type="radio" 
                    name="myRadio" 
                    value="A"
                    checked = {section == 'A'}
                    onChange={e => setSection(e.target.value)}
                /> Section A
            </label>
            <label>
                <input 
                    type="radio" 
                    name="myRadio" 
                    defaultChecked={true} 
                /> Section B
            </label>
        </label>
        <br /><br />
        <button type="submit">Submit</button>
        </form>
        {showName === true && <p>You have submitted. Name: {name}</p>}
   </>
  );
}

export default ControlledForm;
