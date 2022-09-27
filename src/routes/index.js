const router = require("express").Router({ mergeParams: true });
const controllers = require("../controllers");
const { requiresAuth } = require("express-openid-connect");
const { localize } = require("./../middlewares");

router.use(localize);

// router.use("/auth",  controllers.auth);

router.use("/schools", controllers.schools);

router.use("/professors", controllers.professors);

router.use("/students", controllers.students);

module.exports = router;
