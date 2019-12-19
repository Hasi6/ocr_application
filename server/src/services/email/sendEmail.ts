import nodeoutlook from 'nodejs-nodemailer-outlook';
import databaseData from '../../config/default';

const { emailPassword }: any = databaseData;

class Email {

    sendEmail: Function = (email: string, output: String) => {
        console.log(emailPassword)
        nodeoutlook.sendEmail({
            auth: {
                user: "devconnectorvue@outlook.com",
                pass: emailPassword
            },
            from: "devconnectorvue@outlook.com",
            to: email,
            subject: "Welcome",
            html: output,

            onError: (e: any) => console.log(e),
            onSuccess: (i: any) => console.log(i)
        });
    }


}

export default Email;