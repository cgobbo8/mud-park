import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ModalContext, { ModalContextType } from "../../../contexts/ModalContext";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import styles from "./navbar.module.scss";

type NavbarProps = {
	sectionRefs: {
		courseSectionRef: React.RefObject<HTMLDivElement>;
		tarifSectionRef: React.RefObject<HTMLDivElement>;
		faqSectionRef: React.RefObject<HTMLDivElement>;
		contactSectionRef: React.RefObject<HTMLDivElement>;
	};
};

type PossibleSectionOnScreen = "course" | "tarif" | "faq" | "contact" | "";

const useWhichSectionIsOnScreen = (): PossibleSectionOnScreen => {
	const { courseOnScreen, tarifOnScreen, faqOnScreen, contactOnScreen } =
		useContext(ScrollContext) as ScrollContextType;
	const [whichSectionIsOnScreen, setWhichSectionIsOnScreen] =
		useState<PossibleSectionOnScreen>("");

	useEffect(() => {
		if (courseOnScreen) {
			setWhichSectionIsOnScreen("course");
		} else if (tarifOnScreen) {
			setWhichSectionIsOnScreen("tarif");
		} else if (faqOnScreen) {
			setWhichSectionIsOnScreen("faq");
		} else if (contactOnScreen) {
			setWhichSectionIsOnScreen("contact");
		} else {
			setWhichSectionIsOnScreen("");
		}
	}, [
		courseOnScreen,
		tarifOnScreen,
		faqOnScreen,
		contactOnScreen,
		setWhichSectionIsOnScreen,
	]);

	return whichSectionIsOnScreen;
};

export const Navbar = ({ sectionRefs }: NavbarProps) => {
	// Detect when the user scrolls down 80px from the top of the document

	const [isOnTop, setIsOnTop] = useState(true);
	const sectionOnScreen: PossibleSectionOnScreen = useWhichSectionIsOnScreen();

	const { setIsModalOpen }: ModalContextType = useContext(ModalContext);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setIsOnTop(false);
			} else {
				setIsOnTop(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleModalOpening = () => {
		setIsModalOpen(true);
	};

	const goToCourseSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (sectionRefs.courseSectionRef.current) {
			window.scrollTo({
				top: sectionRefs.courseSectionRef.current.offsetTop - 200,
				behavior: "smooth",
			});
		}
	};

	const goToTarifSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (sectionRefs.tarifSectionRef.current) {
			window.scrollTo({
				top: sectionRefs.tarifSectionRef.current.offsetTop - 200,
				behavior: "smooth",
			});
		}
	};

	const goToFaqSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (sectionRefs.faqSectionRef.current) {
			window.scrollTo({
				top: sectionRefs.faqSectionRef.current.offsetTop - 200,
				behavior: "smooth",
			});
		}
	};

	const goToContactSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (sectionRefs.contactSectionRef.current) {
			window.scrollTo({
				top: sectionRefs.contactSectionRef.current.offsetTop - 200,
				behavior: "smooth",
			});
		}
	};

	const scrollToTop = (e: React.MouseEvent<HTMLImageElement>) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<nav className={`${styles.navbar} ${isOnTop ? "" : styles.isNotOnTop}`}>
			<div className={styles.left}>
				<Image
					onClick={scrollToTop}
					className={styles.logo}
					src='/logo.svg'
					alt='logo'
					width={100}
					height={100}
					blurDataURL={"/logo.svg"}
					placeholder='blur'
				/>
				<div className={styles.date}>Course le 27 Mai 2023</div>
			</div>
			<ul className={styles.menu}>
				<li
					className={`${styles["menu-item"]} ${
						sectionOnScreen === "course" ? styles.active : ""
					}`}
				>
					<a href='#' onClick={goToCourseSection}>
						Évènement
					</a>
				</li>
				<li
					className={`${styles["menu-item"]} ${
						sectionOnScreen === "tarif" ? styles.active : ""
					}`}
				>
					<a href='#' onClick={goToTarifSection}>
						Tarifs
					</a>
				</li>
				<li
					className={`${styles["menu-item"]} ${
						sectionOnScreen === "contact" ? styles.active : ""
					}`}
				>
					<a href='#' onClick={goToContactSection}>
						Contact
					</a>
				</li>
				<li
					className={`${styles["menu-item"]} ${
						sectionOnScreen === "faq" ? styles.active : ""
					}`}
				>
					<a href='#' onClick={goToFaqSection}>
						FAQ
					</a>
				</li>

				<button onClick={handleModalOpening} className={styles["menu-cta"]}>
					<Image
						className={styles["menu-cta-ticket"]}
						src='/ticket.svg'
						alt='ticket'
						width={20}
						height={20}
					/>
					Réserver
				</button>
			</ul>
		</nav>
	);
};
