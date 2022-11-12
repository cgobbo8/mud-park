import { useParallax } from "react-scroll-parallax";
import { Navbar } from "../navbar";
import styles from "./header.module.scss";

export const Header = () => {
	const { ref: background } = useParallax<HTMLDivElement>({ speed: 50 });
	const { ref: title } = useParallax<HTMLDivElement>({
		scale: [1, 2, "easeOutCubic"],
	});
	const { ref: plan1 } = useParallax<HTMLImageElement>({ speed: 50 });
	const { ref: plan2 } = useParallax<HTMLImageElement>({ speed: 20 });
	const { ref: plan3 } = useParallax<HTMLImageElement>({ speed: 2 });
	return (
		<header className={styles.header}>
			<Navbar />

			<div className={styles.plans}>
				<img
					ref={plan3}
					className={styles["third-plan"]}
					src='/arriere-plan.png'
					alt='plans'
				/>
				<div ref={title} className={styles["title-plan"]}>
					<h1>MUD Park 2022</h1>
				</div>
				<img
					ref={plan2}
					className={styles["second-plan"]}
					src='/second-plan.png'
					alt='plans'
				/>
				<img
					ref={plan1}
					className={styles["first-plan"]}
					src='/premier-plan.png'
					alt='plans'
				/>
				<div ref={background} className={styles.background}></div>
			</div>
		</header>
	);
};
