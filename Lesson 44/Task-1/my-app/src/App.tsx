import React, { useState } from 'react';
import './App.css';

function App() {

  enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
  }

  class DropDown {
    position: Role;

    constructor(position:Role) {
      this.position = position;
    }

    getData() {
      return this.position;
    }
  }

  const admin = new DropDown(Role.Admin).getData();
  const editor = new DropDown(Role.Editor).getData();
  const viewer = new DropDown(Role.Viewer).getData();

  const [value, setValue] = useState(admin); 
  const [selectedRole, setSelectedRole] = useState(""); 

  const onChange = (e: any) => {
    setValue(e.target.value); 
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedRole(value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Position: </label>
        <select value={value} onChange={onChange}> 
          <option value={admin}>{admin}</option>
          <option value={editor}>{editor}</option>
          <option value={viewer}>{viewer}</option>
        </select>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>

      {/* Submit olunan cavabı burada göstəririk */}
      {selectedRole && (
        <div>
          <h3>Selected Role: {selectedRole}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
