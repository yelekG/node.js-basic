import fs from "fs/promises";
import http from "http";
import path from "path";
import url from "url";
import express from "express";

const app = express(); 
const PORT = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact-me.html"));
});

app.use((req,res) => {
    res.status(404).sendFile(path.joiin(__dirname, "public", "404.html"));
});

server.listen(PORT, () => {
    console.log(`Server running at localhost${PORT}`);
})