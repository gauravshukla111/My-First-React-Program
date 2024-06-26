import React from 'react'
import './AddContent.css'
import ContactList from './ContactList'

function AddContact() {
  const Contacts = [
    {
      name:"gaurav",
      email:"gaurav@gmail.com",
    },
    {
      name:"amit",
      email:"amit@gmail.com",
    },
  ];
  return (
    <div className='addContact'>
      <h1 className='head'>Add Contact</h1>
      <form className='details'>
        <div className="name">
            <label for="name">Name:</label>
            <input type='text' name='name' placeholder='Enter your name'></input>
        </div>
        <div className="email">
            <label for="email">Email:</label>
            <input type='text' name='Email' placeholder='Enter your Email'></input>
        </div>
        <button id='btn' type='submit'>Submit</button>
      </form>
      <hr/>
      {Contacts.map((contact)=>{
        console.log(contact)
           return   <ContactList data={contact}/>
      })}
        
    </div>
  )
}

export default AddContact
