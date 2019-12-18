import nodeoutlook from 'nodejs-nodemailer-outlook';
import databaseData from '../../config/default';

const emailPassword = databaseData;

class Email {

    sendEmail: Function = (email: string, output: String) => {
        nodeoutlook.sendEmail({
            auth: {
                user: "devconnectorvue@outlook.com",
                pass: emailPassword
            },
            from: "devconnectorvue@outlook.com",
            to: email,
            subject: "Welcome",
            html: output,

            onError: (e: any) => false,
            onSuccess: (i: any) => true
        });
    }


}

export default Email;