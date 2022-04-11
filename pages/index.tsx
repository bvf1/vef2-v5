import type { GetStaticPathsContext, NextPage } from 'next'
import Head from 'next/head'
import Events from '../components/events/Events'
import s from '../styles/Home.module.scss'

export type Props = {
  items: any;
}

export type events = {
  type: 'array';
  content: Array<Event>;
}

type item = {
  item: Object;
}

const Home: NextPage<Props> = ({ items }) => {
  console.log(items);
  return (
    <div className={s.container}>
      <Head>
        <title>Atburðarsíða</title>
      </Head>
      <Events title="Viðburðir á næstunni" items={items} />

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
    props: { items }, // will be passed to the page component as props
  }
}

export default Home
