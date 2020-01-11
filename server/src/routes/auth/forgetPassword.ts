import { Router, Request, Response } from 'express';
import FindUser from '../../database/user/findUsers';
import ForgetPassword from '../../services/email/forgetPasswordSendEmail';

const router: Router = Router();

router.post("/api/forgetPassword", async (req: Request, res: Response) => {
  const { email } = req.body;

  const findUser = new FindUser();

  try {
    const user: any = await findUser.findUserByEmail(email);

    if (!user) {
      return res.json({ msg: false });
    } else {

      // SEND EMAIL
      const output = `<ul>
      <li>User Token = Welcome ${user.username}</li>
      <p><a href='http://localhost:3000/resetPassword/${user.token}'>click here</a> for verify your account  </p>
      </ul>`;

      const forgetPassword: ForgetPassword = new ForgetPassword();

      const response = forgetPassword.forgetPasswordSendEmail(email, output);

      if (!response) {
        return res.json({ msg: false });
      }
      return res.json({ msg: true });


    }
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
