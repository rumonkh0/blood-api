const express = require('express')
const dotenv = require('dotenv');


// Load env vars
dotenv.config({ path: './config/config.env' });


const app = express();

// Body parser
app.use(express.json());

app.get('/', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  })



const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );