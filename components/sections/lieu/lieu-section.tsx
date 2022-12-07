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
						Le département du Tarn regorge de sites historiques à explorer, et
						la cité de Sorèze en fait partie. En effet l&apos;Abbaye de Sorèze
						est membre des{" "}
						<Link href='https://www.grands-sites-occitanie.fr' target='_blank'>
							Grands Sites d&apos;Occitanie.
						</Link>{" "}
						et sa proximité avec de grandes villes comme Toulouse, Albi, ou
						encore Carcassonne, en fait un lieu de passage incontournable de la
						région.
						<br />
						<br />
						Avec MUD PARK, nous avons la chance de pouvoir profiter de ce lieu.
						Et de courir dans un parc magnifique et unique.
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
