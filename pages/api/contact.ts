import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type DataReq = {
	nom: string;
	prenom: string;
	type_contact: string;
	email: string;
	objet_message: string;
	message: string;
};

type DataRes = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<DataRes>
) {
	// log body
	console.log(req.body);
	let emailContent: DataReq = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "mud.park.2023@gmail.com",
			pass: "mijjfwrasyuiacwe",
		},
		secure: true,
	});

	const mailOptionsForCorentin = {
		from: "hello@example.com",
		to: "corentin.gobbo@gmail.com",
		subject: "Nouveau message de MUD Park",
		text: `Nom: ${emailContent.nom}
Prénom: ${emailContent.prenom}
Type de contact: ${emailContent.type_contact}
Email: ${emailContent.email}
Objet du message: ${emailContent.objet_message}
Message: ${emailContent.message}`,
		html: `
<h3>Nouveau message de ${emailContent.prenom} ${emailContent.nom}</h3>
<ul>
<li>Type de contact: <b>${emailContent.type_contact}</b></li>
<li>Email: <b>${emailContent.email}</b></li>
<li>Objet du message: <b>${emailContent.objet_message}</b></li>
</ul>

<hr />
<p>Message: <em>${emailContent.message}</em></p>`,
	};

	const mailOptionsForFlorian = {
		from: "hello@example.com",
		to: "flocoachsportif@gmail.com",
		subject: "Nouveau message de MUD Park",
		text: `Nom: ${emailContent.nom}
Prénom: ${emailContent.prenom}
Type de contact: ${emailContent.type_contact}
Email: ${emailContent.email}
Objet du message: ${emailContent.objet_message}
Message: ${emailContent.message}`,
		html: `
<h3>Nouveau message de ${emailContent.prenom} ${emailContent.nom}</h3>
<ul>
<li>Type de contact: <b>${emailContent.type_contact}</b></li>
<li>Email: <b>${emailContent.email}</b></li>
<li>Objet du message: <b>${emailContent.objet_message}</b></li>
</ul>

<hr />
<p>Message: <em>${emailContent.message}</em></p>`,
	};

	transporter.sendMail(mailOptionsForCorentin, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);

			transporter.sendMail(mailOptionsForFlorian, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log("Email sent: " + info.response);
					return res.status(200).json({ name: "John Doe" });
				}
			});
		}
	});
}
