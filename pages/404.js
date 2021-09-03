import NavBar from "../components/NavBar"
import Link from 'next/link'
import { center } from "../styles/mystyles"

const Pagenotfound = ()=>{
    return (
        <div>

        <NavBar/>   
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <center><h1>Custom 404 Page</h1>
        <hr/>
        <h5 style={{textDecoration:'underLine',fontStyle:'italic'}}><Link href="/"><a>Go Back to Home Page</a></Link></h5>
        </center>
        



        </div>
    )
}

export default Pagenotfound