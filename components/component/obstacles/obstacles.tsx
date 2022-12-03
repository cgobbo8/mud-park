import styles from "./obstacles.module.scss";
import { obstacles } from "../../../data/obstacles";
import { Obstacle } from "../obstacle";
import { ObstacleFamily } from "../../../models";
import { useState } from "react";

export const Obstacles = () => {
	const [currentType, setCurrentType] = useState<ObstacleFamily>(
		ObstacleFamily.Physique
	);

	const handleChangeType = (type: ObstacleFamily) => {
		setCurrentType(type);
	};

	return (
		<div className={styles["obstacles"]}>
			<div className={styles["obstacles--sidebar"]}>
				{Object.values(ObstacleFamily).map((type, index) => {
					return (
						<div
							className={`${styles["obstacles--sidebar--item"]} ${
								type === currentType
									? styles["obstacles--sidebar--item--active"]
									: ""
							}`}
							onClick={() => handleChangeType(type)}
							key={index}
						>
							{type}
						</div>
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
