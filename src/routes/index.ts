import { Router } from "express";
const router = Router();
import * as pageController from "../controllers/pageController.js";
import * as searchController from "../controllers/searchController.js";

//Rotas 
router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.home);


export default router;