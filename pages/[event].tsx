import { NextPage, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
	event: string;
}

const Home: NextPage = ({ event: initialEvent }: Props) => {
	const [event, setEvent] = useState(initialEvent);
	useEffect(() => {
		setEvent(event + '!!!');

	}, [])
	
  //const router = useRouter();
	//const event = router.query.event;
  return (
		<>
			<Head>
    		<title>Hello {event}  </title>
			</Head>
			<p>Hello {event}</p>
			<Link href="/">Home</Link>
		</>
  );
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { event: 'asdf'}}
		],
		fallback: true
	}
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const event = context.params?.event ?? '-'

	return {
		props: { event: event+ '!' }, 

		revalidate: 1,
	}
}
/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const event = context.params?.event ?? '-'

	//const response = await fetch('');

	return {
		notFound: true,
		props: {},
	}
	return {
		props: { event: event+ '!' }, 
	}
}*/

export default Home