/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Electric from '../components/Electric'
import SearchTypes from '../components/SearchTypes'
import logo from '../images/logo.png'
import NavBar from '../components/NavBar'

import { center, gridContainer, gridItem, imagestyle, Types } from '../styles/mystyles'










export default function Home() {return(
  <div>
    <NavBar/>
    <SearchTypes/>
   
    
  </div>
)
}

