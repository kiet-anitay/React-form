import React, { useState } from "react";

function FormWithAction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student")


  function handleSubmit(formData) {

    const userName = formData.get("userName");
    const userEmail = formData.get("userEmail");
    const selectedRole = formData.get("selectedRole")

    alert(`Name: ${userName}: ${userEmail} ${selectedRole}`);
  };

  return (
   <>
    <form action={handleSubmit}>
        <label>
            Name:
            <input
            name="userName"
            type="text"
            value={name}        // controlled by React state
            onChange={(e) => {
                console.log(e.target.value, name)
                setName(e.target.value)
            }}
            />
        </label>
        <label>
            Email:
                <input
                name="userEmail"
                type="text"
                value={email}        
                onChange={(e) => setEmail(e.target.value)}/>
        </label>
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
        <button type="submit">Submit</button>
        </form>
        
   </>
  );
}

export default FormWithAction;
