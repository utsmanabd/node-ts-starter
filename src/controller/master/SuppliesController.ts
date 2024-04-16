import { Request, Response } from "express"
import { Common } from "../../tools/common"
import { SuppliesModel as model }  from "../../model/supplies.model"
const api = new Common()

export class SuppliesController {

    static async getMaterialByCode(req: Request, res: Response) {
        try {
            console.log('321');
            let data = await model.getByCode(+req.params.code)
            return api.ok(res, data)
        } catch (err: any) {
            return api.catchError(res, err)
        }
    }

    static async getMaterialPagination(req: Request, res: Response) {
        try {
            console.log('123');
            
            const page = parseInt(req.query.page as string) || 1;
            const pageSize = parseInt(req.query.pageSize as string) || 25;
            const offset = (page - 1) * pageSize;
            const data = await model.getAllByPagination(offset, pageSize)
            return api.ok(res, data)
        } catch (err: any) {
            return api.catchError(res, err)
        }
    }
}