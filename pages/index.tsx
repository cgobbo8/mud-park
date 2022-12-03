import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/component/header";
import { Navbar } from "../components/component/navbar";
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
				<title>MUD Park</title>
				<meta
					name='description'
					content="MUD Park, la course d'obstacle qui créé des souvenirs."
				/>
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
			</Providers>
		</div>
	);
}
