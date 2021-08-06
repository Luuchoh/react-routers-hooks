import React from 'react'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react';
import '../styles/hero.css'

export const Heroes = () => {
    const [heroe, setHeroe] = useState([]);

    useEffect(()=>{
        obtenerSuperheroes();
    }, []);

    const obtenerSuperheroes = async () =>{
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const {results} = datos;
        setHeroe(results);
    }

    return (
        <div id="container-heroes">
            <Navbar/>
            <h1>Súper Heroes</h1>
            {
                heroe.map(her =>(
                    <div className="card" key={her.id}>
                        <img className="card-img-top" src={her.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{her.superhero}</h5>
                            <p className="card-text">{her.alter_ego}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}