const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maulanahidayatullah159@gmail.com',
        pass: 'fyjkgmpofoxrvgat'
    }
});

const mailOptions = {
    from: "maulanahidayatullah@gmail.com",
    to: "atomx361@gmail.com",
    subject: "Nodemailer Test",
    html: "Test <button>sending</button> Gmail using Node JS"
};

const sendMail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("email kekirim");
    } catch (error) {
        console.log(error);
    }
}

sendMail(mailOptions);