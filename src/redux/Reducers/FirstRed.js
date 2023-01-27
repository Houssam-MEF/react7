const INITIAL_STATE = {
    contacts:[
        {id:1, name:"Contact 1", phone:"0601020304", ville:"Tanger"},
        {id:2, name:"Contact 2", phone:"0609080706", ville:"Tetouan"},
        {id:3, name:"Contact 3", phone:"0705040809", ville:"Casa"} 
    ]
}


export default function FirstRed (state=INITIAL_STATE, action){

    if (action.type === "ADD"){
        let newCont = {};
        let arrConts = [...state.contacts];
        newCont.id = arrConts.length + 1;
        newCont.name = action.payload[0];
        newCont.phone = action.payload[1];
        newCont.ville = action.payload[2];
        arrConts.push(newCont);
        
        return {contacts: arrConts};
        
    }

    if (action.type === "DEL"){
        if (window.confirm("Voulez-vous vraiment supprimer ce contact ?")){
            let arrConts = state.contacts.filter((t)=>{
                return t.id != action.payload;
            });
            return {contacts: arrConts};
        }
    }


    return state;

}