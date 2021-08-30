import Image from 'next/image'
import { center, Types } from "../../styles/mystyles"
const PokemonPage = ({name,pokemon,error})=>{

 

    return error ?

    <div><h1>Pokemon Not Found</h1>
    
    
    </div>:
    
    <div>
    
<Types>{pokemon.name.toUpperCase()}</Types>

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
<center><Types>Types</Types></center>
{pokemon?.types?.length > 0 && (
          <center><table><tr>

            {pokemon.types.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return <td>{t.type.name}</td> 
              


            }
            
            )}

          </tr></table></center>
        )}
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

};


PokemonPage.getInitialProps=({query})=>{

  
     return fetch(`https://pokeapi.co/api/v2/pokemon/${query?.pokemon}`)
                .then((resp)=>resp.json())
                .then(data=>{
                  console.log(query.pokemon)

                  return {name: query.pokemon,pokemon: data}

                }).catch((err)=>{

                  return{error : err}
                })




           
}

export default PokemonPage;

