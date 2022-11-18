import { useForm, Resolver } from "react-hook-form";
import styles from "./contact-form.module.scss";

type ContactFormData = {
	nom: string;
	prenom: string;
	type_contact: string;
	email: string;
	objet_message: string;
	message: string;
};

const resolver: Resolver<ContactFormData> = async (values) => {
	const errors: Record<string, string> = {};
	if (!values.nom) {
		errors.nom = "Le nom est obligatoire";
	}

	if (!values.prenom) {
		errors.prenom = "Le prénom est obligatoire";
	}

	if (!values.type_contact) {
		errors.type_contact = "Le type de contact est obligatoire";
	}

	if (!values.email) {
		errors.email = "L'email est obligatoire";
	}

	if (!values.objet_message) {
		errors.objet_message = "L'objet du message est obligatoire";
	}

	if (!values.message) {
		errors.message = "Le message est obligatoire";
	}

	return {
		values: errors.length ? {} : values,
		errors,
	};
};

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver,
	});

	const onSubmit = (data: ContactFormData) => {
		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles["contact-form"]}>
				<div className={styles["contact-form-content"]}>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='nom'
						>
							Nom
						</label>
						<input
							className={styles["contact-form-content-input-input"]}
							type='text'
							id='nom'
							{...register("nom")}
						/>
						{errors.nom && <p>{errors.nom.message}</p>}
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='prenom'
						>
							Prénom
						</label>
						<input
							className={styles["contact-form-content-input-input"]}
							type='text'
							id='prenom'
							{...register("prenom")}
						/>
						{errors.prenom && <p>{errors.prenom.message}</p>}
					</div>
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
							{...register("type_contact")}
						>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Particulier'
							>
								Particulier
							</option>
							<option
								className={styles["contact-form-content-input-select-option"]}
								value='Professionnel'
							>
								Professionnel
							</option>
						</select>
						{errors.type_contact && <p>{errors.type_contact.message}</p>}
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
							{...register("email")}
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='objet_message'
						>
							Objet du message
						</label>
						<input
							className={styles["contact-form-content-input-input"]}
							type='text'
							id='objet_message'
							{...register("objet_message")}
						/>
						{errors.objet_message && <p>{errors.objet_message.message}</p>}
					</div>
					<div className={styles["contact-form-content-input"]}>
						<label
							className={styles["contact-form-content-input-label"]}
							htmlFor='message'
						>
							Message
						</label>
						<textarea
							className={styles["contact-form-content-input-input"]}
							id='message'
							{...register("message")}
						/>
						{errors.message && <p>{errors.message.message}</p>}
					</div>
					<button
						className={styles["contact-form-content-submit"]}
						type='submit'
					>
						Envoyer
					</button>
				</div>
			</div>
		</form>
	);
};
