const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/dishes', dishRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
