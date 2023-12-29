import React, { useState } from 'react'

const Form = () => {
  const [ value, setValue ] = useState("");
  const options = [
    {faculty: "BCA", id: 1 },
    {faculty: "BBA", id: 2 },
    {faculty: "BIM", id: 3 },
    {faculty: "BIT", id: 4 },
    {faculty: "BSc.CSIT", id: 5 },
    {faculty: "BSW", id: 6 }
  ];

  const handleSubmit = (e) => {
    setValue(e.target.value);
  }

  return (
    <>  
      <h1>Complain Form</h1>
      <form >
        <span>Faculty:</span>
        <select name='faculty'>
          {options.map(faculty => (
            <option key={faculty.id} value={faculty.value} onSubmit={handleSubmit}>{faculty.faculty}</option>  
          ))
        }
        </select>
        <p>{value}</p>
      </form>
    </>
  )
}

export default Form