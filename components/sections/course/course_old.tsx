import React, { useContext, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./course.module.scss";

enum CourseSectionState {
	INIT = "INIT",
	PARCOURS_DRAW = "PARCOURS_DRAW",
	OBSTACLES_DRAW = "OBSTACLES_DRAW",
	EVERYONE_DRAW = "EVERYONE_DRAW",
	KM_DRAW = "KM_DRAW",
}

const CourseSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageClasses, setImageClasses] = React.useState<string[]>([
		styles.cube,
	]);

	const image1Ref = React.useRef<SVGSVGElement>(null);
	const image2Ref = React.useRef<SVGSVGElement>(null);
	const image3Ref = React.useRef<SVGSVGElement>(null);
	const image4Ref = React.useRef<SVGSVGElement>(null);

	const [currentState, setCurrentState] = React.useState<CourseSectionState>(
		CourseSectionState.INIT
	);

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
					image1Ref.current?.classList.add("active");
					// console.log("In INIT to PARCOURS_DRAW");
					// console.log("====================================");
					break;
				case CourseSectionState.PARCOURS_DRAW:
					break;
				case CourseSectionState.OBSTACLES_DRAW:
					setCurrentState(CourseSectionState.PARCOURS_DRAW);
					image2Ref.current?.classList.remove("active");
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
					break;
				case CourseSectionState.PARCOURS_DRAW:
					setCurrentState(CourseSectionState.OBSTACLES_DRAW);
					image2Ref.current?.classList.add("active");
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
							Une course dans un cadre idyllique. Au coeur d’un parc historique,
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
					src='/jogging-min.png'
					alt='course'
				/> */}
				{/* <div className={imageClasses.join(" ")}></div> */}
				<div className={styles.image}>
					<svg
						width='467'
						height='364'
						viewBox='0 0 467 364'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className=''
						ref={image1Ref}
					>
						<path
							d='M452 221.824C452 270.479 441.239 300.101 417.505 318.658C392.647 338.095 350.134 348.325 279 348.325C207.438 348.325 139.782 344.031 90.3971 327.961C65.818 319.964 46.948 309.412 34.332 296.087C22.0692 283.135 15 266.842 15 245.325C15 234.654 17.0886 227.894 19.8667 223.297C22.6111 218.755 26.7909 215.057 33.2129 211.791C39.8439 208.42 48.3342 205.775 59.0841 203.214C65.5309 201.679 72.0673 200.326 79.1402 198.863C84.1923 197.818 89.5182 196.716 95.2808 195.45C121.962 189.589 153.133 181.178 184.255 162.563C215.547 143.845 246.113 115.231 272.47 69.8593C296.696 28.1577 318.526 15.7513 334.973 15.0351C351.881 14.2988 370.573 25.4849 389.25 48.7013C407.514 71.4042 423.316 102.729 434.55 134.884C445.804 167.096 452 198.775 452 221.824Z'
							stroke='#84BE9C'
							strokeWidth='30'
							className='svg-elem-1'
						></path>
						<path
							d='M457 221.824C457 271.106 446.102 302.645 420.585 322.597C394.318 343.135 350.309 353.325 279 353.325C207.406 353.325 139.052 349.051 88.85 332.716C63.8247 324.573 44.0984 313.675 30.7013 299.525C17.5395 285.624 10 268.092 10 245.325C10 234 12.2205 226.283 15.5873 220.711C18.9315 215.176 23.9192 210.908 30.9466 207.335C38.1134 203.69 47.0646 200.938 57.9256 198.351C64.4108 196.806 71.095 195.422 78.2521 193.94C83.3031 192.895 88.5896 191.8 94.208 190.566C120.714 184.743 151.26 176.472 181.688 158.272C212.23 140.003 242.2 112.012 268.147 67.3477C292.672 25.13 315.736 10.868 334.755 10.0398C354.082 9.19827 374.142 21.9452 393.146 45.5672C411.874 68.8469 427.914 100.729 439.271 133.235C450.64 165.778 457 198.036 457 221.824Z'
							stroke='#E99440'
							strokeWidth='20'
							className='svg-elem-2'
						></path>
						<path
							d='M462 221.824C462 271.732 450.966 305.189 423.664 326.536C395.988 348.176 350.484 358.325 279 358.325C207.373 358.325 138.321 354.071 87.3029 337.47C61.8314 329.182 41.2488 317.937 27.0705 302.962C13.0098 288.112 5 269.342 5 245.325C5 233.345 7.35244 224.671 11.3078 218.125C15.2519 211.598 21.0475 206.759 28.6804 202.878C36.3829 198.961 45.795 196.1 56.767 193.487C63.291 191.933 70.1256 190.517 77.3663 189.017C82.4144 187.972 87.6599 186.885 93.1353 185.683C119.466 179.898 149.388 171.766 179.121 153.981C208.912 136.162 238.288 108.793 263.823 64.8361C288.649 22.1022 312.946 5.98476 334.538 5.04458C356.283 4.09769 377.712 18.4054 397.042 42.4331C416.234 66.2895 432.512 98.7296 443.991 131.585C455.476 164.46 462 197.297 462 221.824Z'
							stroke='#A54C5B'
							strokeWidth='10'
							className='svg-elem-3'
						></path>
					</svg>
					<svg
						width='477'
						height='372'
						viewBox='0 0 477 372'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						ref={image2Ref}
					>
						<circle
							cx='196.5'
							cy='164.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-1'
						></circle>
						<circle
							cx='196.5'
							cy='164.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-2'
						></circle>
						<circle
							cx='22.5'
							cy='250.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-3'
						></circle>
						<circle
							cx='22.5'
							cy='250.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-4'
						></circle>
						<circle
							cx='58.5'
							cy='314.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-5'
						></circle>
						<circle
							cx='58.5'
							cy='314.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-6'
						></circle>
						<circle
							cx='151.5'
							cy='344.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-7'
						></circle>
						<circle
							cx='151.5'
							cy='344.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-8'
						></circle>
						<circle
							cx='350.5'
							cy='349.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-9'
						></circle>
						<circle
							cx='350.5'
							cy='349.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-10'
						></circle>
						<circle
							cx='454.5'
							cy='187.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-11'
						></circle>
						<circle
							cx='454.5'
							cy='187.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-12'
						></circle>
						<circle
							cx='350.5'
							cy='22.5'
							r='17.5'
							stroke='#84BE9C'
							strokeWidth='10'
							className='round-elem-13'
						></circle>
						<circle
							cx='350.5'
							cy='22.5'
							r='10.5'
							stroke='#A54C5B'
							strokeWidth='10'
							className='round-elem-14'
						></circle>
					</svg>
				</div>
			</div>
		</section>
	);
});

CourseSection.displayName = "CourseSection";

export { CourseSection };

/**
 *
 * const { ref: parcoursRef } = useParallax<HTMLDivElement>({
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

 */
