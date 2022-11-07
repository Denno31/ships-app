import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache, makeVar } from '@apollo/client'
import { client } from '../apolloclient'



export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client} >
    <Component {...pageProps} />
    </ApolloProvider>
}
