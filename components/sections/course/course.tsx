import Image from "next/image";
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
			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.PARCOURS_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					setCurrentState(CourseSectionState.PARCOURS_DRAW);
					break;
				case CourseSectionState.EVERYONE_DRAW:
					break;
				case CourseSectionState.KM_DRAW:
					break;
				default:
					break;
			}
		},
	});

	const { ref: obstacleRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					break;
				case CourseSectionState.EVERYONE_DRAW:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					break;
				case CourseSectionState.KM_DRAW:
					break;
			}
		},
	});

	const { ref: forEveryoneRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
			switch (currentState) {
				case CourseSectionState.INIT:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					break;
				case CourseSectionState.EVERYONE_DRAW:
					break;
				case CourseSectionState.KM_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					break;
			}
		},
	});

	const { ref: kmRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
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
					break;
				case CourseSectionState.KM_DRAW:
					setCurrentState(CourseSectionState.EVERYONE_DRAW);
					break;
				case CourseSectionState.SURPRISES_DRAW:
					setCurrentState(CourseSectionState.KM_DRAW);
					break;
			}
		},
	});

	const { ref: surprisesRef } = useParallax<HTMLDivElement>({
		onEnter: () => {
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
					break;
				case CourseSectionState.SURPRISES_DRAW:
					setCurrentState(CourseSectionState.KM_DRAW);
					break;
			}
		},
	});

	useEffect(() => {
		setCourseOnScreen(isIntersecting);
	}, [isIntersecting, setCourseOnScreen]);

	useEffect(() => {}, [currentState]);

	return (
		<section ref={ref} className={styles.section}>
			<h2 className={styles.title}>L&apos;??v??nement</h2>

			<div className={styles["course-content"]}>
				<div className={styles["course-content-text"]}>
					<div ref={parcoursRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							Le parcours
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Au coeur du parc historique de la Cit?? de Sor??ze, prenez votre
							temps sur ce parcours qui vous fera traverser des endroits in??dits
							pour beaucoup... Ouvrez les yeux et profitez du spectacle !
						</p>
					</div>
					<div ref={obstacleRef} className={styles["course-content-text-bloc"]}>
						<h3 className={styles["course-content-text-bloc-title"]}>
							22 Obstacles
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Retour en enfance garanti, ces obstacles ludiques sont con??us pour
							vous faire passer un merveilleux moment !
						</p>
					</div>
					<div
						ref={forEveryoneRef}
						className={styles["course-content-text-bloc"]}
					>
						<h3 className={styles["course-content-text-bloc-title"]}>
							??GALEMENT POUR LES PETITS !
						</h3>
						<p className={styles["course-content-text-bloc-text"]}>
							Vous ne savez pas comment faire garder vos enfants de - de 14ans
							pendant la course ? On a pens?? ?? tout ! Un circuit d&apos;environ
							500m est pr??vu et adapt?? pour tous les enfants.
							<br />
							<br />
							Structures gonflables, l??gos g??ants, ils s&apos;amuseront comme
							les grands ! Et ??videmment, la course sera offerte pour eux !
							<br />
							<br />?? noter que les enfants de + de 6 ans pourront ??galement
							participer ?? la course adulte, dans ce cas l??, ils seront compt??s
							comme participants et l&apos;inscription sera au tarif normal.
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
							journ??e.
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
						<Image
							className={`${styles.image__img} ${styles.image__img__parcours} ${
								currentState === CourseSectionState.PARCOURS_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/parcours-min.png'
							alt='parcours'
							width={466}
							height={505}
							blurDataURL={"/images/course/parcours-min.png"}
							placeholder='blur'
						/>
						<Image
							className={`${styles.image__img} ${
								styles.image__img__obstacles
							} ${
								currentState === CourseSectionState.OBSTACLES_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/obstacles-min.png'
							alt='obstacles'
							height={611}
							width={310}
							blurDataURL={"/images/course/obstacles-min.png"}
							placeholder='blur'
						/>
						<Image
							className={`${styles.image__img} ${styles.image__img__team} ${
								currentState === CourseSectionState.EVERYONE_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/team-min.png'
							alt='team'
							height={610}
							width={420}
							blurDataURL={"/images/course/team-min.png"}
							placeholder='blur'
						/>
						<Image
							className={`${styles.image__img} ${
								styles.image__img__double_parcours
							} ${
								currentState === CourseSectionState.KM_DRAW ? styles.draw : ""
							}`}
							src='/images/course/double_parcours-min.png'
							alt='parcours'
							height={610}
							width={420}
							blurDataURL={"/images/course/double_parcours-min.png"}
							placeholder='blur'
						/>
						<Image
							className={`${styles.image__img} ${styles.image__img__suprises} ${
								currentState === CourseSectionState.SURPRISES_DRAW
									? styles.draw
									: ""
							}`}
							src='/images/course/surprises-min.png'
							alt='surprises'
							height={610}
							width={370}
							blurDataURL={"/images/course/surprises-min.png"}
							placeholder='blur'
						/>
					</div>
				)}
			</div>
		</section>
	);
});

CourseSection.displayName = "CourseSection";

export { CourseSection };
