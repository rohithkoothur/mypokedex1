/* eslint-disable @next/next/link-passhref */
import { center, gridContainer, gridItem, imagestyle, Types } from '../styles/mystyles'
import Link from 'next/link'
const SearchTypes = ()=>{
    return(
        <div>
            <center>
<div className="alert alert-success" role="alert">
  Search by Types
</div>



<Link href={"/types/normal"}><button type="button"  className="btn btn-primary">Normal</button></Link>
<Link href={"/types/fire"}><button type="button" className="btn btn-secondary">Fire</button></Link>
<Link href={"/types/water"}><button type="button" className="btn btn-success">Water</button></Link>
<Link href={"/types/grass"}><button type="button" className="btn btn-danger">Grass</button></Link>
<Link href={"/types/electric"}><button type="button" className="btn btn-warning">Electric</button></Link>
<Link href={"/types/ice"}><button type="button" className="btn btn-info">Ice</button></Link>

<Link href={"/types/fighting"}><button type="button"  className="btn btn-primary">Fighting</button></Link>
<Link href={"/types/flying"}><button type="button" className="btn btn-secondary">Flying</button></Link>
<Link href={"/types/ground"}><button type="button" className="btn btn-success">Ground</button></Link>
<Link href={"/types/rock"}><button type="button" className="btn btn-danger">Rock</button></Link>
<Link href={"/types/bug"}><button type="button" className="btn btn-warning">Bug</button></Link>
<Link href={"/types/ghost"}><button type="button" className="btn btn-info">Ghost</button></Link>

<Link href={"/types/steel"}><button type="button"  className="btn btn-primary">Steel</button></Link>
<Link href={"/types/psychic"}><button type="button" className="btn btn-secondary">Psychic</button></Link>
<Link href={"/types/dragon"}><button type="button" className="btn btn-success">dragon</button></Link>
<Link href={"/types/dark"}><button type="button" className="btn btn-danger">Dark</button></Link>
<Link href={"/types/fairy"}><button type="button" className="btn btn-warning">Fairy</button></Link>
<Link href={"/types/shadow"}><button type="button" className="btn btn-info">Shadow</button></Link>






</center>
        </div>
    )
}
export default SearchTypes