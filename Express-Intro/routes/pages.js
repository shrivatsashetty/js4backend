const express = require("express");
const router = express.Router();

/* serving a static file
 * http://localhost:3000/pages */
// define the home page route
router.get("/", (req, res) => {
    res.sendFile(
        'templates/home.html', // path of the static file to send
        {root: `${__dirname}/../`} // path of root directory relative to current directory
    );
});

// define the about route
/* serving a static file 
 * http://localhost:3000/pages/profile */
router.get("/profile", (req, res) => {
    res.sendFile(
        'templates/profile.html', 
        {root: `${__dirname}/../`}
    );
});
module.exports = router;
