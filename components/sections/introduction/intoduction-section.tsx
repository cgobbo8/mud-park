import { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import styles from "./introduction-section.module.scss";

export const IntroductionSection = () => {
	const { ref: text1 } = useParallax<HTMLDivElement>({
		speed: 20,
		rootMargin: { top: 300, right: 100, bottom: 100, left: 100 },
		onEnter: (value) => console.log("Enter"),
		onExit: (value) => console.log("Exit"),
	});

	const { ref: joggeuse } = useParallax<HTMLImageElement>({
		translateX: [-50, 0],
		rootMargin: { top: 300, right: 100, bottom: 100, left: 100 },
	});

	return (
		<section className={styles.section}>
			<div className={styles.intro}>
				<p ref={text1} className={styles.text}>
					MUD PARK est une course d’obstacle qui se déroulera le{" "}
					<span className='accent'>27 Mai 2023</span> dans le parc de{" "}
					<span className='accent'>la Cité de Sorèze</span>.
					<br />
					<br />
					Pour une première édition, la MUD PARK a décidé de voir les choses en
					grand, avec pas moins de 22 obstacles et de nombreux happenings.
					<br />
					<br />
					Et tout ça dans un parc historique de 6 hectares !
				</p>
				<div className={styles.year}>
					<p>2023</p>
				</div>
				<img
					ref={joggeuse}
					className={styles.joggeuse}
					src='/coureuse.svg'
					alt='coureuse'
				/>
			</div>
			<div className={styles.description}>
				<div className={styles["description-numbers"]}>
					<div className={styles["description-number"]}>
						<p className={styles["description-number-text"]}>22</p>
						<p className={styles["description-number-label"]}>Obstacles</p>
					</div>
					<div className={styles["description-number"]}>
						<p className={styles["description-number-text"]}>4/8</p>
						<p className={styles["description-number-label"]}>Km</p>
					</div>
				</div>
				<p className={styles["description-text"]}>
					Tous les obstacles ont été réfléchi pour qu&apos;ils soient adaptés au{" "}
					<span className='accent'>grand public</span>, personnes sédentaires
					commes confirmées.
					<br />
					<br />
					MUD PARK est un <span className='accent'>parcours</span> et non une
					course, alors prenez votre temps et profitez de ce moment.
				</p>
			</div>
		</section>
	);
};
