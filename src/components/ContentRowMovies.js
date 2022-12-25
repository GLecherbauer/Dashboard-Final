import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Productos en Data Base',
    color: 'primary', 
    cuantity: 30,
    icon: 'fa-clipboard-list' 
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Visitas Totales', 
    color:'success', 
    cuantity: '100',
    icon:'fa-duotone fa-square-poll-vertical'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Usuarios Totales' ,
    color:'warning',
    cuantity:'4',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;