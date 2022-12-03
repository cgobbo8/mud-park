import React, { useContext, useEffect, useState } from "react";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./tarif-section.module.scss";

const dDay = new Date("2023-05-23T10:00:00");

const TarifSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [nbDaysBeforeDDay, setNbDaysBeforeDDay] = useState(0);

	const [isIntersecting, count]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setTarifOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	useEffect(() => {
		setTarifOnScreen(isIntersecting);
	}, [isIntersecting, setTarifOnScreen]);

	useEffect(() => {
		// calculate the number of days before the D-Day
		const now = new Date();
		const diff = dDay.getTime() - now.getTime();
		const nbDays = diff / (1000 * 60 * 60 * 24);
		setNbDaysBeforeDDay(nbDays);
	}, []);

	return (
		<section ref={ref} className={styles.section}>
			<div className={styles["section-background"]}></div>
			<h2 className={styles.title}>Tarifs</h2>
			<h3 className={styles.baseline}>
				{nbDaysBeforeDDay < 1
					? "C'est bientôt le jour J !"
					: `Il reste ${Math.floor(nbDaysBeforeDDay)} jours avant la course !`}
			</h3>
			<div className={styles.tarifs}>
				<div className={styles.tarif}>
					<h3 className={styles.tarifTitle}>Course en solo</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>35€</div>
						<div className='baseline'>Par personne</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Qui a besoin de compagnie pour courir ? Personne et surtout pas vous
						!
					</p>

					<img
						className={styles.tarifImage}
						src='/images/prices/duo.png'
						alt='runner'
					/>
				</div>
				<div className={styles.tarif}>
					<h3 className={styles.tarifTitle}>Petite équipe</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>30€</div>
						<div className='baseline'>Par personne</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Vous êtes 2 à 4 personnes et vous souhaitez courir ensemble ?
						C&apos;est possible ! Bénificiez d&apos;un tarif préférentiel.
					</p>

					<img
						className={styles.tarifImage}
						src='/images/prices/team.png'
						alt='runner'
					/>
				</div>
				<div className={`${styles.tarif} ${styles.prime}`}>
					<h3 className={styles.tarifTitle}>Grosse team</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>25€</div>
						<div className='baseline'>Par personne</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Vous avez réussi à réunir une équipe de 5 à 10 personnes ? Vous
						bénéficiez d&apos;un tarif encore plus avantageux !
					</p>

					<img
						className={styles.tarifImage}
						src='/images/prices/grosse_team.png'
						alt='runner'
					/>
				</div>
			</div>
		</section>
	);
});

TarifSection.displayName = "TarifSection";

export { TarifSection };
