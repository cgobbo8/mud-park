import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

export const Navbar = () => {
	// Detect when the user scrolls down 80px from the top of the document

	const [isOnTop, setIsOnTop] = useState(true);

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

	return (
		<nav className={`${styles.navbar} ${isOnTop ? "" : styles.isNotOnTop}`}>
			<img className={styles.logo} src='/logo.svg' alt='logo' />
			<ul className={styles.menu}>
				<li className={styles["menu-item"]}>
					<a href='#'>Course</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href='#'>Tarifs</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href='#'>FAQ</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href='#'>Contact</a>
				</li>
				<button className={styles["menu-cta"]}>
					<img className={styles["menu-cta-ticket"]} src='/ticket.svg' />
					Réserver
				</button>
			</ul>
		</nav>
	);
};
