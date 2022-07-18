const router = require("express").Router({ mergeParams: true });
const controllers = require("../controllers");

router.use("/admin", controllers.admin);

router.use("/schools", controllers.schools);

router.use("/professors", controllers.professors);

router.use("/users", controllers.users);

module.exports = router;
