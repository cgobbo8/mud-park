import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./page-loader.module.scss";

export const PageLoader = () => {
	const [loading, setLoading] = useState(true);

	const logoRef: RefObject<HTMLImageElement> = useRef(null);
	const pageRef: RefObject<HTMLDivElement> = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			if (logoRef.current) {
				// add class isLoaded to logoRef
				logoRef.current.classList.add(styles.isLoaded);
			}
			setTimeout(() => {
				if (logoRef.current) {
					// remove class isLoaded from logoRef
					logoRef.current.classList.remove(styles.isLoaded);
				}

				if (pageRef.current) {
					// add class isLoaded to pageRef
					pageRef.current.classList.add(styles.isLoaded);
				}
			}, 2000);
		}, 300);
	}, []);

	return (
		<div className={styles["page-loader"]} ref={pageRef}>
			<img
				src='/logo-white.svg'
				alt='logo'
				className={styles["page-loader--logo"]}
				ref={logoRef}
			/>
		</div>
	);
};
