import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const {userid} = useParams()

  return (
    <div className='bg-gray-800 text-blue-50 font-bold'>User : {userid}</div>
  )
}

export default User