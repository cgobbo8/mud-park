import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type DataReq = {
	name: string;
	email: string;
	message: string;
	type_client: string;
};

type DataRes = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<DataRes>
) {
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
		subject: "Ceci est un test",
		text: "Test du service de mail de l'application MUD Park",
	};

	const mailOptionsForFlorian = {
		from: "hello@example.com",
		to: "flocoachsportif@gmail.com",
		subject: "Ceci est un test",
		text: "Test du service de mail de l'application MUD Park",
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
