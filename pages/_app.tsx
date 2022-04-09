import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/globals.css'
import { Login } from '../components/login/Login'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setLoginState] = useState(false);

  return (<section>
    <header>
      <h1>Viðburðarsíðan!</h1>
    </header>
    <Component {...pageProps} />
    <footer>
        <Login setLoginState={setLoginState} isLoggedIn={isLoggedIn}></Login>
    </footer>
  </section>)
}

export default MyApp
