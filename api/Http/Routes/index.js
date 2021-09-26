const express = require("express");
const router = express.Router();

router.use(require("../Middleware/LanguageMiddleware"));

router.use(require("./UserRoutes.js"));

module.exports = router;
