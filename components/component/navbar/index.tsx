import styles from "./navbar.module.scss";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img className={styles.logo} src='/logo.svg' alt='logo' />
			<ul className={styles.menu}>
				<li className={styles["menu-item"]}>
					<a href='#'>Home</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href='#'>About</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href='#'>Contact</a>
				</li>
				<button className={styles["menu-cta"]}>Réserver</button>
			</ul>
		</nav>
	);
};
