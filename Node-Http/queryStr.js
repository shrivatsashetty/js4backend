/* start the program by running the follwing command: 
 * node --watch <filename>.js
 * then visit the following URL from your web browser:
 * http://127.0.0.1:49517/products?category=electronics&sort=price&page=2 */

import http from "http";

import {URL} from "url";

import querystring from "querystring";

const PORT_NUMBER = 49517;

const server = http.createServer((req, res) => {

    const reqUrl = req.url;
    const baseUrl = "http://" + req.headers.host + "/";
    const parsedUrl = new URL(req.url, baseUrl);
    const searchParams = parsedUrl.searchParams;

    const params = Object.fromEntries(parsedUrl.searchParams);

    /* a JavaScript object */
    const queryObj = {
        name: 'John Doe',
        age: 30,
        interests: ['programming', 'music'],
    };

    /* converting an object to query string */
    const querystr = querystring.stringify(queryObj);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        host: req.headers.host,
        baseUrl,
        reqUrl,
        parsedUrl,
        searchParams,
        querystr,
    }, null, 2));
});

server.listen(PORT_NUMBER, () => {
        console.log(`Server running at http://127.0.0.1:${PORT_NUMBER}/`);
    }
);