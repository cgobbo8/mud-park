import styles from "./obstacles.module.scss";
import { obstacles } from "../../../data/obstacles";
import { Obstacle } from "../obstacle";
import { ObstacleFamily } from "../../../models";
import { useEffect, useRef, useState } from "react";

const useAnimationFrame = (callback: (v: number) => void) => {
	// Use useRef for mutable variables that we want to persist
	// without triggering a re-render on their change
	const requestRef = useRef<number>();
	const previousTimeRef = useRef<number>();

	const animate = (time: number) => {
		if (previousTimeRef.current != undefined) {
			const deltaTime = time - previousTimeRef.current;
			callback(deltaTime);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);

		return () => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, []);
};

export const Obstacles = () => {
	const [currentType, setCurrentType] = useState<ObstacleFamily>(
		ObstacleFamily.Physique
	);

	const [barWidth, setBarWidth] = useState(0);

	useAnimationFrame((deltaTime) => {
		setBarWidth((prevCount) => {
			if (prevCount >= 100) {
				changeFamilyType();
				return 0;
			} else {
				return prevCount + deltaTime * 0.01;
			}
		});
	});

	const handleChangeType = (type: ObstacleFamily) => {
		setBarWidth(() => 0);
		setCurrentType(type);
	};

	const changeFamilyType = () => {
		setCurrentType((prevType) => {
			switch (prevType) {
				case ObstacleFamily.Physique:
					return ObstacleFamily.Agilité;
				case ObstacleFamily.Agilité:
					return ObstacleFamily.Fun;
				case ObstacleFamily.Fun:
					return ObstacleFamily.Physique;
			}
		});
	};

	return (
		<div className={styles["obstacles"]}>
			<div className={styles["obstacles--sidebar"]}>
				{Object.values(ObstacleFamily).map((type, index) => {
					return (
						<span
							key={index}
							onClick={() => handleChangeType(type)}
							className={`${styles["obstacles--sidebar--item"]} ${
								type === currentType ? styles["active"] : ""
							}`}
						>
							<span>
								{type}
								<span
									style={{
										width: `${barWidth}%`,
									}}
									className={styles["bar"]}
								></span>
							</span>
						</span>
					);
				})}
			</div>
			<div className={styles["obstacles--content"]}>
				<div className={styles["obstacles--content--list"]}>
					{obstacles.map((obstacle) => {
						return (
							obstacle.family.includes(currentType) && (
								<Obstacle key={obstacle.id} {...obstacle} />
							)
						);
					})}
				</div>
			</div>
		</div>
	);
};
