import React from 'react'
import './adduser.css'

const Adduser = () => {
  return (
    <div className='adduser'>
      <form action="">
        <input type="text" placeholder='username' name='username'/>
        <submit>Search</submit>
      </form>
      <div className="detail">
        <img src='./avatar.png' alt='user1' />
        <span>User 1</span>
      </div>
      <button>add user</button>
    </div>
  )
}

export default Adduser
