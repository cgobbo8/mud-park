import React, { useContext, useEffect } from "react";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import { ContactForm } from "../../component/contact-form";
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
			<div className={`${styles["section"]} ${styles["contact-section"]}`}>
				<h2 className={styles["contact-title"]}>
					Des questions ? Contactez nous !
				</h2>
				<ContactForm />
				<img
					className={styles["contact-section-image"]}
					src='/images/mail-hero.svg'
					alt='hero with letter'
				/>
			</div>
		</footer>
	);
});

ContactSection.displayName = "ContactSection";

export { ContactSection };
