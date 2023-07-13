import { useState } from 'react'
import React from 'react'

function Profile() {
  const [log, setLog] = useState(2)
  return (
    <div className="text-center">
      {log==1 ? 
      <h1>Walcome User 1</h1> 
      :log==2?<h1>Walcome User 2</h1> 
      :<h1>Walcome User 3</h1> }
    </div>
  )
}

export default Profile 
