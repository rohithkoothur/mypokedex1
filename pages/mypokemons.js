import { getSession,useSession } from "next-auth/client"
import Link from "next/link"
import NavBar from '../components/NavBar'
import { center, Types } from '../styles/mystyles'


function Mypokemons({data}) {
    const [session] = useSession()
    return <div>
    <NavBar/>
{data ? 
    <center>
        <Types><h1> {session? `${session.user.name}'s ` :" "}Pokemon Page</h1></Types>
        
        <hr/>
    
        <input type="text" placeholder="Enter Pokemon Name"/> <button> Add Pokemon</button>
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