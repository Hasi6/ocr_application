const mongoose = require("mongoose");
const User = mongoose.model("users");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const config = require("config");

const sendToken = app => {
  app.post("/api/sendToken", async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user === null) {
        return res.json({ send: false });
      }

      //   ******************************************************************************************

      // SEND EMAIL
      const output = `<ul>
                      <li>User Token = Welcome ${user.username}</li>
                      <p><a href='http://localhost:8080/verify/${user.token}'>click here</a> for verify your account  </p>
                  </ul>`;

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

      // *******************************************************************************************

      return res.json({ send: true });
    } catch (err) {
      console.error(err.message);
    }
  });
};

module.exports = sendToken;
