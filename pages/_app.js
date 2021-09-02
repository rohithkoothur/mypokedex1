import NavBar from '../components/NavBar'
import '../styles/globals.css'
import '../styles/index.css'
import {Provider} from 'next-auth/client'
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    
    <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
