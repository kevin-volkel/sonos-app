//! Express Setup
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

//! Next App
const next = require('next')

//! create a check for development vs production
const dev = process.env.NODE_ENV !== 'production';

//! there are giant error warnings that pop up when in development
const nextApp = next({ dev });

//! this is a built-in next router that will handle all requests made to the server
const handler = nextApp.getRequestHandler();


nextApp.prepare().then(() => {
  app.all('*', (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});