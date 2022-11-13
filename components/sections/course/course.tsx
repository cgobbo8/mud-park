import React, { useContext, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./course.module.scss";

const CourseSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageClasses, setImageClasses] = React.useState<string[]>([
		styles.cube,
	]);

	const [isIntersecting, count]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setCourseOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	const { ref: parcoursRef } = useParallax<HTMLDivElement>({
		onEnter: (value) => {
			console.log("parcours", value);
			setImageClasses(() => [styles.cube, styles.inParcours]);
		},
	});

	const { ref: obstacleRef } = useParallax<HTMLDivElement>({
		onEnter: (value) => {
			console.log("obstacle", value);
			setImageClasses(() => [
				styles.cube,
				styles.inParcours,
				styles.inObstacles,
			]);
		},
	});

	const { ref: forEveryoneRef } = useParallax<HTMLDivElement>({
		onEnter: (value) => {
			console.log("forEveryone", value);
			setImageClasses(() => [
				styles.cube,
				styles.inParcours,
				styles.inObstacles,
				styles.inForEveryOne,
			]);
		},
	});

	const { ref: kmRef } = useParallax<HTMLDivElement>({
		onEnter: (value) => {
			console.log("km", value);
			setImageClasses(() => [
				styles.cube,
				styles.inParcours,
				styles.inObstacles,
				styles.inForEveryone,
				styles.inKm,
			]);
		},
	});

	useEffect(() => {
		setCourseOnScreen(isIntersecting);
	}, [isIntersecting, setCourseOnScreen]);

	return (
		<section ref={ref} className={styles.section}>
			<h2 className={styles.title}>La course</h2>
			<div className={styles["course-content"]}>
				<div className={styles["course-content-text"]}>
					<div ref={parcoursRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							Le parcours
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Une course dans un cadre idylique. Au coeur d’un parc historique,
							vous vous dépasserez lorem ipsum dae ic toupium.
						</p>
					</div>
					<div ref={obstacleRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							18 Obstacles
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Sur la course se trouveront des obstacles de tout types. Votre
							force, votre endurance et votre fun seront mis à rude épreuve.
						</p>
					</div>
					<div
						ref={forEveryoneRef}
						className={styles["course-content-text-bloc"]}
					>
						<h3 className={styles["course-content-text-bloc-title"]}>
							POUR TOUT LE MONDE
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							La course et ses obstacles sont accessibles pour tous les niveaux.
							Pour les petits et les grands, les familles et les athètes.
						</p>
					</div>
					<div ref={kmRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							4 ou 8 KM
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Pour que tout le monde puisse participer, le parcours est
							disponible en deux versions, une version de 4km et une de 8km.
						</p>
					</div>
				</div>
				{/* <img
					className={styles["course-content-image"]}
					src='/jogging.png'
					alt='course'
				/> */}
				<div className={imageClasses.join(" ")}></div>
			</div>
		</section>
	);
});

CourseSection.displayName = "CourseSection";

export { CourseSection };
