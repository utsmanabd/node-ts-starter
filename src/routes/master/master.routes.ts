import express from 'express';
import { TestController } from '../../controller/master/TestController';
import { SuppliesController } from '../../controller/master/SuppliesController';

export const masterRouter = express.Router();

masterRouter.get('/test', TestController.getTestApi)

masterRouter.get('/material/pagination', SuppliesController.getMaterialPagination)
masterRouter.get('/material/:code', SuppliesController.getMaterialByCode)


