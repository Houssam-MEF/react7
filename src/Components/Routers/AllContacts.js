import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './Contact';

export default function AllContacts() {

    const {contacts} = useSelector(state=>({
        ...state.FirstRed
    }))

    const dispatch = useDispatch();

    const [ville, setVille] = useState("");

    const [ordre, setOrdre] = useState("");

    const delC = (idx)=>{
      dispatch({
        type:"DEL",
        payload:idx
      })      
    }

    switch (ordre) {
      case "":
        contacts.sort((a,b)=>{return a.id - b.id})
        break;

      case "idAsc":
        contacts.sort((a,b)=>{return a.id - b.id})
        break;
        
      case "idDesc":
        contacts.sort((a,b)=>{return b.id - a.id})
        break;

      case "nomAsc":
        contacts.sort((a,b)=>{
          return a.name > b.name ? 1 : -1
        })
        break;

      case "nomDesc":
        contacts.sort((a,b)=>{
          return b.name > a.name ? 1 : -1
        })
        break;
    }



  return (
    <>

    <br />

    <div className='select'>


    <select value={ville} onChange={(e)=>{setVille(e.target.value)}}>
            <option value="" disabled>--Chooisissez une ville--</option>
            <option value="" >Tout</option>
            <option value="Tanger" >Tanger</option>
            <option value="Tetouan" >Tetouan</option>
            <option value="Casa" >Casa</option>
        </select>
        <pre>    </pre>
    <select value={ordre} onChange={(e)=>{setOrdre(e.target.value)}}>
            <option value="" disabled>--Triez par--</option>
            <option value="" >Par défault</option>
            <option value="idAsc" >plus récent</option>
            <option value="idDesc" >plus ancien</option>
            <option value="nomAsc" >Nom croissant</option>
            <option value="nomDesc" >Nom décroissant</option>
        </select>
    </div>
        <br />
        <br />

        <ul id='ul'>
          {
            contacts.map((el)=>{
              if (el.ville == ville){
                return <Contact element={el} suppr={()=>delC(el.id)} />
              } 
              if (ville == "")
              {
                return <Contact element={el} suppr={()=>delC(el.id)} />
              }
            })
          }
            
            </ul>       
        
    </>
  )
}



