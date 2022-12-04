import { useEffect, useState } from "react";
import styles from "./page-loader.module.scss";

export const PageLoader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className={styles["page-loader"]}>
			<div
				className={`${styles["page-loader--content--container"]} ${styles.container1}`}
			>
				<div
					className={`${styles["page-loader--content--text"]} ${styles.text1}`}
				>
					MUD PARK
				</div>
			</div>
			<div
				className={`${styles["page-loader--content--container"]} ${styles.container2}`}
			>
				<div
					className={`${styles["page-loader--content--text"]} ${styles.text2}`}
				>
					MUD PARK
				</div>
			</div>
		</div>
	);
};
