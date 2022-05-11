import React from 'react'
import { useEffect, useState } from 'react'
import * as SC  from '../style/style'
const Todos = () => {
const [todos, setTodos] = useState([])
useEffect(()=> {
    getApi().then(data=> setTodos(data.filter(e => e.id < 21)))
}, [])
const api = 'https://jsonplaceholder.typicode.com/todos'
const getApi = async () => {
    try {
        const response = await fetch(api)
        if(response.ok) {
            return await response.json()
        }
        throw new Error('Somthings wrong with status: ' + response.status)
    }
    catch(e) {
        console.warn(e.message)
    }
}

  return (
    <SC.TodoContainer>
         <h1>Todo List</h1>
        {
            todos.map(e => (
                <SC.Item key={e.id}>
                    <h3>{e.id}/ {e.title}</h3>
                    <span>Status: {e.completed ? 'Finish' : 'Not finish'}</span>
                </SC.Item>
            ))
        }
        <hr />
    </SC.TodoContainer>
  )
}

export default Todos