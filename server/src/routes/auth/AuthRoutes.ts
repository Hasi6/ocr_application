import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get("/api/current_user", async (req: Request, res: Response) => {

  if (req.user) {
    const { _id, image, username, email }: any = req.user;

    const body = {
      _id,
      image,
      username,
      email
    };

    return res.json({ user: body });
  }
  return res.json({ user: false });
});


export default router;
