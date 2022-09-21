import { Router } from "express";
import * as control from "../../controllers/products.controllers";
import AuthanticateMiddleware from "../../middlewares/Auth.midlwares";

const router = Router();

router
	.route("/product")
	.post(AuthanticateMiddleware, control.default.CreatProduct)
	.get(AuthanticateMiddleware, control.default.GetAllProducts)

	router
	.route("/product/del/0")
	.post(AuthanticateMiddleware, control.default.DeleteAllProducts);

router
	.route("/product/:id")
	.get(AuthanticateMiddleware, control.default.GetSpecificProduct)
	.post(AuthanticateMiddleware, control.default.UpdateSpecificProducts);

router
	.route("/product/del/:id")
	.post(AuthanticateMiddleware, control.default.DeleteSpecificProduct);

router.get("/product/sort/:category", AuthanticateMiddleware, control.default.SortProducts);


export default router;
