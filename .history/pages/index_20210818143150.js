import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import logo from '../images/logo.png'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'
import { renderToString } from 'react-dom/server'



export default function Home() {


  const [pokemon, putPokemon]= useState( []);
  const [selectedpokemon,setpokemon] =useState(null);
  const [query,setQuery]=useState('');
  const Button = styled.button`
    color: blue`

    const base = css`
  color: hotpink;
`
  

  
  
useEffect(()=>{

  

},[]);






  return (
    <div >
      <Head>
        <title>Create Next Apbp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" ></link>
      </Head>

      <main >
        <div >
      <div id="search-box" style={{backgroundColor:"blue",height:"55px"}}>
      <Image src={logo}
      height="60px"
       width="250px"
       alt="logo" 
        
        />
          
					<div style={{marginLeft:"px"}}>
							<form className="mb-0  d-flex justify-content-center align-items-center h-100 w-100" >
								<div>
									<input id="search_name" type="text" 
                  value={query}
                  onChange={(e)=>{
                    setQuery(e.currentTarget.value);
                    

                  }}
                  
                  placeholder="Enter Pokemon Name"/>
									<input id="submit_button" 
                  onClick={(e)=>{
                    e.preventDefault();
                    console.log("searched for "+query)
                    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                    .then((resp,Response)=>resp.json())
                    .then(data=>{

                      putPokemon(data);
                      console.log(data);


                    });


                    
                  }
                  }
                  type="submit" value="Search" className="btn btn-light p-2"/>
								</div>
							</form>
					</div>
			</div>
		</div>
    
    







        <h1>{pokemon?.name}</h1>
        

        {pokemon?.sprites && (
            
            // eslint-disable-next-line @next/next/no-img-element
            <img src={pokemon.sprites.front_default} />
          )}
  
{pokemon.types?.length > 0 && (
          <ul>

            {pokemon.types.map((t)=>{
             
              // eslint-disable-next-line react/jsx-key
              return <li>{t.type.name}</li> 
              

            }
            
            )}


          </ul>
        )}
        

     
       
        

              </main>
              <br/>
             <div>

               <div>


               </div>
               <button>Sample Styled Button</button>









             </div>
              
    </div>
  )
}
