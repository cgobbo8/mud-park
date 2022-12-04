import React, { useContext, useEffect, useMemo } from "react";
import { useParallax } from "react-scroll-parallax";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "./course.module.scss";

enum CourseSectionState {
	INIT = "INIT",
	PARCOURS_DRAW = "PARCOURS_DRAW",
	OBSTACLES_DRAW = "OBSTACLES_DRAW",
	EVERYONE_DRAW = "EVERYONE_DRAW",
	KM_DRAW = "KM_DRAW",
	SURPRISES_DRAW = "SURPRISES_DRAW",
}

const CourseSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [smallScreen, setSmallScreen] = React.useState<boolean>(false);

	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		if (windowWidth && windowWidth < 900) {
			setSmallScreen(true);
			setCurrentState(CourseSectionState.INIT);
		} else {
			setSmallScreen(false);
		}
	}, [windowWidth]);

	const [currentState, setCurrentState] = React.useState<CourseSectionState>(
		CourseSectionState.INIT
	);

	const currentSquareColor = useMemo(() => {
		switch (currentState) {
			case CourseSectionState.EVERYONE_DRAW:
				return "#edd587";
			case CourseSectionState.KM_DRAW:
				return "#E9DECB";
			case CourseSectionState.SURPRISES_DRAW:
				return "#F8F0CA";
			default:
				return "#FFF";
		}
	}, [currentState]);

	const currentSquareSize = useMemo(() => {
		switch (currentState) {
			case CourseSectionState.EVERYONE_DRAW:
				return "80%";
			case CourseSectionState.KM_DRAW:
				return "70%";
			case CourseSectionState.SURPRISES_DRAW:
				return "62%";
			default:
				return "0";
		}
	}, [currentState]);

	const [isIntersecting, count]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setCourseOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	const { ref: parcoursRef } = useParallax<HTMLDivElement>({
		onEnter: (value) => {
			// console.log("Parcours Ref");
			console.log(value);

			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.PARCOURS_DRAW);
					// console.log("In INIT to PARCOURS_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					setCurrentState(CourseSectionState.PARCOURS_DRAW);
					// console.log("In OBSTACLES_DRAW to PARCOURS_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.EVERYONE_DRAW:
					break;
				case CourseSectionState.KM_DRAW:
					break;
				default:
					console.log("Default");
					break;
			}
		},
	});

	const { ref: obstacleRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			// console.log("Obstacle Ref");

			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					// console.log("In PARCOURS_DRAW to OBSTACLES_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					break;
				case CourseSectionState.EVERYONE_DRAW:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					// console.log("In EVERYONE_DRAW to OBSTACLES_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.KM_DRAW:
					break;
			}
		},
	});

	const { ref: forEveryoneRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			// console.log("For Everyone Ref");

			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					// console.log("In OBSTACLES_DRAW to EVERYONE_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.EVERYONE_DRAW:
					break;
				case CourseSectionState.KM_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					// console.log("In KM_DRAW to EVERYONE_DRAW");
					// console.log("====================================");
					break;
			}
		},
	});

	const { ref: kmRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			// console.log("Km Ref");

			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.KM_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					break;
				case CourseSectionState.EVERYONE_DRAW:
					setCurrentState(CourseSectionState.KM_DRAW);
					// console.log("In EVERYONE_DRAW to KM_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.KM_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					// console.log("In KM_DRAW to EVERYONE_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.SURPRISES_DRAW:
					setCurrentState(CourseSectionState.KM_DRAW);
					// console.log("In EVERYONE_DRAW to KM_DRAW");
					// console.log("====================================");
					break;
			}
		},
	});

	const { ref: surprisesRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			// console.log("Km Ref");

			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.SURPRISES_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					break;
				case CourseSectionState.EVERYONE_DRAW:
					break;
				case CourseSectionState.KM_DRAW:
					setCurrentState(CourseSectionState.SURPRISES_DRAW);
					// console.log("In KM_DRAW to EVERYONE_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.SURPRISES_DRAW:
					setCurrentState(CourseSectionState.KM_DRAW);
					// console.log("In EVERYONE_DRAW to KM_DRAW");
					// console.log("====================================");
					break;
			}
		},
	});

	useEffect(() => {
		setCourseOnScreen(isIntersecting);
	}, [isIntersecting, setCourseOnScreen]);

	useEffect(() => {
		console.log(currentState);
	}, [currentState]);

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
							Au coeur du parc historique de l&apos;Abbaye École de Sorèze,
							prenez votre temps sur ce parcours qui vous fera traverser des
							endroits inédits pour beaucoup... Ouvrez les yeux et profitez du
							spectacle !
						</p>
					</div>
					<div ref={obstacleRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							22 Obstacles
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Retour en enfance garanti, ces obstacles ludiques sont conçus pour
							vous faire passer un merveilleux moment !
						</p>
					</div>
					<div
						ref={forEveryoneRef}
						className={styles["course-content-text-bloc"]}
					>
						<h3 className={styles["course-content-text-bloc-title"]}>
							ÉGALEMENT POUR LES PETITS !
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Vous ne savez pas comment faire garder vos enfants pendant la
							course ? On a pensé à tout ! Un circuit d&apos;environ 500m est
							prévu et adapté pour tous les enfants. Structures gonflables,
							légos géants, ils s&apos;amuseront comme les grands ! Et
							évidemment, la course sera offerte pour eux !
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
					<div
						ref={surprisesRef}
						className={styles["course-content-text-bloc"]}
					>
						<h3 className={styles["course-content-text-bloc-title"]}>
							ET DES SURPRISES...
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Des surprises vous attendent tout au long de la course et de la
							journée.
						</p>
					</div>
				</div>
				{!smallScreen && (
					<div className={styles.image}>
						<div
							className={`${styles.image__square} ${
								currentState === CourseSectionState.KM_DRAW ||
								currentState === CourseSectionState.EVERYONE_DRAW ||
								currentState === CourseSectionState.SURPRISES_DRAW
									? styles.draw
									: ""
							} ${
								currentState === CourseSectionState.SURPRISES_DRAW
									? styles.draw__surprises
									: ""
							}'`}
							style={{
								backgroundColor: currentSquareColor,
								width: currentSquareSize,
								height: currentSquareSize,
							}}
						></div>
						<img
							className={`${styles.image__img} ${styles.image__img__parcours} ${
								currentState === CourseSectionState.PARCOURS_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/parcours.png'
							alt='parcours'
						/>
						<img
							className={`${styles.image__img} ${
								styles.image__img__obstacles
							} ${
								currentState === CourseSectionState.OBSTACLES_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/obstacles.png'
							alt='obstacles'
						/>
						<img
							className={`${styles.image__img} ${styles.image__img__team} ${
								currentState === CourseSectionState.EVERYONE_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/team.png'
							alt='team'
						/>
						<img
							className={`${styles.image__img} ${
								styles.image__img__double_parcours
							} ${
								currentState === CourseSectionState.KM_DRAW ? styles.draw : ""
							}`}
							src='/images/course/double_parcours.png'
							alt='parcours'
						/>
						<img
							className={`${styles.image__img} ${styles.image__img__suprises} ${
								currentState === CourseSectionState.SURPRISES_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/surprises.png'
							alt='surprises'
						/>
					</div>
				)}
			</div>
		</section>
	);
});

CourseSection.displayName = "CourseSection";

export { CourseSection };
