import { getSession,useSession } from "next-auth/client"
import Link from "next/link"
import fetch from "node-fetch"
import NavBar from '../components/NavBar'
import { center, Types } from '../styles/mystyles'
import {useState} from 'react'


function Mypokemons({data}) {
    const [addPokemons,setAddPokemons] = useState([])
    const [addPokemon,setAddPokemon] = useState('')
    const submitPokemon =async ()=>{
        const response =await fetch('/api/savedpokemons',{
            method:'POST',
            body:JSON.stringify({addPokemon}),
            headers:{
                'Content-Type' :'application/json'
            }

        })
        const data = await response.json()
    }
    const fetchAddedPokemons = async ()=>{
        const response = await fetch('/api/savedpokemons')
        const data = await response.json()
        setAddPokemons(data)
    }
    const [session] = useSession()
    return <div>
    <NavBar/>
{data ? 
    <center>
        <Types><h1> {session? `${session.user.name}'s ` :" "}Pokemon Page</h1></Types>
        
        <hr/>
    
        <input type="text" value={addPokemon} onChange={e=>setAddPokemon(e.target.value)} placeholder="Enter Pokemon Name"/> 
        <button onClick={submitPokemon}> Add Pokemon </button> <button onClick={fetchAddedPokemons}> View Pokemon</button>
        <hr/>
        <Types>Added Pokemons</Types>
        {addPokemons.map(t=>{
            return(
                <div key={t.id}>
                 <Link href={`/pokemons/${t.name}`}><a target="_blank">{t.name}</a></Link>
                 <hr/>   
                </div>
            )
        })}
    </center>
  
    
    
    
    
    :<><h1>Not logged in? </h1> <h5 style={{textDecoration:'underLine',fontStyle:'italic'}}><Link href="/api/auth/signin"><a>Click Here to login</a></Link></h5></>}
</div>
    
    
   
}

export default Mypokemons

export async function getServerSideProps(context){
    const session =await getSession(context)
    return {
        props:{
            session,
            data : session 
            
        }
    }
}