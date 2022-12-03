import Link from "next/link";
import { useContext } from "react";
import ModalContext, { ModalContextType } from "../../../contexts/ModalContext";
import styles from "./reservation-modal.module.scss";

export const ReservationModal = () => {
	const { isModalOpen }: ModalContextType = useContext(ModalContext);

	return (
		<div
			className={`${styles["reservation-modal--overlay"]} ${
				isModalOpen && styles.active
			}`}
		>
			<div
				className={`${styles["reservation-modal"]} ${
					isModalOpen && styles.active
				}`}
			>
				<h1>Réservez</h1>
				<p>
					Plusieurs heures de départ sont disponibles, sélectionnez celle que
					vous souhaitez !
				</p>
				<div className={styles["reservation-modal--hours"]}>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]} ${styles.inactive}`}
					>
						09h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						09h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						10h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						10h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						11h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						11h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						12h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						12h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						13h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						13h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						14h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						14h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						15h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						15h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						16h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						16h30
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						17h00
					</Link>
					<Link
						href='https://www.vostickets.fr/Billet/PGE_MUR/p3sAAJnQZthSAA'
						className={`${styles["reservation-modal--hours--hour"]}`}
					>
						17h30
					</Link>
				</div>
			</div>
		</div>
	);
};
