"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Routes
const routes = require("./Http/Routes");

const app = express();

/**
 * Server configuration
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Secure Policy
 */
app.use(cors());
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: "GPAPI" }));
app.use(helmet.ieNoOpen());
app.use(helmet.xssFilter());

app.use(routes);

/**
 * Route not found handler.
 */
app.use(function (req, res, next) {
  const err = new Error("Content not Found");
  err.status = 404;
  err.errors = {
    url: [`Route ${req.originalUrl} not found`],
  };
  next(err);
});

const { getMessage } = require("./resources/locales/utils");

/**
 * Error handler.
 */
app.use(function (err, req, res, next) {
  // Internal errors
  if (!err.status) {
    err.status = 500;
  }
  res.status(err.status || 500);
  res
    .json({
      message: getMessage(err.message, req.lang),
      errors: err.errors || {},
      status: err.status,
      type: err.type || null,
      data: err.data || null,
    })
    .end();
});

const port = process.env.API_PORT || 8081;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on port ${port}`);
});
