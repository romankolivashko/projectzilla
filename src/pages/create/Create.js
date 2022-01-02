import './Create.css'
import { useState } from 'react';

export default function Create() {
  //form fiell values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, details, dueDate);
  }

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
      <label>
        <span>Project name:</span>
        <input 
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          vaule={name}
        />
      </label>
      <label>
        <span>Project details:</span>
        <textarea 
          required
          type="text"
          onChange={(e) => setDetails(e.target.value)}
          vaule={name}
        ></textarea>
      </label>
      <label>
        <span>Set due date:</span>
        <input 
          required
          type="date"
          onChange={(e) => setDueDate(e.target.value)}
          vaule={dueDate}
        />
      </label>
      <label>
        <span>Project Category:</span>
        {/* category select here */}
      </label>
      <label>
        <span>Assign to:</span>
        {/* assignee select here */}
      </label>
      <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
