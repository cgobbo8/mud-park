import { FormEvent, useEffect, useState } from "react";
import { DataResponse } from "../../../models";
import styles from "./contact-form.module.scss";

type ContactTypeEnum =
	| "Particulier"
	| "Entreprise"
	| "Association"
	| "Collectivité"
	| "Autre";

type ContactFormData = {
	type_contact: ContactTypeEnum;
	email: string;
	objet_message: string;
	message: string;
};

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ContactForm = () => {
	const [form, setForm] = useState<ContactFormData>({
		type_contact: "Particulier",
		email: "",
		objet_message: "",
		message: "",
	});

	const [isFormValid, setIsFormValid] = useState(false);

	const [isSending, setIsSending] = useState(false);

	const [errorMessage, setErrorMessage] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSending(true);

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		})
			.then((response) => response.json())
			.then((data: DataResponse) => {
				if (data.success) {
					setForm({
						type_contact: "Particulier",
						email: "",
						objet_message: "",
						message: "",
					});
					setSuccessMessage(true);
					setTimeout(() => {
						setSuccessMessage(false);
					}, 5000);
					setIsFormValid(false);
				} else {
					console.error(data.errorMessage);
					setErrorMessage(true);
					setTimeout(() => {
						setErrorMessage(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setErrorMessage(true);
				setTimeout(() => {
					setErrorMessage(false);
				}, 5000);
			})
			.finally(() => {
				setIsSending(false);
			});
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		e.preventDefault();

		if (errorMessage || successMessage) {
			setErrorMessage(false);
			setSuccessMessage(false);
		}

		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	useEffect(() => {
		if (
			!emailRegex.test(form.email) ||
			form.objet_message === "" ||
			form.message === ""
		) {
			setIsFormValid(() => false);
		} else {
			setIsFormValid(() => true);
		}
	}, [form]);

	return (
		<form onSubmit={onSubmit}>
			<div className={styles["contact-form"]}>
				<div className={styles["contact-form-content"]}>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='type_contact'
						>
							Type de contact
						</label>
						<select
							className={styles["contact-form-content-input-select"]}
							id='type_contact'
							name='type_contact'
							value={form.type_contact}
							onChange={handleChange}
						>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Particulier'
							>
								Particulier
							</option>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Entreprise'
							>
								Entreprise
							</option>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Association'
							>
								Association
							</option>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Collectivité'
							>
								Collectivité
							</option>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Autre'
							>
								Autre
							</option>
						</select>
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='email'
						>
							Email
						</label>
						<input
							className={styles["contact-form-content-input-input"]}
							type='email'
							id='email'
							name='email'
							value={form.email}
							onChange={handleChange}
						/>
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='objet_message'
						>
							Sujet
						</label>
						<input
							className={styles["contact-form-content-input-input"]}
							type='text'
							id='objet_message'
							name='objet_message'
							value={form.objet_message}
							onChange={handleChange}
						/>
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='message'
						>
							Message
						</label>
						<textarea
							className={styles["contact-form-content-input-textarea"]}
							id='message'
							name='message'
							value={form.message}
							onChange={handleChange}
						/>
					</div>
					<button
						className={`${styles["contact-form-content-submit"]} ${
							successMessage && styles["contact-form-content-submit-success"]
						} ${errorMessage && styles["contact-form-content-submit-error"]}`}
						type='submit'
						disabled={!isFormValid}
					>
						{successMessage && "Message envoyé !"}
						{errorMessage && "Une erreur s'est produite !"}

						{isSending && "Envoi en cours..."}
						{!isSending &&
							!successMessage &&
							!errorMessage &&
							"Envoyer le message"}
					</button>
				</div>
			</div>
		</form>
	);
};
