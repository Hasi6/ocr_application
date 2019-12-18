// get user model
const mongoose = require("mongoose");
const User = mongoose.model("users");
const passport = require("passport");

// bcrypt
const bcrypt = require("bcryptjs");

const Login = app => {
  app.post("/api/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email })

      if (!user) {
        return res.json({ msg: "No User" });
      }
      else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.json({ msg: "Password Invalid" });
        } 
        else if(!user.verifyAccount){
          return res.json({msg: 'verify Account'})
        }
        else {
          passport.authenticate("local", {
            successRedirect: "/api/current_user"
          })(req, res, next);
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

module.exports = Login;
