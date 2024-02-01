var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "chuvandat1112003@gmail.com",
        pass: "zfku cajs aqpc fanm",
    },
});

var mailOptions = {
    from: "chuvandat1112003@gmail.com",
    to: "chuvandat1112003@gmail.com, fat123456727@gmail.com",
    subject: "Sending Email using Node.js haha",
    text: "That was easy! yeahh",
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
