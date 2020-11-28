const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
console.log("Meena - within /routes/api/index.js: bookRoutes: ", bookRoutes);

module.exports = router;
