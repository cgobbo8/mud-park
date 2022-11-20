import styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/* Top part */}
			<div className={styles.top}>
				<img className={styles.logo} src='/logo-white.svg' alt='' />
				<div className={styles.footer__item}>
					<h3 className={styles.footer__title}>A propos</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
						corporis earum, aspernatur odit, exercitationem cum cupiditate
						eligendi dolorem ipsum provident vero facilis, tempora alias impedit
						minima reprehenderit eius nobis.
					</p>
				</div>
				{/* <div className={styles.footer__item}>
					<h3 className={styles.footer__title}>Mentions légales</h3>
					<ul className={styles.footer__list}>
						<li className={styles.footer__list__item}>
							<a
								href='https://www.facebook.com/mudparkcourse'
								className={styles.footer__list__link}
							>
								CGU
							</a>
						</li>
						<li className={styles.footer__list__item}>
							<a
								href='https://www.instagram.com/mudparkcourse/'
								className={styles.footer__list__link}
							>
								CGV
							</a>
						</li>
					</ul>
				</div> */}
				<div className={styles.footer__item}>
					<h3 className={styles.footer__title}>Localisation</h3>
					<ul className={styles.footer__list}>
						<li className={styles.footer__list__item}>
							<a
								href='https://www.facebook.com/mudparkcourse'
								className={styles.footer__list__link}
							>
								1 rue de la gare
							</a>
						</li>
						<li className={styles.footer__list__item}>
							<a
								href='https://www.instagram.com/mudparkcourse/'
								className={styles.footer__list__link}
							>
								75000 Paris
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom part */}
			<div className={styles.bottom}>
				<div className={styles.bottom__left}>
					Copyright © 2021 MudPark | Made by Corentin Gobbo
				</div>
				<div className={styles.bottom__right}>
					<a
						href='https://www.facebook.com/mudparkcourse'
						className={styles.social__link}
					>
						<img src='/images/socials/facebook.svg' alt='' />
					</a>
					<a
						href='https://www.instagram.com/mudparkcourse/'
						className={styles.social__link}
					>
						<img src='/images/socials/instagram.svg' alt='' />
					</a>
					<a
						href='https://twitter.com/mudparkcourse'
						className={styles.social__link}
					>
						<img src='/images/socials/twitter.svg' alt='' />
					</a>
				</div>
			</div>
		</footer>
	);
};
