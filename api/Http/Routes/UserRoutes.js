"use strict";
const express = require("express");
const router = express.Router();
const PREFIX = "/users";
const Controller = "UserController";
const { controller, request } = require("./Resolver");

router.post(
  `${PREFIX}`,
  request("Users/CreateRequest"),
  controller(Controller, "create")
);

router.post(
  `${PREFIX}/login`,
  request("Users/LoginRequest"),
  controller(Controller, "login")
);

module.exports = router;
