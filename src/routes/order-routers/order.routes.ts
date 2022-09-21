import * as orderControl from '../../controllers/order.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router()


router.route('/order')
    .get(AuthanticateMiddleware, orderControl.default.GetAllOrders)
    .post(AuthanticateMiddleware, orderControl.default.CreateOrder);

router.route('/order/0')
    .post(AuthanticateMiddleware,orderControl.default.DeleteOrder);
    
router.route('/order/:id')
    .get(orderControl.default.GetOrderOfUser)
    .post(AuthanticateMiddleware, orderControl.default.UpdateSpecificOrder);

    router.route('/order/del/:id')
    .post(AuthanticateMiddleware,orderControl.default.DeleteSpecificOrder)


export default router;