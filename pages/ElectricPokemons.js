/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import Image from 'next/image'
import kohli from '../images/testimage.png'
import NavBar from '../components/NavBar'
import SearchTypes from '../components/SearchTypes'
import { center } from '../styles/mystyles'
import Testingpage from './Testingpage'
import fetch from 'node-fetch'
export const getServerSideProps = async () => {



    const res3 = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data3 = await res3.json()

    const res2 = await fetch('https://pokeapi.co/api/v2/type')
    const data2 = await res2.json()
    

    




    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/mew`)
    const data = await res.json()

    return {
        props: {
            pokemons: data,
            pokemontypes: data2,
            pokes: data3
            

        }
    }
}


const EPtypes = ({ pokemons, pokemontypes,pokes}) => {
    var pokename = []
    

    return (
        
        <div >

            <NavBar />
            <SearchTypes />
            <br />

            <br />
            <div className='row'>
                <hr />
                <h2>Electric Pokemons</h2>
                <hr />


                {pokemons?.sprites && (
                    <div className='posters'>

                        {
                            pokemontypes.results.map((types, index) => {
                                return (
                                    <div key={types.name}>
                                        <div>
                                            
                                        </div>
                                    

                                        


                                        <div className='titt' >
                                        



                                            {

                                            types.name
                                            
                                            }
                                            // eslint-disable-next-line @next/next/no-img-element
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