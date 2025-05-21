import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.end("all authors"));
authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`Author ID: ${authorId}`);
});

export default authorRouter;