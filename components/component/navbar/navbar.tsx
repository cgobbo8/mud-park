import { useContext, useEffect, useState } from "react";
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
			<img
				onClick={scrollToTop}
				className={styles.logo}
				src='/logo.svg'
				alt='logo'
			/>
			<ul className={styles.menu}>
				<li
					className={`${styles["menu-item"]} ${
						sectionOnScreen === "course" ? styles.active : ""
					}`}
				>
					<a href='#' onClick={goToCourseSection}>
						Course
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

				<button className={styles["menu-cta"]}>
					<img className={styles["menu-cta-ticket"]} src='/ticket.svg' />
					Réserver
				</button>
			</ul>
		</nav>
	);
};
