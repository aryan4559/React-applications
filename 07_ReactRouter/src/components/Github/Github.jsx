import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/aryan4559")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>

    Github UserName: {data.login}<br></br>
    Github UserID: {data.id}
    <br></br>
    
    </div>
  )
}

export default Github