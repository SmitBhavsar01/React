import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    
      const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/smitbhavsar01')
    //     .then(response => response.json() )
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-800 text-blue-50 p-4 text-3xl '>Github Public Repo :  {data.public_repos}
    
    <img src={data.avatar_url} alt="Smit Bhavsar" width={500} height={300} className='mt-4'/>
    
    </div>
  )
}

export default Github

export  const  githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/smitbhavsar01')
  return response.json()
}