//Module 2 - Note Model routes
import express from "express";

const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;