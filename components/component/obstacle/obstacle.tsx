import { useEffect, useState } from "react";
import { ObstacleType } from "../../../models";
import styles from "./obstacle.module.scss";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export const Obstacle = (props: ObstacleType) => {
	const [randomColor, setRandomColor] = useState<Color>();

	useEffect(() => {
		// generate a pastel color
		const r = (Math.round(Math.random() * 127) + 127).toString(16);
		const g = (Math.round(Math.random() * 127) + 127).toString(16);
		const b = (Math.round(Math.random() * 127) + 127).toString(16);

		let randomColor: Color = `#${r}${g}${b}`;

		console.log(randomColor);

		setRandomColor(randomColor);
	}, []);

	return (
		<div className={styles.obstacle__item}>
			<div className={styles.obstacle__item_top}>
				<img
					className={styles.obstacle__item_top_image}
					src={props.image || ""}
					alt={props.name}
				/>
				<div
					className={styles.obstacle__item_top_square}
					style={{ backgroundColor: randomColor }}
				></div>
			</div>

			<div className={styles.obstacle__item_name}>{props.name}</div>
		</div>
	);
};
