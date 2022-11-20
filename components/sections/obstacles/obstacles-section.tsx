import React from "react";
import styles from "./obstacles-section.module.scss";

const ObstaclesSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div ref={ref}>
			<div className={`${styles["section"]} ${styles["obstacles-section"]}`}>
				<h2 className={styles.title}>Obstacles</h2>
			</div>
		</div>
	);
});

ObstaclesSection.displayName = "ObstaclesSection";

export { ObstaclesSection };
