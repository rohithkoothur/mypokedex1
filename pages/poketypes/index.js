import Link from 'next/link'
export const getServerSideProps =async ()=>{
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const data = await res.json()
    return{
        props :{ninjas : data}
    }

    
}


const poketypes=({ninjas})=>{
    return(
        <div>
        
        {
            ninjas.results.map((ninja)=>{
                return (
               // eslint-disable-next-line react/jsx-key
               <div>
                   <Link href={"/types/"+ninja.name}  key={ninja.name}>
                       <a>
                   <h3>{ninja.name}</h3></a>

                   </Link>
                   
               
               </div>
                

                )
                

            })
            
        }


        </div>
    )

}

export default poketypes