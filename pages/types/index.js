import Link from 'next/link'
export const getServerSideProps =async ()=>{
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const data = await res.json()
    return{
        props :{pokemons : data}
    }

    
}


const types=({pokemons})=>{
    return(
        <div>
        
        {
            pokemons.results.map((pokemon)=>{
                return (
               // eslint-disable-next-line react/jsx-key
               <div>
                   <Link href={"/types/"+pokemon.name}  key={pokemon.name}>
                       <a>
                   <h3>{pokemon.name} </h3><hr/></a>

                   </Link>
                   
               
               </div>
                

                )
                

            })
            
        }


        </div>
    )

}

export default types