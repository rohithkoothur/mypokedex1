export const getStaticPaths =async ()=>{
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const data = await res.json()
    const paths= data.results.map(ninja=>{
        return{
            params:{name:ninja.name.toString()}
        }

    })
    return{
        paths,
        fallback: false


    }

    
}
export const getStaticProps =async (context) =>{
    const name=context.params.name
    const res =await fetch('https://pokeapi.co/api/v2/type/' + name)
    const data  =await res.json()
    return{
        props:{ninja : data}
    }
}
const Details =({ninja})=>{
    return(
        <div>
        
        {
            ninja.pokemon.map((t)=>{
                return(
                    <h1>{t.pokemon.name}</h1>
                )
            })
        }

        
        </div>

    )



}

export default Details