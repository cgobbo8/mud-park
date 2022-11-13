import { useEffect, useState } from "react";

export type UseOnScreenReturn = [boolean, number];

export const useOnScreen = (
	ref: React.RefObject<HTMLDivElement>
): UseOnScreenReturn => {
	const [isIntersecting, setIntersecting] = useState(false);
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		let observerRes = new IntersectionObserver(([entry]) => {
			setCount((count) => count + 1);
			setIntersecting(entry.isIntersecting);
		});
		setObserver(observerRes);
	}, []);

	useEffect(() => {
		if (observer && ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer && observer.disconnect();
		};
	}, [observer, ref]);

	return [isIntersecting, count];
};
