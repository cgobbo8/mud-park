import Image from "next/image";
import { useEffect, useState } from "react";
import { ObstacleType } from "../../../models";
import styles from "./obstacle.module.scss";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export const Obstacle = ({ image, name }: ObstacleType) => {
	const [randomColor, setRandomColor] = useState<Color>();

	useEffect(() => {
		// generate a pastel color
		const r = (Math.round(Math.random() * 127) + 127).toString(16);
		const g = (Math.round(Math.random() * 127) + 127).toString(16);
		const b = (Math.round(Math.random() * 127) + 127).toString(16);

		let randomColor: Color = `#${r}${g}${b}`;

		setRandomColor(randomColor);
	}, []);

	return (
		<div className={styles.obstacle__item}>
			<div className={styles.obstacle__item_top}>
				<Image
					className={styles.obstacle__item_top_image}
					src={image || ""}
					alt={name}
					width={260}
					height={260}
					blurDataURL={image}
					placeholder='blur'
				/>
				<div
					className={styles.obstacle__item_top_square}
					style={{ backgroundColor: randomColor }}
				></div>
			</div>

			<div className={styles.obstacle__item_name}>{name}</div>
		</div>
	);
};
