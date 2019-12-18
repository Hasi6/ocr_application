import { Router, Request, Response } from 'express';
import mongoose from "mongoose";
import databaseData from '../../config/default';
import nodeoutlook from "nodejs-nodemailer-outlook";
import FindUser from '../../database/user/findUserByEmailDB';

const Users = mongoose.model("users");
const emailPassword = databaseData;
const router: Router = Router();

router.post("/api/forgetPassword", async (req, res) => {
  const { email } = req.body;

  const findUser = new FindUser();

  try {
    const user = await findUser.findUserByEmail(email);

    if (!user) {
      return res.json({ msg: false });
    } else {
      //   ******************************************************************************************

      // SEND EMAIL
      const output = `<ul>
      <li>User Token = Welcome ${user.username}</li>
      <p><a href='http://localhost:3000/resetPassword/${user.token}'>click here</a> for verify your account  </p>
  </ul>`;



      // *******************************************************************************************

      return res.json({ msg: true });
    }
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
