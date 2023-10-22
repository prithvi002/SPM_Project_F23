import React,{useEffect, useState} from 'react'

function App()
{
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return(
    <div style = {{padding: "50px"}}>
    <table>
      <thead>
        <th>ID</th>
        <th> Name</th>
        <th>Phone</th>
        <th>Email</th>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key = {i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.phone}</td>
            <td>{d.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default App