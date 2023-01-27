import React from 'react'


export default function Contact({element, suppr}) {


    
    
        
        return (
            <>
                    <div>
                    <li key={element.id} >
                        <section>
                    <label className='nom' htmlFor="name">{element.name}</label>
                    <br />
                    <label className='number' htmlFor="number">{element.phone}</label>
                    <br />
                    <label className='number' htmlFor="number">{element.ville}</label>
                        </section>
                    <input className='del' type="button" value="Supprimer" onClick={suppr} />
                    </li>
                </div>
                            
                    
    

    </> 
)
}

