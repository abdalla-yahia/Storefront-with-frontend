import * as userControl from '../../controllers/users.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router();

router
	.route("/user")
	.post(userControl.default.CreateNewUser)
	.get(AuthanticateMiddleware, userControl.default.GetAllUsers)
	
router
	.route("/user/:id")
	.get(AuthanticateMiddleware, userControl.default.GeteUser)
	.post(AuthanticateMiddleware, userControl.default.UpdateUser)

router
	.route("/user/del/0").post(AuthanticateMiddleware,userControl.default.DeleteAllUser);
router
	.route("/user/del/:id").post(AuthanticateMiddleware, userControl.default.DeleteUser);
	

router.post("/login", userControl.default.AuthanticateUser);

export default router;
