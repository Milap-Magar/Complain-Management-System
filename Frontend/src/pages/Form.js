import { useState } from 'react';

function Form() {
  const [data, setData] = useState({});

  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is: ${data.email} and your name is: ${data.name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" name='email' value={data.email} onChange={handleChange} />
      </label>
      <label>
        Enter your name: <input type="text" name='name' value={data.name} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;