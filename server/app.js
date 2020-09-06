// const path = require("path");
const express = require("express");
const request = require('request');
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// app.use("/api/posts", postsRoutes);
// app.use("/api/user", userRoutes);

app.get('/stock/:ticker', (req, res, next) => {
  const APIKey = '7bddb22f28d4688052e6f6f0191a60d9ae193973';
  request(
    { url: `https://api.tiingo.com/tiingo/daily/${req.params.ticker}/prices?token=${APIKey}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.status(200).json(JSON.parse(body));
    }
  )
});

module.exports = app;
