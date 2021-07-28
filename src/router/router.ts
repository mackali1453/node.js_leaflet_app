import postController from "../postController/post";
import {Router} from "express";
const controller = new postController();
const router = Router();

router.all("/leaflet",controller.map);
router.all("/calendar",controller.calendar);
router.all("/login",controller.login);



export default router;