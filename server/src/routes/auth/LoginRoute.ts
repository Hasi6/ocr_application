import { Router, Response, Request, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import FindUser from '../../database/user/findUserByEmailDB';
import passport from "passport";

const router: Router = Router();


const findUser: FindUser = new FindUser();

router.post("/api/login", async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await findUser.findUserByEmail(email);

    if (!user) {
      return res.json({ msg: "No User" });
    }
    else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ msg: "Password Invalid" });
      }
      else if (!user.verifyAccount) {
        return res.json({ msg: 'verify Account' })
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

export default router;
