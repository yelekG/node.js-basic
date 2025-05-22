import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.end("all authors"));
authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`Author ID: ${authorId}`);
});

export default authorRouter;