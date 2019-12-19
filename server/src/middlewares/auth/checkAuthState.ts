import { Request, Response, NextFunction } from 'express';

const checkAuthState = async (req: Request, res: Response, next: NextFunction) => {

    try {
        if (!req.user) {
            return res.json({ auth: false })
        }
        next()
    } catch (err) {
        console.error(err.message)
    }

}

export default checkAuthState;