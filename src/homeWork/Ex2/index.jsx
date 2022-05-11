import React, { useEffect, useState }from 'react'
import * as SC from '../style/style'
const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        getApi().then(data=> setPosts(data.filter(e=> e.id <= 20)))
    }, [])
    const api = 'https://jsonplaceholder.typicode.com/posts'
    const getApi = async () => {
        try {
            const res = await fetch(api)
            if(res.ok) {
                return res.json()
            }
            throw new Error('Wrong somethings with status: ' + res.status)
        }
        catch(e) {
            console.log(e.message)
        }
    }
    console.log(posts)
  return (
    <SC.TodoContainer>
        <h2>Posts List</h2>
        {
            posts.map(e=> (
                <SC.Item>
                    <h3>{e.id}/ {e.title}</h3>
                    <span>Descripton: {e.body}</span>
                </SC.Item>
            ))
        }
        <hr />
    </SC.TodoContainer>
  )
}

export default Posts