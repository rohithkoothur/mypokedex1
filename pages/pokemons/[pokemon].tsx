import Image from 'next/image'

const PokemonPage = ({name,pokemon,error})=>{

 

    return error ?

    <div><h1>Pokemon Not Found</h1>
    
    
    </div>:
    
    <div>
    

    {pokemon?.sprites && (
            
            // eslint-disable-next-line @next/next/no-img-element
            <img src={pokemon.sprites.front_default} />
          )}

{pokemon?.types?.length > 0 && (
          <ul>

            {pokemon.types.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return <li>{t.type.name}</li> 
              


            }
            
            )}

          </ul>
        )}
    
        

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

