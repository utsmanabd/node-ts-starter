import { Response } from "express";

export class Common {
    
    public ok(res: Response, data: any) {
        return res.json({
            status: true,
            data: data
        })
    }
    
    public error(res: Response, message: string, code: number) {
    
        return res.status(code).json({
            status: false,
            data: {
                message: message
            }
        });
    }
    
    public catchError(res: Response, err: Error) {
        console.error(err);
        return this.error(res, `${err.name}: ${err.message}`, 500)
    }
}