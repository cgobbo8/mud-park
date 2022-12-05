import Link from "next/link";
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
						l&apos;enceinte de l&apos;Abbaye École de Sorèze. Ce lieu historique
						héberge en son sein un magnifique parc.
					</p>
				</div>
				<Link
					href='https://www.cite-de-soreze.com'
					className={styles.button}
					rel='noreferrer'
					target={"_blank"}
				>
					Accéder à l&apos;abbaye
				</Link>
				<img
					className='background'
					src='/images/lieu/abbaye-2-min.jpeg'
					alt='Abbaye école '
				/>
			</div>
		</div>
	);
});

LieuSection.displayName = "LieuSection";

export { LieuSection };
