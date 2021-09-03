import {getSession,session,signIn,useSession} from 'next-auth/client'
import { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import { center, Types } from '../styles/mystyles'

const Mypokemons1 = ()=>{
    const [loading , setLoading] = useState(true)
    const [session , loadingg] = useSession()

    useEffect(()=>{
        const SecurePage =async ()=>{
            const session =await getSession()
            if(!session){
                signIn()
            }else{
                setLoading(false)
            }
        }
        SecurePage()

    },[])

    if(loading){
        return(
            <h1>Loading....</h1>
        )
    }

    




    return(
        <div>
            <NavBar/>

            <center>
                <Types><h1> {session? `${session.user.name}'s ` :" "}Pokemon Page</h1></Types>
            </center>


        </div>
    )
}

export default Mypokemons1