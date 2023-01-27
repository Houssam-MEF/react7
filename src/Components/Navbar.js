import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {


  return (
    <>
    <br />
    <div>
      <nav>
    <Link className='link' to="/"><h5>All Contacts</h5></Link>
    <Link className='link' to="/AddContact"><h5>Ajouter Contact</h5></Link>
      </nav>
    </div>
    </>
  )
}
