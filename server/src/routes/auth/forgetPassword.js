const mongoose = require("mongoose");
const Users = mongoose.model("users");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const config = require("config");

const forgetPassword = app => {
  app.post("/api/forgetPassword", async (req, res) => {
    const { email } = req.body;

    try {
      const user = await Users.findOne({ email });

      if (!user) {
        return res.json({ msg: false });
      } else {
        //   ******************************************************************************************

        // SEND EMAIL
        const output = `<ul>
      <li>User Token = Welcome ${user.username}</li>
      <p><a href='http://localhost:8080/resetPassword/${user.token}'>click here</a> for verify your account  </p>
  </ul>`;

        nodeoutlook.sendEmail({
          auth: {
            user: "devconnectorvue@outlook.com",
            pass: config.get("emailPassword")
          },
          from: "devconnectorvue@outlook.com",
          to: email,
          subject: "Welcome",
          html: output,

          onError: e => console.log(e),
          onSuccess: i => console.log(i)
        });

        // *******************************************************************************************

        return res.json({ msg: true });
      }
    } catch (err) {
      console.error(err.message);
    }
  });
};

module.exports = forgetPassword;
