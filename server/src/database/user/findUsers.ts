import { uuidv4 } from 'uuid/v4';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Users = mongoose.model('users');

class FindUser {

    // FIND USER BYE EMAIL
    async findUserByEmail(email: String) {
        try {
            const user = await Users.findOne({ email })
            return user;
        } catch (err) {
            console.error(err.message)
        }
    }

    // FIND USER BY TOKEN
    async findUserByToken(token: String) {
        try {
            const user = await Users.findOne({ token })
            return user;
        } catch (err) {
            console.error(err.message)
        }
    }

    // FIND USER BY TOKEN
    async findUserByTokenAndResetPassword(token: String, password: any) {
        try {
            const user = await Users.findOne({ token })
            if (!user) {
                return false;
            } else {
                // encrypt the password
                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);
                const newToken = `${user.email}-${uuidv4()}`;
                user.token = newToken;
                user.password = password;
                await user.save();
                return true;
            }
        } catch (err) {
            console.error(err.message)
        }
    }


}

export default FindUser;