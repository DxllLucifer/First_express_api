import nodemailer from 'nodemailer';


export const sendMail = async (req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    // Connect with smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ludwig.macejkovic45@ethereal.email',
            pass: 'qTZQAHGryJdHedgz1T'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Ashutosh Dubey 👻" <dubey@gmail.com>', // sender address
        to: "dubey.ashutosh946@gmail.com", // list of receivers
        subject: "Hello Ashutosh", // Subject line
        text: "Hello ashutosh", // plain text body
        html: "<b>hello buddy</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
    res.status(200).json(info)
}