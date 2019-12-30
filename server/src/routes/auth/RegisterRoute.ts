import uuidv4 from 'uuid/v4';
import FindUser from '../../database/user/findUsers';
import { Router, Request, Response } from 'express';
import VerifyAccount from '../../services/email/verifyUserAccount';
import SaveUserDB from '../../database/user/saveUserToDB';



const router: Router = Router();
const findUser: FindUser = new FindUser();
const saveUserDB: SaveUserDB = new SaveUserDB();

router.post("/api/register", async (req: Request, res: Response) => {
  const { username, email, password, image } = req.body;

  const verifyAccount: VerifyAccount = new VerifyAccount();

  try {
    const user = await findUser.findUserByEmail(email);

    if (user) {
      return res.json({ msg: "registered" });
    }

    const token = `${email}-${uuidv4()}`;

    const newUser = {
      username,
      email,
      password,
      image,
      token
    };

    await saveUserDB.saveUser(newUser);

    // SEND EMAIL
    const output = `<ul>
                      <li>User Token = Welcome ${username}</li>
                      <p><a href='http://localhost:8080/verify/${token}'>click here</a> for verify your account  </p>
                  </ul>`;
    const response = await verifyAccount.verifyAccountSendEmail(email, output)

    return res.json({ msg: "user registered successfully" });
  } catch (err) {
    console.error(err.message);
  }
});

export default router;