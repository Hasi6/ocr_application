import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const User = mongoose.model('users');

class SaveUserDB {

    async saveUser(userData: any) {
        const { username, email, password, image, token } = userData;
        try {
            let newUser: any = new User({
                username,
                email,
                password,
                image,
                token
            })

            // encrypt the password
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);

            await newUser.save();

            return true;

        } catch (err) {
            console.error(err.message)
        }
    }
}

export default SaveUserDB;