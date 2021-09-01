
import Testingtypes from "../pages/types/testingtypes"




const Testing =({types})=>{
  
    return(
        <div>
            {
        types.results.map(type=>{
            return(
                <div >

                    <h1>{type.name}</h1>

                </div>
                
            )
        })

    }
        </div>
    )
}

export default Testing