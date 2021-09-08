/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import kohli from '../images/testimage.png'
import NavBar from '../components/NavBar'
import SearchTypes from '../components/SearchTypes'
import { center } from '../styles/mystyles'
import { useState } from 'react'

import fetch from 'node-fetch'
import { data } from 'browserslist'
export const getServerSideProps = async () => {
    const resnormal = await fetch(`https://pokeapi.co/api/v2/type/normal`)
    const datanormal = await resnormal.json()

    const reselectric = await fetch(`https://pokeapi.co/api/v2/type/electric`)
    const dataelectric = await reselectric.json()



    return {
        props: {
             normaltype : datanormal,
             electrictype : dataelectric
        }
    }
}

const EPtypes = ({normaltype,electrictype}) => {


    return (
        
        <div >

            

            <NavBar />
            
            
            <div className='row' >
                <hr />
                <h2>Normal Pokemons</h2>
                
                <hr />


                
                    <div className='posters' >

                        {
                            normaltype.pokemon.map((name, index) => {
                                return (
                                    
                                    <div key={name}>
                                         
                                        
                                        
                                         <Link href={`/pokemons/${name.pokemon.name}`}><a>   <div className='titt' >
                                        


                                            {
                                              
                                             
                                           name.pokemon.name
                                          
                                           
                                            
                                            }
                                            <img className="posters" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />

                                            </div></a></Link>
                                        

                                    </div>
                                )
                            })
                        }

     
                    </div>)
            </div>

            <div className='row' >
                <hr />
                <h2>Electric Pokemons</h2>
                
                <hr />


                
                    <div className='posters' >

                        {
                            electrictype.pokemon.map((name, index) => {
                                return (
                                    
                                    <div key={name}>
                                         
                                        
                                        
                                         <Link href={`pokemons/${name.pokemon.name}`}><a>      <div className='titt' >
                                        


                                            {
                                              
                                             
                                           name.pokemon.name
                                          
                                           
                                            
                                            }
                                            <img className="posters" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />

                                            </div> </a></Link> 
                                        

                                    </div>
                                )
                            })
                        }

     
                    </div>)
            </div>
            







            







            
        </div>
    )

}

export default EPtypes