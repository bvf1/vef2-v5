import { NextPage, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from '../styles/Event.module.scss'
import Registration from '../components/registration/Registration'
import Back from '../components/back/Back'

type Props = {
	data: Array<Object>;
  slugId: string;
}


type isLoggedIn = {
  type: boolean;
}

export type e = {
  id: number;
  name: string;
  event: number;
  description: string;
  registrations: Array<object>;

}

const Event: NextPage = ( data, slugId : Props) => {
  const isLoggedIn : boolean = true; // change get from context
  const e = data || [];
  
  console.log("data",e);
  if (e === []) return (
    <p className={s.event__empty}>Engin hefur skráð sig á þennan viðburð</p>
  )

  return (
		<>
			<Head>
    		<title>Hello {e.name}  </title>
			</Head>
      <section className={s.event}>
        <div className={s.event__info}>
          <h2 className={s.event__title}>{e.name}</h2>
          <p>{e.description}</p>
        </div>
        <Registration
          data={e.registrations} 
          isLoggedIn={isLoggedIn}
          eventId={e.id}
        />
      <Back goTo="/" />
      </section>
		  </> 
  );
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("here");
  const event = context.params?.event ?? '-'
  //const isLoggedIn = context.

	//const response = await fetch('');

	if (event === '-') return {
		notFound: true,
		props: {},
	}

	const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${event}`;

  const res = await fetch(url)
	
  const json = await res.json()
	console.log("url", url);


	return {
		props: { data: json, slugId: event }, 
	}
}

export default Event