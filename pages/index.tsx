import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/component/header";
import { Navbar } from "../components/component/navbar";
import { IntroductionSection } from "../components/sections/introduction";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<IntroductionSection />
			</main>
			<footer></footer>
		</div>
	);
}
