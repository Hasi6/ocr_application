import Email from './sendEmail';
class VerifyAccount extends Email {


    // VERIFY ACCOUNT SEND EMAIL
    async verifyAccountSendEmail(email: String, output: String) {
        try {
            const res = this.sendEmail(email, output)
            return res;
        } catch (err) {
            console.error(err.message)
        }
    }
}

export default VerifyAccount;