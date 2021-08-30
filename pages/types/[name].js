import Link from "next/link"
import { useState } from "react"
import Head from 'next/head'
import Electric from "../../components/Electric"
import { Types } from "../../styles/mystyles"



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
        <Types>{ninja.name.toUpperCase()} Pokemons</Types>
     

<ul className="list-group">

            {ninja.pokemon.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return( <div>
              
              
              <li className="list-group-item">
                  

                  {<h3><Link href={"/pokemons/"+t.pokemon.name}><a>{t.pokemon.name}</a></Link></h3>}
                      
                      </li> 


                      
                      
                      </div>
                      
                      
                      )
              

            }
            
            )}


          </ul>
          
         

        
        </div>

    )



}

export default Details