const router = require("express").Router();
const contacts = require("./contacts");
const base = require("./baseRoute");
// Set default API response
router.use(contacts.basePath, contacts.router);

router.use("/", base);

// Export API routes
module.exports = router;
