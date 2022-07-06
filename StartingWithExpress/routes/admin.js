const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(
        '<form action="/product" method ="POST"><input type = "text" name = "title"><button button type = "submit" > Add product</button > </form > '
    );
});

// executes only for a post request
router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');

})

module.exports = router;