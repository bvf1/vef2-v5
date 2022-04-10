import { NextPage, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Event from "../components/event/Event";
import s from '../styles/Event.module.scss'

type Props = {
	data: Event;
  slugId: string;
}


type isLoggedIn = {
  type: boolean;
}

type Event = {
  name: string;
  event: number;
  description: string;
  registrations: Array<object>;
}


const EventPage: NextPage = ( {data, slugId} : Props) => {
  const loggedin : boolean = true; // change get from context

  console.log("data");
  console.log(typeof data);
  
  //console.log("data",data);
  if (data === []) return (
    <p className={s.event__empty}>Engin hefur skráð sig á þennan viðburð</p>
  )

  return (
    <Event
      title={data.name}
      description={data.description}
      registrations={data.registrations}
      loggedin={loggedin}
    />
  )
/*
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
  );*/
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const event = context.params?.event ?? '-'
  //const isLoggedIn = context.

	//const response = await fetch('');

	const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${event}`;

  const res = await fetch(url)
	
  const data = await res.json()

  if (data === '-') return {
		notFound: true,
		props: {},
	}

	return {
		props: { data, slugId: event }, 
	}
}

export default EventPage