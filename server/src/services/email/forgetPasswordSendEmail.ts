import Email from "./sendEmail";

class ForgetPassword extends Email {



    // FORGET PASSWORD SEND EMAIL
    async forgetPasswordSendEmail(email: String, output: String) {
        try {
            const res = await this.sendEmail(email, output);
            return res;
        } catch (err) {
            console.error(err.message)
        }
    }
}

export default ForgetPassword;