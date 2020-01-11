import { Router, Request, Response } from 'express';
import FindUser from '../../database/user/findUsers';

const findUser: FindUser = new FindUser();

const router: Router = Router()
router.get('/api/verifyAccount/:token', async (req: Request, res: Response) => {
    const token = req.params.token;

    try {
        const response = await findUser.findUserByTokenAndVerifyAccount(token);
        return res.json(response)
    } catch (err) {
        console.error(err.message)
    }
})
export default router