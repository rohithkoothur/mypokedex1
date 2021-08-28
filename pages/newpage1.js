
export const getStaticProps =async ()=>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    return{
        props :{ninjas : data}
    }

    
}


const newpage1=({ninjas})=>{
    return(
        <div>
        
        {
            ninjas.results.map((t)=>{
                return (
               // eslint-disable-next-line react/jsx-key
               <div>
                    <h1>{t.name}</h1>
                {console.log(t.url)}
               </div>
                

                )
                

            })
            
        }


        </div>
    )

}

export default newpage1