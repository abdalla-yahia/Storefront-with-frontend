import { Router} from "express";
import * as orpro from '../../controllers/orderProducts.controllers';
import AuthanticateMiddleware from "../../middlewares/Auth.midlwares";

const router = Router();

router.route("/orpro")
    .post(orpro.default.CreateOrderProducts)
    .get(orpro.default.GetAllOrderProducts);
    
router.route('/orpro/:id')
    .get(orpro.default.GetOrderProducts)



router.route("/orpro/del/0")
    .post( orpro.default.DeleteAllOrderProducts)

router.route('/orpro/del/:id')
    .post(AuthanticateMiddleware, orpro.default.DeleteOrderProducts)
        
export default router;