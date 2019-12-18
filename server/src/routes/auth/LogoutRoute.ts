import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get("/api/logout", (req: Request, res: Response) => {
    req.logout();
    return res.json({ msg: "User Logged Out" });
});

export default router;