import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ModalContext, { ModalContextType } from "../../../contexts/ModalContext";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./tarif-section.module.scss";

const dDay = new Date("2023-05-23T10:00:00");

const TarifSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [nbDaysBeforeDDay, setNbDaysBeforeDDay] = useState(0);

	const { setIsModalOpen }: ModalContextType = useContext(ModalContext);

	const handleModalOpening = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsModalOpen(true);
	};

	const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const contactSectionRef = document.getElementById("contact");

		if (contactSectionRef) {
			contactSectionRef.scrollIntoView({ behavior: "smooth" });
		}
	};

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
				{nbDaysBeforeDDay < 1 ? (
					<>C&apos;est bientôt le jour J !</>
				) : (
					<>
						Il reste{" "}
						<span className='accent'>{Math.floor(nbDaysBeforeDDay)} jours</span>{" "}
						avant la course !
					</>
				)}
			</h3>
			<h3 className={styles.baseline}>
				Profitez des <span className='accent'>fêtes</span> pour offrir un beau
				moment !
			</h3>
			<h3 className={styles.baseline}>
				Profitez des <span className='accent'>promotions</span> les deux
				premiers mois !
			</h3>

			<div className={styles.tarifs}>
				<Link
					href='https://www.vostickets.fr/Billet?ID=ABBAYE_ECOLE_SOREZE'
					target='_blank'
					onClick={handleModalOpening}
					className={`${styles.tarif} ${styles.prime}`}
				>
					<h3 className={styles.tarifTitle}>Petit commité</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>
							<span>35€</span>
						</div>
						<div className='baseline'>Par personne</div>
						<div className='promo'>Au lieu de 40€</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Vous êtes entre 1 et 3 personnes ? <br />
						Pas besoin d&apos;être 30 pour courir ?
					</p>
					<div className={styles.imageContainer}>
						<Image
							className={styles.tarifImage}
							src='/images/prices/duo-min.png'
							alt='runner'
							width={340}
							height={300}
							blurDataURL={"/images/prices/duo-min.png"}
							placeholder='blur'
						/>
					</div>
				</Link>
				<Link
					href='https://www.vostickets.fr/Billet?ID=ABBAYE_ECOLE_SOREZE'
					target='_blank'
					onClick={handleModalOpening}
					className={`${styles.tarif} ${styles.prime}`}
				>
					<h3 className={styles.tarifTitle}>Petite équipe</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>
							<span>32€</span>
						</div>
						<div className='baseline'>Par personne</div>
						<div className='promo'>Au lieu de 36€</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Vous êtes 4 à 6 personnes et vous souhaitez courir ensemble ?
						C&apos;est possible ! Bénificiez d&apos;un tarif préférentiel.
					</p>
					<div className={styles.imageContainer}>
						<Image
							className={styles.tarifImage}
							src='/images/prices/team-min.png'
							alt='runner'
							width={310}
							height={300}
							blurDataURL={"/images/prices/team-min.png"}
							placeholder='blur'
						/>
					</div>
				</Link>
				<Link
					href='https://www.vostickets.fr/Billet?ID=ABBAYE_ECOLE_SOREZE'
					target='_blank'
					onClick={handleModalOpening}
					className={`${styles.tarif} ${styles.prime}`}
				>
					<h3 className={styles.tarifTitle}>Grosse team</h3>
					<div className={styles.tarifPrice}>
						<div className='price'>
							<span>29€</span>
						</div>
						<div className='baseline'>Par personne</div>
						<div className='promo'>Au lieu de 32€</div>
					</div>
					<button className={styles.reservationButton}>
						Je prends mon billet
					</button>
					<p className={styles.tarifDescription}>
						Vous avez réussi à réunir une équipe de 7 à 10 personnes ? Vous
						bénéficiez d&apos;un tarif encore plus avantageux !
					</p>
					<div className={styles.imageContainer}>
						<Image
							className={styles.tarifImage}
							src='/images/prices/grosse_team-min.png'
							alt='runner'
							width={440}
							height={300}
							blurDataURL={"/images/prices/grosse_team-min.png"}
							placeholder='blur'
						/>
					</div>
				</Link>
			</div>
			<p className={styles.clauses}>*Le tarif inclut toutes les surprises !</p>
			<p className={styles.clauses}>
				*Départ toutes les 30 minutes, choisissez votre créneau horaire sur la
				billetterie
			</p>
			<p className={styles.clauses}>
				*Gratuit pour les enfants de moins de 14 ans qui participeront aux
				activités enfants, veuillez nous{" "}
				<span onClick={scrollToContact} className='accent link'>
					contacter
				</span>{" "}
				si vous en avez !
			</p>
			<p className={styles.clauses}>
				*Tarif normal pour les enfants de + de 6 ans qui participeront à la
				course normale.
			</p>
			<p className={styles.clauses}>
				*MUD PARK est un évènement sportif, vous devez donc obligatoirement être
				munis d&apos;un certificat medical valide pour particper à la course.
				Vous devez également remplir l&apos;
				<Link
					className='accent link'
					href='/attestation.pdf'
					target='_blank'
					download
				>
					attestation
				</Link>{" "}
				pour le jour de la course.
			</p>
		</section>
	);
});

TarifSection.displayName = "TarifSection";

export { TarifSection };
