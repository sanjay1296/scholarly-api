const router = require("express").Router({ mergeParams: true });
const controllers = require("../controllers");

router.use("/schools", controllers.schools);

router.use("/professors", controllers.professors);

router.use("/students", controllers.students);

module.exports = router;
