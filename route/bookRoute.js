
import express from "express"
import bookController from "../controller/bookController.js";

const router = express.Router();

router.post("/add",bookController.addBook);
router.get("/all",bookController.getAllBook);
router.get("/:id",bookController.bookById);
router.patch("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);

export default router;