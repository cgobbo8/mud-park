import { useState } from "react";
import styles from "./faq-item.module.scss";

type FaqItemProps = {
	label: string;
	content: string;
};

export const FaqItem = ({ label, content }: FaqItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			onClick={handleToggle}
			className={`${styles["faq-item"]} ${
				isOpen ? styles.opened : styles.closed
			}`}
		>
			<div className={styles["faq-item-header"]}>
				<h3 className={styles["faq-item-title"]}>{label}</h3>
				<div className={styles["faq-item-icon"]}>
					<div
						className={`${styles.cross} ${
							isOpen ? styles.opened : styles.closed
						}`}
					>
						<span className='bar'></span>
						<span className='bar'></span>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className={styles["faq-item-content"]}>
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};
