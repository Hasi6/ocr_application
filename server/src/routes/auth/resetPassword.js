const mongoose = require("mongoose");
const Users = mongoose.model("users");
const bcrypt = require("bcryptjs");
const cuid = require("cuid");

const resetPassword = app => {
  app.post("/api/resetPassword", async (req, res) => {
    let { token, password } = req.body;
    console.log(token)

    try {
      const user = await Users.findOne({ token });

      if (!user) {
        return res.json({ msg: false });
      } else {
        // encrypt the password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const newToken = `${user.email}-${cuid()}-${Date.now()}`;
        user.token = newToken;
        user.password = password;
        await user.save();
        return res.json({ msg: true });
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

module.exports = resetPassword;
