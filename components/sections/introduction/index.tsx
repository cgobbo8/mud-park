import styles from "./introduction-section.module.scss";

export const IntroductionSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.intro}>
				<p className={styles.text}>
					Mud park est une course d’obstacle dans un cadre idylique.
				</p>
				<p className={styles.text}>
					Pour une première édition, MUD Park a décidé de voir les choses en
					grand, avec pas moins de 18 obstacles et de nombreux happenings.
				</p>
				<div className={styles.year}>
					<p>2023</p>
				</div>
				<div className={styles.joggeuse}>
					<img src='/coureuse.png' alt='coureuse' />
				</div>
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
