import { useState } from 'react';

function Form() {
  const [data, setData] = useState({});

  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Symbol no is: ${data.symbol}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='font-jet-mono'>
        Enter your Symbol no: <input type="number" name='number' value={data.symbol} onChange={handleChange} />
      </label>
      <label>
        Enter your password: <input type="password" name='password' value={data.password} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;
