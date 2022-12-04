import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/component/header";
import { Navbar } from "../components/component/navbar";
import { PageLoader } from "../components/component/page-loader";
import { ReservationModal } from "../components/component/reservation-modal";
import { ContactSection } from "../components/sections/contact";
import { CourseSection } from "../components/sections/course";
import { FaqSection } from "../components/sections/faq";
import { Footer } from "../components/sections/footer";
import { IntroductionSection } from "../components/sections/introduction";
import { LieuSection } from "../components/sections/lieu";
import { ObstaclesSection } from "../components/sections/obstacles";
import { SponsorsSection } from "../components/sections/sponsors";
import { TarifSection } from "../components/sections/tarif";
import { ModalContextProvider } from "../contexts/ModalContext";
import { Providers } from "../contexts/Providers";
import { ScrollContextProvider } from "../contexts/ScrollContext";
import styles from "../styles/Home.module.scss";

export default function Home() {
	const courseSectionRef = useRef<HTMLDivElement>(null);
	const tarifSectionRef = useRef<HTMLDivElement>(null);
	const faqSectionRef = useRef<HTMLDivElement>(null);
	const contactSectionRef = useRef<HTMLDivElement>(null);
	// const sponsorsSectionRef = useRef<HTMLDivElement>(null);
	const lieuSectionRef = useRef<HTMLDivElement>(null);
	const obstaclesSectionRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.container}>
			<Head>
				{/* Create perfect SEO Head */}
				<title>MUD Park 2023</title>
				<meta
					name='description'
					content='Mud park est une course d’obstacle dans un cadre idylique. Pour une
					première édition, MUD Park a décidé de voir les choses en grand,
					avec pas moins de 22 obstacles et de nombreux happenings. Et tout ça
					dans un park historique de 6 hectares !'
				/>
				<link rel='icon' href='/favicon.ico' />

				<meta property='og:title' content='MUD Park 2023' />
				<meta
					property='og:description'
					content='Mud park est une course d’obstacle dans un cadre idylique. Pour une
					première édition, MUD Park a décidé de voir les choses en grand,
					avec pas moins de 22 obstacles et de nombreux happenings. Et tout ça
					dans un park historique de 6 hectares !'
				/>
				<meta property='og:image' content='/socio.png' />
				<meta property='og:url' content='https://mud-park.fr' />
				<meta name='twitter:card' content='summary_large_image' />

				<meta name='twitter:title' content='MUD Park 2023' />
				<meta
					name='twitter:description'
					content='Mud park est une course d’obstacle dans un cadre idylique. Pour une
					première édition, MUD Park a décidé de voir les choses en grand,
					avec pas moins de 22 obstacles et de nombreux happenings. Et tout ça
					dans un park historique de 6 hectares !'
				/>

				<meta name='twitter:image' content='/socio.png' />

				<meta name='twitter:site' content='@mudpark' />
				<meta name='twitter:creator' content='@mudpark' />

				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<title>MUD Park</title>
				<meta
					name='description'
					content='Mud park est une course d’obstacle dans un cadre idylique. Pour une
					première édition, MUD Park a décidé de voir les choses en grand,
					avec pas moins de 22 obstacles et de nombreux happenings. Et tout ça
					dans un park historique de 6 hectares !'
				/>

				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon/favicon.ico' />
			</Head>
			<Providers>
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
					<ObstaclesSection ref={obstaclesSectionRef} />
					<LieuSection ref={lieuSectionRef} />
					{/* <SponsorsSection ref={sponsorsSectionRef} /> */}
					<ContactSection ref={contactSectionRef} />
					<FaqSection ref={faqSectionRef} />
				</main>
				<Footer />
				<ReservationModal />
				{/* <PageLoader /> */}
			</Providers>
		</div>
	);
}
