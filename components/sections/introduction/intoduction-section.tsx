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
					Mud park est une course d’obstacle dans un cadre idylique.
					<br />
					<br />
					Pour une première édition, MUD Park a décidé de voir les choses en
					grand, avec pas moins de 18 obstacles et de nombreux happenings.
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
						<p className={styles["description-number-text"]}>18</p>
						<p className={styles["description-number-label"]}>Obstacles</p>
					</div>
					<div className={styles["description-number"]}>
						<p className={styles["description-number-text"]}>5</p>
						<p className={styles["description-number-label"]}>Km</p>
					</div>
				</div>
				<p className={styles["description-text"]}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla neque
					tempore fuga doloremque ut perspiciatis, nemo itaque possimus nobis
					exercitationem accusamus ratione consectetur. Similique vel accusamus
					mollitia perspiciatis quasi voluptatum!
				</p>
			</div>
		</section>
	);
};
