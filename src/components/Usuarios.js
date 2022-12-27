import React, {useEffect, useState} from 'react';
import UserChart from './UserChart';



function Usuarios (){

    const [ users, setUsers] = useState([])

    useEffect(() =>{
		
        fetch("/api/users")
        .then(response => response.json())
        .then(data => {
            
           setUsers(data)
        
        })
        .catch(error => console.log(error))
    
    },[])
    
    return (

        <table>

{
    users.map( ( row , i) => {
    return <UserChart { ...row} key={row.id}/>
                            })
                            }

        </table>
)}

export default Usuarios;