import nodemailer from "nodemailer";


export const handleSendMail = async (userTo) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			service: "gmail",
			secure: true,
			auth: {
				user: "anonymousbigtits102@gmail.com",
				pass: "pvqq qahl esyn ewwi",
			},
		});
		
		await transporter.sendMail({
			to: userTo,
			from: "anonymousbigtits102@gmail.com",
			html: `
        <div>
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
            font-size: 24px;
        }
        p {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            background-color: #007BFF;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #aaaaaa;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h1>Your trip is nearly start!</h1>
        <p>Prepare now!</p>
        <p>We are thrilled to have you as part of our shop. Thank you for subscribing to our newsletter!</p>
        <p>By subscribing, you’ll receive the latest updates, exclusive content, and special offers straight to your inbox.</p>
        <p>If you ever have any questions, feel free to reach out to us. We’re here to help!</p>
        <a href="#" class="button">Visit Our Website</a>
        <p class="footer">
            You received this email because you subscribed to our newsletter. If you no longer wish to receive emails from us, you can <a href="#">unsubscribe</a> at any time.
        </p>
    </div>
</body>
</div>
`,
			subject: "Your trip is nearly start!",
		});
	}catch (e) {
		console.log(e)
	}
}