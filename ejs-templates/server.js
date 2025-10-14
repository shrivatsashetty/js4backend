let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    /* res.render is used to render a view template */
    res.render('index', {
        brandName: "Jobspire.com",
        placeholderSearchBox: "Search Jobs...",
        currentPage: "Home",
        dropDownLabel: "Theme",
        themes: ["Light", "Dark", "Default"],
    });
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));