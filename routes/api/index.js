const router = require("express").Router();
const bookRoutes = require("./books");
const apiKeyRoute= require("./apikey");

// Book routes
router.use("/books", bookRoutes);

// API route
router.use("/get_apikey", apiKeyRoute);

module.exports = router;
