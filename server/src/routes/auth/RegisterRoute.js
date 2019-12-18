// get user model
const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcryptjs");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const cuid = require('cuid')
const config = require("config");

const Register = app => {
  app.post("/api/register", async (req, res) => {
    const { username, email, password, image } = req.body;

    try {
      const user = await User.findOne({ email: email });

      if (user) {
        return res.json({ msg: "registered" });
      }

      const token =  `${email}-${cuid()}-${Date.now()}`

      const newUser = new User({
        username,
        email,
        password,
        image,
        token
      });

      // encrypt the password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      await newUser.save();

      // SEND EMAIL
      const output = `<ul>
                      <li>User Token = Welcome ${username}</li>
                      <p><a href='http://localhost:8080/verify/${token}'>click here</a> for verify your account  </p>
                  </ul>`;
      // let testAccount = await nodemailer.createTestAccount();

      nodeoutlook.sendEmail({
        auth: {
          user: "devconnectorvue@outlook.com",
          pass: config.get('emailPassword')
        },
        from: "devconnectorvue@outlook.com",
        to: email,
        subject: "Welcome",
        html: output,

        onError: e => console.log(e),
        onSuccess: i => console.log(i)
      });

      return res.json({ msg: "success" });
    } catch (err) {
      console.error(err.message);
    }
  });
};

module.exports = Register;

// try {
//   const user = await User.findOne({ email: email });

//   if (!user) {
//     return res.render("signup", {
//       msg: `No users found in ${email} this email`,
//       type: "warning"
//     });
//   }

//   return res.redirect(`/api/resetPassword/${user.id}`);
// } catch (err) {
//   console.error(err.message);
// }
