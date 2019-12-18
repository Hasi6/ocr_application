import { Router, Response, Request } from 'express'

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    return res.json('Hasi')
});

export default router;