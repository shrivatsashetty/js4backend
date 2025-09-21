import http from "http";

import {URL} from "url";

// In-memory data store (for demonstration)
let todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build an API', completed: false }
];

