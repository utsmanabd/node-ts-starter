import { Request, Response } from "express"
import { Common } from "../../tools/common"
const api = new Common()

export class TestController {
        
    static getTestApi (req: Request, res: Response) {
        try {
            let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            return api.ok(res, data)
        } catch (err: any) {
            return api.catchError(res, err)
        }
    }

}