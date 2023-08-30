import { Request, Response } from 'express'

module.exports = (app: any) => {
    const save = (req: Request, res: Response) => {
        res.send('user save')
    }

    return { save }
}