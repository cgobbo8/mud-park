import Link from "next/link";
import { useContext } from "react";
import ModalContext, { ModalContextType } from "../../../contexts/ModalContext";
import styles from "./reservation-modal.module.scss";

export const ReservationModal = () => {
	const { isModalOpen, setIsModalOpen }: ModalContextType =
		useContext(ModalContext);

	const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsModalOpen(false);
	};

	return (
		<div
			className={`${styles["reservation-modal--overlay"]} ${
				isModalOpen && styles.active
			}`}
			onClick={handleModalClose}
		>
			<div
				className={`${styles["reservation-modal"]} ${
					isModalOpen && styles.active
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className='message'>
					<span>⚠️</span>
					<p>
						MUD PARK étant un évènement sportif, vous devez{" "}
						<strong>obligatoirement</strong> avoir un certificat médical valide
						et à jour le jour de la course !
					</p>
				</div>
				<div className='message'>
					<span>ℹ️</span>
					<p>
						Choisissez bien votre créneau horaire sur la billetterie, vous ne
						pourrez pas changer de créneau une fois votre réservation effectuée.
					</p>
				</div>

				<Link
					href='https://www.vostickets.fr/Billet?ID=ABBAYE_ECOLE_SOREZE'
					className={styles["menu-cta"]}
					target='_blank'
				>
					<img
						className={styles["menu-cta-ticket"]}
						src='/ticket.svg'
						alt='ticket'
					/>
					Continuer vers la réservation
				</Link>

				{/* <h1>Réservez</h1>
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
				</div> */}
			</div>
		</div>
	);
};
