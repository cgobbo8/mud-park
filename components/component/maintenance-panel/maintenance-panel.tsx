import styles from "./maintenance-panel.module.scss";

type MaintenancePanelProps = {
	text: string;
};

export const MaintenancePanel = ({ text }: MaintenancePanelProps) => {
	return (
		<div className={styles.panel}>
			<img src='/logo.svg' alt='' />
			<div className='text'>{text}</div>
			<div className='bandes'>
				<div className='haute'></div>
				<div className='moyenne'></div>
				<div className='basse'></div>
			</div>
		</div>
	);
};
