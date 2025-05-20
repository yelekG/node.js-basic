import fs from "fs/promises";
import http from "http";
import path from "path";
import url from "url";

const PORT = 8000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    let filePath;
    if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
    } else if (req.url === "/about") {
       filePath = path.join(__dirname, "public", "about.html");
    } else if (req.url === "/contact-me") {
        filePath = path.join(__dirname, "public", "contact-me.html");
    } else {
        filePath = path.join(__dirname, "public", "404.html");
    }

    fs.readFile(filePath, "utf-8")
        .then((data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        })
        .catch((err) => {
            res.writeHead(500, { "Content-Type": "text/plain"});
            res.end("Server error", err);
        })
})

server.listen(PORT, () => {
    console.log(`Server running at localhost${PORT}`);
})