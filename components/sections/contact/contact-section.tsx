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

	const sendEmail = () => {
		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: "name",
				email: "email",
				message: "message",
			}),
		})
			.then((response) => response.json())

			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<footer ref={ref}>
			<img src='/premier-plan.png' className={styles.trees} alt='' />
			<div className={styles["section"]}>
				<div className={styles["contact-section-content"]}>
					<h2 className={styles["contact-section-title"]}>Contact</h2>
					<button onClick={sendEmail}>Test email</button>
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
