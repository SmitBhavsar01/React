import React, { useState } from 'react'
import { useEffect } from 'react'


function Github() {
    
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/smitbhavsar01')
        .then(response => response.json() )
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-800 text-blue-50 p-4 text-3xl '>Github Followers :  {data.followers}
    
    <img src={data.avatar_url} alt="Smit Bhavsar" width={500} height={300} className='mt-4'/>
    
    </div>
  )
}

export default Github