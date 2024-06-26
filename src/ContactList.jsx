import React from 'react'
import './contactList.css'

function ContactList({data}) {
  console.log(data)
  return (
    <div className='contactList'>
      <div className="list">
        <p className="nameDisplay">{data.name}</p>
        <p className="emailDisplay">{data.email}</p>
        <button id='delete'>Delete</button> 
      </div>
    </div>
  )
}

export default ContactList
