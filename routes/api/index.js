const router = require("express").Router();
const coachesRoutes = require("./coaches");

// Book routes
router.use("/coaches", coachesRoutes);

module.exports = router;
