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

    const res2 = await fetch('https://pokeapi.co/api/v2/type')
    const data2 = await res2.json()

   
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/mew`)
    const data = await res.json()

    const res3 = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data3 = await res3.json()



   

    const data4 = data3.results.map(pokemonname=>{
        return (
            
            pokemonname.name
            
        )
    })

    const res5 = await fetch(`https://pokeapi.co/api/v2/type/normal`)
    const data5 = await res5.json()
    
    const data6 = data5.pokemon.map(myname=>{
        return (
            myname.pokemon.name
            
        )
    })

    const normalpokemons = data4.filter(function(n) { return data6.indexOf(n) !== -1;})
             console.log(normalpokemons)


    return {
        props: {
            pokemons: data,
            pokemontypes: data2,
            data4,
            data6,
            normalpokemons
           
            

        }
    }
}


const EPtypes = ({ pokemons, pokemontypes,data4,data6,normalpokemons}) => {


    
    var pokename = []
    function handle() {
             
             



    }
    

    return (
        
        <div >

            

            <NavBar />
            <SearchTypes />
            
            
            <br />
            {
              console.log(data4),
              console.log(data6),
              console.log(normalpokemons)
              

              
              
                
            }
            
            <br />
            <div className='row' onLoad={handle()}>
                <hr />
                <h2>Normal Pokemons</h2>
                



                <hr />


                {pokemons?.sprites && (
                    <div className='posters' >

                        {
                            normalpokemons.map((name, index) => {
                                return (
                                    <div key={name}>
                                        
                                        <div className='titt' >
                                        


                                            {

                                           name
                                            
                                            }
                                            <img className="posters" src={pokemons.sprites.front_default} />

                                        </div>
                                        

                                    </div>
                                )
                            })
                        }


                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />

                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />

                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />







                        <img className='poster' alt='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' />

                    </div>)}
            </div>







            <div className='row'>

                <h2>Electric sPokemons</h2>


                {pokemons?.sprites && (
                    <div className='posters'>




                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>


                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>

                        <div className='titt'> {pokemons.name.toUpperCase()}
                            <img src={pokemons.sprites.front_default} />
                        </div>


                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />

                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />

                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />
                        <img src={pokemons.sprites.front_default} />







                        <img className='poster' alt='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' />

                    </div>)}
            </div>







            {
                pokemontypes.results.map(type => {

                })
            }
        </div>
    )

}

export default EPtypes