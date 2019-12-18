import mongoose from 'mongoose';

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


}

export default FindUser;