import React from 'react'
import './adduser.css'

const Adduser = () => {
  return (
    <div className='adduser'>
      <form>
        <input type="text" placeholder='username' name='username'/>
        <button>Search</button>
      </form>
      <div className="users">
      <div className="detail">
        <img src='./avatar.png' alt='user1' />
        <span>User 1</span>
      </div>
      <button>add user</button>
      </div>
    </div>
  )
}

export default Adduser
