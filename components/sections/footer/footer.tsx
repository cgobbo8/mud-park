import Link from "next/link";
import { useMemo } from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
	const currentYear = useMemo(() => {
		return new Date().getFullYear();
	}, []);

	return (
		<footer className={styles.footer}>
			{/* Top part */}
			<div className={styles.top}>
				<img className={styles.logo} src='/logo-white.svg' alt='' />
				<div className={styles.footer__item}>
					<h3 className={styles.footer__title}>A propos</h3>
					<p>
						MUD PARK est une course d’obstacle dans un cadre idyllique. Pour une
						première édition, la MUD PARK a décidé de voir les choses en grand,
						avec pas moins de 22 obstacles et de nombreux happenings. Et tout ça
						dans un parc historique de 6 hectares !
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
							<Link
								target='_blank'
								href='https://goo.gl/maps/he4ZApPhHqBRd6op6'
								className={styles.footer__list__link}
							>
								Cité de Sorèze
							</Link>
						</li>
						<li className={styles.footer__list__item}>
							<Link
								target='_blank'
								href='https://goo.gl/maps/he4ZApPhHqBRd6op6'
								className={styles.footer__list__link}
							>
								1 Rue Saint-Martin
							</Link>
						</li>
						<li className={styles.footer__list__item}>
							<Link
								target='_blank'
								href='https://goo.gl/maps/he4ZApPhHqBRd6op6'
								className={styles.footer__list__link}
							>
								81540 Sorèze
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom part */}
			<div className={styles.bottom}>
				<div className={styles.bottom__left}>
					Copyright © {currentYear} MudPark | Tous droits réservés
				</div>
				<div className={styles.bottom__right}>
					<Link
						target='_blank'
						href='https://www.facebook.com/profile.php?id=100088002883843'
						className={styles.social__link}
					>
						<img src='/images/socials/facebook.svg' alt='' />
					</Link>
					<Link
						target='_blank'
						href='https://www.instagram.com/mud_park/?next=%2F'
						className={styles.social__link}
					>
						<img src='/images/socials/instagram.svg' alt='' />
					</Link>
					<Link
						target='_blank'
						href='tel:+336 09 28 25 49'
						className={styles.social__link}
					>
						<img src='/images/socials/whatsapp.svg' alt='' />
					</Link>
				</div>
			</div>
		</footer>
	);
};
