/* run the below server and then visit the URL:
 * http://localhost:49519/
 * http://localhost:49519/todos 
 * */

import http from "http";

import {URL} from "url";

const PORT = 49519;

// In-memory data store (for demonstration)
let todos = [
    { id: 1, task: 'Learn Node.js', completed: true },
    { id: 2, task: 'Build an HTTP Server', completed: false }
];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    /* creating an URL object */
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

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

        res.writeHead(200, {"content-type": "application/json"});

        if (pathname === "/todos") {
            res.end(JSON.stringify(todos));
        }
        else if (pathname === "/") {
            /* setting a response for default GET request */
            res.end(JSON.stringify({pathname}));
        }
    }
    // handling POST request
    else if (method === "POST" && pathname === '/todos') {
        let body = "";
        // request.on() method allows us to add event handler to the request object
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });

        req.on(
            "end",
            () => {
                try {
                    let newTodo = JSON.parse(body);
                    newTodo.id = todos.length + 1;
                    todos.push(newTodo);
                    res.writeHead(201, {"content-type": "application/json"});
                    res.end(JSON.stringify(newTodo));
                } 
                catch (err) {
                    res.writeHead(400, {"content-type": "application/json"});
                    res.end(JSON.stringify({error: "Invalid JSON"}));
                }
            }
        );
    }
    // route: PUT /todos/:id
    else if (method === "PUT" && pathname.startsWith("/todos/")) {
        const id = parseInt(pathname.split('/')[2]);

        let body = "";

        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        });


        req.on("end", () => {
            try {

                const updatedToDo = JSON.parse(body);
                const index = todos.findIndex(todo => todo.id == id);
    
                if (index === -1) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Todo not found' }));
                }
                else {
                    todos[index] = {...todos[index], ...updatedToDo} // merging objects using spread operator
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(todos[index]));
                }
            } 
            catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }

        });
    }
    // Route: DELETE /todos/:id
    else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
        const id = parseInt(pathname.split('/')[2]);
        const index = todos.findIndex(todo => todo.id === id);

        if (index === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Todo not found' }));
        } else {
            todos = todos.filter(todo => todo.id !== id);
            res.writeHead(204); // request successfully fullfilled but nothing to return 
            res.end();
        }
    }
    // 404 Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }


});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


/* curl commands:

for GET:
curl http://localhost:49519/todos

for POST:
curl -X POST http://localhost:49519/todos \
-H "Content-Type: application/json" \
-d '{"task":"Learn Express.Js","completed":false}'

for PUT:
curl -X PUT http://localhost:49519/todos/2 \
-H "Content-Type: application/json" \
-d '{ "task": "Build a REST API" }'

for DELETE:
curl -X DELETE http://localhost:49519/todos/2
*/
