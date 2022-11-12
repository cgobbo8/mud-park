import Head from "next/head";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/component/header";
import { Navbar } from "../components/component/navbar";
import { IntroductionSection } from "../components/sections/introduction";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>MUD Park</title>
				<meta
					name='description'
					content="MUD Park, la course d'obstacle qui créé des souvenirs."
				/>
				<link rel='icon' href='/favicon/favicon.ico' />
			</Head>
			<ParallaxProvider>
				<Header />
				<main>
					<IntroductionSection />
				</main>
				<footer></footer>
			</ParallaxProvider>
		</div>
	);
}
