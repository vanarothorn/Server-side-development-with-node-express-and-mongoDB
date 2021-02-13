const express = require('express');
const bodyParser = require('body-parser');

const dishID = express.Router();

dishID.use(bodyParser.json());

dishID
  .route('/dish/dishID')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })

  .get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
  })

  .post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/' + req.params.dishId);
  })

  .put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end(
      'Will update the dish: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })

  .delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
  });

module.exports = dishID;
