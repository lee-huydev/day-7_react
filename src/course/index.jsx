import React from 'react'

const Course = () => {
    const api = 'https://jsonplaceholder.typicode.com/todos'
  const [data, setData] = useState()
  useEffect(()=> {
    getApi()
      .then(data => setData(data))
  }, [])
  const getApi = async () => {
   try{
    const res = await fetch(api)
    if(res && res.status !== 200) {
      throw new Error('Wrong with soomthings status: ' + res.status)
      // reject
    }
    return await res.json() // resolve
   }
   catch(e){
     console.log(e.message)
   }
  }
  console.log(data)
  return (
    <div>Course</div>
  )
}

export default Course