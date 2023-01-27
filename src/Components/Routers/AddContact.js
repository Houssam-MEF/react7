import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function AddContact(){

    const {contacts} = useSelector(state=>({
        ...state.FirstRed
    }))

    const dispatch = useDispatch();

    const addC = ()=>{
        dispatch({
            type:"ADD",
            payload:[nom,tel,ville]
        })
    }

    const [nom, setNom] = useState("");
    const [tel, setTel] = useState("");
    const [ville, setVille] = useState("");

    
    
    
    
    
    
    return(
        <div>
            <br />
        <label className='inplbl' htmlFor='nom'>Nom & Prènom : </label>
        <input className='inpadd' type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
        <br />
        <label className='inplbl' htmlFor="tel">N° de téléphone : </label>
        <input className='inpadd' type="tel" value={tel} onChange={(e)=>{setTel(e.target.value)}}/>
        <br />
        <label className='inplbl' htmlFor="ville">Ville : </label>
        <select className='inpadd' value={ville} onChange={(e)=>{setVille(e.target.value)}}>
            <option value="" disabled>--Chooisissez une ville--</option>
            <option value="Tanger" >Tanger</option>
            <option value="Tetouan" >Tetouan</option>
            <option value="Casa" >Casa</option>
        </select>
        <br />
        <br />
        <input className='add' type="button" value="Ajouter" onClick={addC} />
        
        </div>
    )
}
