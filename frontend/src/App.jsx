import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const url = "http://localhost:8080/api/users"
      
          useEffect(() => {
              console.log("fetching users")
      
               fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      setUsers(data);
                  })
                  
          }, []);

  return (
    <>
      <h1>Hello DevOps Investigation</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
