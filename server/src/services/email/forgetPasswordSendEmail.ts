import Email from './sendEmail';
class ForgetPassword {


    sendEmail: Email = new Email();

    // FORGET PASSWORD SEND EMAIL
    async forgetPasswordSendEmail(email: String, output: String) {
        try {
            const forgetPasswordEmailSent = await this.sendEmail.sendEmail(email, output);
            return forgetPasswordEmailSent;
        } catch (err) {
            console.error(err.message)
        }
    }
}

export default ForgetPassword;