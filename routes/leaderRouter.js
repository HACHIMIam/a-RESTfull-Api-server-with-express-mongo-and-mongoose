var express = require('express')
var bodyParser = require('body-parser');
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send all the leaders to you') //the body of the message a html page 

    })
    .post(function(req, res, next) {
        res.end('Will add the leader : ' + req.body.name + 'with details : ' + req.body.description);

    })
    .delete(function(req, res, next) {
        res.end('Deleting all leaders ');

    })
leaderRouter.route('/:leaderId')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })
    .get(function(req, res, next) {
        res.end('Will send details of  the leader  ' + req.params.leaderId + ' to you')

    })
    .put(function(req, res, next) {
        res.write('updating the leader: ' + req.params.leaderId + '\n');
        res.end('will update the leader : ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function(req, res, next) {
        res.end('Deleting the leader ' + req.params.leaderId);

    });
module.exports = leaderRouter;