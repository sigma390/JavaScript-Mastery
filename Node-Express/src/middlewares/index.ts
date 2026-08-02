import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
export const auth = (req: Request, res: Response, next: NextFunction) => {



    const token = req.headers?.authorization?.split(" ")[1]
    if (token) {
        const decoded = jwt.verify(token, "SECRET")
    }

    req.user = decoded;
    next()


}