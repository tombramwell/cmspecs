import '../styles/globals.css'
import * as React from 'react'
import Layout from '../components/Layout'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


function MyApp({ Component, pageProps }) {
  return (
  <PrimeReactProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </PrimeReactProvider>
  )
}

export default MyApp
