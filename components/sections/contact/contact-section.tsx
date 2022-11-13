import React, { useContext, useEffect } from "react";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import styles from "./contact-section.module.scss";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [isIntersecting, _]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setContactOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	useEffect(() => {
		setContactOnScreen(isIntersecting);
	}, [isIntersecting, setContactOnScreen]);

	return (
		<footer ref={ref}>
			<div className={styles["section"]}>
				<div className={styles["contact-section-content"]}>
					<h2 className={styles["contact-section-title"]}>Contact</h2>
					<p className={styles["contact-section-text"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, et
						aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
						tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet
						nisl.
					</p>
					<div className={styles["contact-section-social"]}>
						<a
							className={styles["contact-section-social-link"]}
							href='https://www.facebook.com/'
							target='_blank'
							rel='noreferrer'
						></a>
					</div>
				</div>
			</div>
		</footer>
	);
});

ContactSection.displayName = "ContactSection";

export { ContactSection };
