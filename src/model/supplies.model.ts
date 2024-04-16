import { DB } from "../database/db.config";

export class SuppliesModel {

    static async getByCode(materialCode: number) {
        return await DB("mst_material_supplies")
            .select("*")
            .where("material_code", materialCode)
            .where("is_removed", 0);
    }

    static async getAllByPagination(offset: number, pageSize: number) {
        return await DB('mst_material_supplies')
            .select('*')
            .where('is_removed', 0)
            .offset(offset)
            .limit(pageSize)
    }
}