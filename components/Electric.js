import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
export default function Types() {

    const [pokemon, putPokemon]= useState( []);
    
    useEffect(() => {
        
      },[]);
    return (
      <div>
          


          {fetch(`https://pokeapi.co/api/v2/type/`)
                    .then((resp,Response)=>resp.json())
                    .then(data=>{

                      putPokemon(data);
                      console.log(data);
                      


                    })}
    </div>
    )
  }
  