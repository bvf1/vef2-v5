import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (<section>
    <header>
      <h1>Viðburðarsíðan!</h1>
    </header>
    <Component {...pageProps} />
  </section>)
}

export default MyApp
