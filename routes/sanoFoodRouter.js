const express = require('express');
const sanoFoodRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all food menu and locations to you');
})
.post((req, res) => {
    res.end(`Will add food menu items or restaurant locations: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update food menu items or restaurant locations: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting any food menu item');
});

module.exports = sanoFoodRouter;