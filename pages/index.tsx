import type { GetStaticPathsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Login } from '../components/login/Login'
import s from '../styles/Home.module.scss'

export type Props = {
  data: object;
  items: Array<Event>
}

export type events = {
  type: 'array';
  content: Array<Event>;
}

export type event = {
  type: 'object';
  content: object;
}

export type EventData = {
  id: 'number';
  name: 'string';
  slug: 'string';
}
const Home: NextPage = ({ data }:Props) => {

  const [isLoggedIn, setLoginState] = useState(false);

  const events = (data && data.items) || [];
  
  console.log("events",events);
  console.log("data", data);
  return (
    <div className={s.container}>
      <Head>
        <title>Atburðarsíða</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
      <section className={s.events}>
        <h2 className={s.events__title}>Viðburðir á næstunni</h2>
        <ul className={s.events__list}>
          {events.length === 0 && (
            <li>Engir Atburðir!</li>
          )}
          {events.length > 0 && events.map((event) => {
            const {
              id, name, description,
            } = event;
            return (
              <li
                className={s.events__event}
                key={event.id}>
                <Link
                  className={s.events__eventLink}
                  href={`/${id}`}
                  key={event.id}
                >
                  {name}
                </Link>
                <p className={s.events__eventDescription}>{description}</p>
              </li>
            )
          })}
        </ul>
      </section>
    
      </main>

      <footer className={s.footer}>
      <Login setLoginState={setLoginState} isLoggedIn={isLoggedIn}></Login>

      </footer>
    </div>
  )
}


export async function getStaticProps(context: GetStaticPathsContext) {
  const url = 'https://vef2-20222-v3-synilausn.herokuapp.com/events';

  const res = await fetch(url)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const items = data.items
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home
