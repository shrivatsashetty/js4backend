/* run the below server and then visit the URL:
 * http://localhost:49519/
 * http://localhost:49519/todos */

import http from "http";

import {URL} from "url";

const PORT = 49519;

// In-memory data store (for demonstration)
let todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build an API', completed: false }
];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    const objParsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = objParsedUrl.pathname;

    // Set CORS headers (for development)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      // Handle preflight requests
    if (method === 'OPTIONS') {
        /* status code 204 indicates that the server
         * has successfully fullfilled the request,
         * but there's nothing to send */
        res.writeHead(204);
        res.end();
        return;
    }



    // handle GET /todos
    if (method === "GET") {
        if (pathname === "/todos") {
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify(todos));
        }
        // else if (pathname === "") {
        //         res.writeHead(200, {"content-type": "text/html"});
        //         res.end("<h1>Namaste Bharath</h1>");
        // }
    }


});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});