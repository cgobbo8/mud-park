import React from "react";
import styles from "./sponsors.module.scss";

const SponsorsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div ref={ref}>
			<div className={`${styles["section"]} ${styles["sponsors-section"]}`}>
				<img src='/sponsors.png' alt='' />
			</div>
		</div>
	);
});

SponsorsSection.displayName = "SponsorsSection";

export { SponsorsSection };
