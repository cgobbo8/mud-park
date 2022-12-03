import React from "react";
import styles from "./lieu-section.module.scss";

const LieuSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div ref={ref}>
			<div className={`${styles["section"]} ${styles["lieu-section"]}`}>
				<h2 className={styles.title}>Lieu</h2>
				<div className={styles["lieu-section__content"]}>
					<p>
						Nous avons la chance de pouvoir effectuer la course dans
						l&apos;enceinte de l&apos;abbaye école de Sorèze. Ce lieu historique
						héberge en son sein un magnifique parc.
					</p>
				</div>
				<a
					href='https://goo.gl/maps/QhDQz1xHLmBGmYzP7'
					className={styles.button}
					rel='noreferrer'
				>
					Accéder à l&apos;abbaye
				</a>
				<img
					className='background'
					src='/images/lieu/abbaye-1.jpeg'
					alt='Abbaye école '
				/>
			</div>
		</div>
	);
});

LieuSection.displayName = "LieuSection";

export { LieuSection };