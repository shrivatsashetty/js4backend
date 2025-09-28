/* start the program by running the follwing command: 
 * node --watch <filename>.js
 * then visit the following URL from your web browser:
 * http://127.0.0.1:49515/products?category=electronics&sort=price&page=2 */


import http from "http";
import {URL} from "url"

/* define the port no and ip address of the host machine in which the server will run*/
const PORT_NUMBER = 49515;
const IP_ADDRESS = "127.0.0.1";

const server = http.createServer(
	(req, res) => {
		
		// Get specific headers (case-insensitive)
		const userAgent = req.headers['user-agent'];
		const acceptLanguage = req.headers['accept-language'];
		const host = req.headers.host; // returns a combo of the host IP and port no i.e a socket

		// /* using object destructuring */
		// const {url, method} = req;

		/* creating a URL object */
		const baseUrl = `http://${host}`
		const objParsedUrl = new URL(req.url, baseUrl);

		// Get different parts of the URL
		const fullUrl = objParsedUrl.href; // returns the full request URL
		const protocol = objParsedUrl.protocol; // http or https
		const pathName = objParsedUrl.pathname; // The path without query string
		const searchParams = objParsedUrl.searchParams;
		const query = objParsedUrl.query; // The query string as an object

		
		// set the response HTTP header with HTTP status and content-type
		res.writeHead(200, {
			'Content-Type': 'application/json',
			'X-Powered-By': 'Node.js',
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			'Set-Cookie': 'sessionid=abc123; HttpOnly' // to set cookie
		});

		// send the response and end the connection 9 
		res.end(
			JSON.stringify(
				{	
					fullUrl,
					protocol,
					searchParams,
					reqUrl: req.url,
					host,
					userAgent,
					acceptLanguage,
					httpMethod: req.method,
					// objParsedUrl,
					pathName,
					query,
				}, null, 2
			)
		);
	}
);


/* start the server and make it listen in the specified port */
server.listen(
	PORT_NUMBER,
	IP_ADDRESS,
	/* the below function will be exeuted once the server starts listening */
	() => {
		console.log(`Server running at http://${IP_ADDRESS}:${PORT_NUMBER}/`);
	}
);

