const mongoose = require("mongoose");
const User = mongoose.model("users");
const cuid = require('cuid');

const verifyAccount = (app) => {
    app.get('/api/verifyAccount/:token', async(req, res)=>{
        const token = req.params.token;

        try {
            const user = await User.findOne({token})
            if(user === null){
                return res.json({verify:false})
            }
            const newToken =  `${user.email}-${cuid()}-${Date.now()}`
            user.verifyAccount = true;
            user.token = newToken;
            await user.save();
            return res.json({verify:true})

        } catch (err) {
            console.error(err.message)
        }

    })
}

module.exports = verifyAccount;