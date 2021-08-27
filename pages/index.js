import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../images/logo.png'

import { center, gridContainer, gridItem, imagestyle, Types } from '../styles/mystyles'





export default function Home() {

  const [pokemon, putPokemon]= useState( []);
  const [selectedpokemon,setpokemon] =useState(null);
  const [query,setQuery]=useState('');
  const [state,setState]=useState(1)

  return (
    <div>
 <Head>
        <title>Pokemon World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        </Head>


        <div className="navbar">
        <Image className="logo" src={logo} alt="Logo" height="55px" width="350px" />

            <div className="avatar">

            <div class="input-group">
            <div class="input-group rounded">
  <input type="search" class="form-control rounded"  placeholder="Pokemon Name Here" 
  value={query}
    onChange={(e)=>{
      console.log(e.currentTarget.value)
      setQuery(e.currentTarget.value)
    }}
    
    
    
    />
    <div style={{color: "blue"}}>""</div>
  <span class="input-group-text border-0" id="search-addon">
    
   <div className="searchbtn"> <i className="fas fa-search" onClick={(e)=>{
                    e.preventDefault();
                    console.log("searched for "+query)
                    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                    .then((resp,Response)=>resp.json())
                    .then(data=>{

                      putPokemon(data);
                      console.log(data);
                      setState(0)


                    });


                    
                  }
                  }>Search</i></div>
  </span>
</div>
</div>

            </div>

            
           
        </div>


        <br/>
        <br/>
        <br/>
        
        <br/>


   {pokemon?.name &&
        
        <div class="alert alert-info" role="alert">
 <h1>Search Result : {pokemon.name.toUpperCase()}</h1>
</div>
        
   }

{pokemon.types?.length > 0 && (


<div>
<Types>Types</Types>
<center>

          <ul className="list-group">

            {pokemon.types.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return <li className="list-group-item">{t.type.name.toUpperCase()}</li> 
              

            }
            
            )}


          </ul></center>
          </div>
        )




}
{pokemon.abilities?.length > 0 && (


<div>
<Types>Abilites</Types>
<center>
          <ul className="list-group">

            {pokemon.abilities.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return <li className="list-group-item">{t.ability.name.toUpperCase()}</li> 
              

            }
            
            )}


          </ul></center>
          </div>
        )




}
{pokemon?.sprites &&  (


<div>
<Types>Images</Types>
<center>          
<table><tr>
  
  <td>
  <img src={pokemon.sprites.front_default} />
  <img src={pokemon.sprites.front_female} />
  <img src={pokemon.sprites.front_shiny} />
  <img src={pokemon.sprites.front_shiny_female} />
  <img src={pokemon.sprites.back_default} />
  <img src={pokemon.sprites.back_female} />
  <img src={pokemon.sprites.back_shiny} />
  <img src={pokemon.sprites.back_shiny_female} />
  
  
  </td>
  
  </tr></table>
  </center>

          
          
  



          </div>
        )




}









    </div>
  )
}
