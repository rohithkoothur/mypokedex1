import Link from 'next/link'
export const getStaticProps =async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return{
        props :{ninjas : data}
    }

    
}


const newpage=({ninjas})=>{
    return(
        <div>
        
        {
            ninjas.map((ninja)=>{
                return (
               // eslint-disable-next-line react/jsx-key
               <div>
                   <Link href={"/pokemontypes/"+ninja.id}  key={ninja.id}>
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

export default newpage