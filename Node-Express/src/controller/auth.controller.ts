
import type { Response, Request, NextFunction } from "express";
import Jwt from "jsonwebtoken";
export const login = (req: Request, res: Response, next: NextFunction) => {


    const { email, pass } = req.body;

    //pass matching 

    try {
        //pass matched
        const isMatched = true;
        if (isMatched) {
            const jwtPayload = {
                id: 1001,
                email,
                role: "user"
            }

            const token = Jwt.sign(jwtPayload, "SECRET", { expiresIn: "1hr" })

            res.json({
                token
            })


        }

    } catch (err) {
        res.json(err)
    }






}


export const Profile = (req: Request, res: Response) => {
    res.json({
        msg: "Ths is Profile data",

    })
}