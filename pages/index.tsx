import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/component/header";
import { MaintenancePanel } from "../components/component/maintenance-panel";
import { Navbar } from "../components/component/navbar";
import { ContactSection } from "../components/sections/contact";
import { CourseSection } from "../components/sections/course";
import { FaqSection } from "../components/sections/faq";
import { IntroductionSection } from "../components/sections/introduction";
import { TarifSection } from "../components/sections/tarif";
import { ScrollContextProvider } from "../contexts/ScrollContext";
import styles from "../styles/Home.module.scss";

export default function Home() {
	const courseSectionRef = useRef<HTMLDivElement>(null);
	const tarifSectionRef = useRef<HTMLDivElement>(null);
	const faqSectionRef = useRef<HTMLDivElement>(null);
	const contactSectionRef = useRef<HTMLDivElement>(null);

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
			<MaintenancePanel text='Site web bientôt disponible !' pnp />
			{/* <ParallaxProvider>
				<ScrollContextProvider>
					<Header
						sectionRefs={{
							courseSectionRef,
							tarifSectionRef,
							faqSectionRef,
							contactSectionRef,
						}}
					/>
					<main>
						<IntroductionSection />
						<CourseSection ref={courseSectionRef} />
						<TarifSection ref={tarifSectionRef} />
						<FaqSection ref={faqSectionRef} />
						<ContactSection ref={contactSectionRef} />
					</main>
					<footer></footer>
				</ScrollContextProvider>
			</ParallaxProvider> */}
		</div>
	);
}
