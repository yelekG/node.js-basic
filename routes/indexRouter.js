import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Welcome to the library homepage!");
});

indexRouter.get("/about", (req, res) => {
    res.send("About the library");
});

indexRouter.get("/contact", (req, res) => {
    res.send("Contact us");
});

indexRouter.post("/contact", (req, res) => {
    res.send("Message received!");
});

export default indexRouter