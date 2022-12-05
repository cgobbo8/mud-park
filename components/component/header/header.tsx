import { useContext } from "react";
import { useParallax } from "react-scroll-parallax";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { Navbar } from "../navbar";
import styles from "./header.module.scss";

type HeaderProps = {
	sectionRefs: {
		courseSectionRef: React.RefObject<HTMLDivElement>;
		tarifSectionRef: React.RefObject<HTMLDivElement>;
		faqSectionRef: React.RefObject<HTMLDivElement>;
		contactSectionRef: React.RefObject<HTMLDivElement>;
	};
};

export const Header = ({ sectionRefs }: HeaderProps) => {
	const { ref: background } = useParallax<HTMLDivElement>({ speed: 50 });
	const { ref: title } = useParallax<HTMLDivElement>({
		scale: [2, 1, "easeOutCubic"],
	});
	const { ref: plan1 } = useParallax<HTMLImageElement>({ speed: 50 });
	const { ref: plan2 } = useParallax<HTMLImageElement>({ speed: 20 });
	const { ref: plan3 } = useParallax<HTMLImageElement>({ speed: 2 });

	return (
		<header className={styles.header}>
			<Navbar sectionRefs={sectionRefs} />

			<div className={styles.plans}>
				<img
					ref={plan3}
					className={styles["third-plan"]}
					src='/images/hero/arriere-plan-min.png'
					alt='plans'
				/>
				<div ref={title} className={styles["title-plan"]}>
					<h1>MUD PARK 2023</h1>
				</div>
				<img
					ref={plan2}
					className={styles["second-plan"]}
					src='/images/hero/deuxieme-plan-min.png'
					alt='plans'
				/>
				<img
					ref={plan1}
					className={styles["first-plan"]}
					src='/images/hero/test-min.png'
					alt='plans'
				/>
				<div ref={background} className={styles.background}></div>
			</div>
		</header>
	);
};
