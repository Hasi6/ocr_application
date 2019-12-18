const bcrypt = require("bcryptjs");
import uuidv4 from 'uuid/v4';
import FindUser from '../../database/user/findUserByEmailDB';
import { Router, Request, Response } from 'express';
import VerifyAccount from '../../services/email/verifyUserAccount';

const router: Router = Router();
const findUser: FindUser = new FindUser();

router.post("/api/register", async (req: Request, res: Response) => {
  const { username, email, password, image } = req.body;

  const verifyAccount: VerifyAccount = new VerifyAccount();

  try {
    const user = await findUser.findUserByEmail(email);

    if (user) {
      return res.json({ msg: "registered" });
    }

    const token = `${email}-${uuidv4()}`;

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
    const response = await verifyAccount.verifyAccountSendEmail(email, output)

    return res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;