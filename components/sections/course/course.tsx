import React, { useContext, useEffect } from "react";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./course.module.scss";

const CourseSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [isIntersecting, count]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setCourseOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	useEffect(() => {
		setCourseOnScreen(isIntersecting);
	}, [isIntersecting, setCourseOnScreen]);

	return (
		<section ref={ref} className={styles.section}>
			<h2 className={styles.title}>La course</h2>
			<div className={styles["course-content"]}>
				<div className={styles["course-content-text"]}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, et
						aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
						tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet
						nisl.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, et
						aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
						tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet
						nisl.
					</p>
				</div>
				<img
					className={styles["course-content-image"]}
					src='/jogging.png'
					alt='course'
				/>
			</div>
		</section>
	);
});

CourseSection.displayName = "CourseSection";

export { CourseSection };
