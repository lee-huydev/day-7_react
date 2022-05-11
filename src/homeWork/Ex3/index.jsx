import React, { useEffect, useState } from 'react'
import * as SC from '../style/style'
const Users = () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])
    useEffect(()=> {
        getApi().then(data => setUsers(data))
    })
    const getApi = async () => {
        try {
            const res = await fetch(api)
            if(res.ok) {
                return await res.json()
            }
            throw new Error('Wrong somethings with status: ' + res.status)
        } 
        catch(e) {
            console.log(e.message)
        }
    }
  return (
   <SC.TodoContainer>
       <h2>Users List</h2>
       {
           users.map(e => (
               <SC.Item>
                   <h3>{e.id}/ Name: {e.name}</h3>
                   <span>Username: {e.username}</span>
                   <br />
                   <span>Email: {e.email}</span>
               </SC.Item>
           ))
       }
   </SC.TodoContainer>
  )
}

export default Users