import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import styles from '../styles/globals.css'
import { Login } from '../components/login/Login'
import { useState } from 'react';
import { Layout } from '../components/layout/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  const name = 'test';
  const [loggedin, setLoggedin] = useState(false);

  const onRegister = (e: ErrorEvent) => {
    e.preventDefault();
    setLoggedin(true);
  };

  const onLogout = (e: ErrorEvent) => {
    e.preventDefault();
    setLoggedin(false);
  };

  return (<section>
    <Layout
      title="Viðburðasíðan"
      footer={
        <Login
          loggedin={loggedin}
          name={name}
          onRegister={onRegister}
          onLogout={onLogout}
        />
      }
    >
      <Component {...pageProps} />
    </Layout>
  </section>)
}

export default MyApp
