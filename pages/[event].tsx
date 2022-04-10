import { NextPage, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Event, { Registration } from "../components/event/Event";
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
  registrations: Array<Registration>;
}


const EventPage: NextPage<Props> = ( {data, slugId}) => {
  console.log("is in event page");

  
  const loggedin : boolean = true; // change get from context

  console.log("data");
  console.log(typeof data);
  

  return (
    <Event
      title={data.name}
      description={data.description}
      registrations={data.registrations}
      loggedin={loggedin}
    />
  )
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const event = context.params?.event


  if (event === []) return <p className={s.event__empty}>Engin hefur skráð sig á þennan viðburð</p>



  //const isLoggedIn = context.

	//const response = await fetch('');

	const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events/${event}`;

  const res = await fetch(url)
	
  const data = await res.json()

	return {
		props: { data, slugId: event }, 
	}
}

export default EventPage