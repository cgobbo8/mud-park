import { FaqItem } from "../../component/faq-item/faq-item";
import styles from "./faq-section.module.scss";
import { faqContent } from "../../../data/faq";
import React, { useContext, useEffect } from "react";
import { useOnScreen, UseOnScreenReturn } from "../../../hooks/useOnScreen";
import ScrollContext, {
	ScrollContextType,
} from "../../../contexts/ScrollContext";

const FaqSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [isIntersecting, count]: UseOnScreenReturn = useOnScreen(
		ref as React.RefObject<HTMLDivElement>
	);

	const { setFaqOnScreen }: ScrollContextType = useContext(
		ScrollContext
	) as ScrollContextType;

	useEffect(() => {
		setFaqOnScreen(isIntersecting);
	}, [isIntersecting, setFaqOnScreen]);

	return (
		<section ref={ref} className={styles.section}>
			<h2 className={styles.title}>FAQ</h2>
			<div className={styles.faq}>
				{faqContent.map((item, i) => (
					<FaqItem key={i} label={item.label} content={item.content} />
				))}
			</div>
		</section>
	);
});

FaqSection.displayName = "FaqSection";

export { FaqSection };
