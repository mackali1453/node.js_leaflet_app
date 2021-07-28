import postController from "../postController/post";
import {Router} from "express";
const controller = new postController(); //postController class includes functions.
const router = Router(); //Router class allow us to associate our functions which have http methods to different routes.

router.all("/leaflet",controller.map); //routes to leaflet map page
router.all("/calendar",controller.calendar); //routes to calendar page
router.all("/login",controller.login);//routes to login page 



export default router;
