const router = require("express").Router({ mergeParams: true });
const { auth } = require("../services");

router.post("/login", auth.login);

router.post("/admin", auth.registerAdmin);

router.get("/admin/:uid", auth.fetchAdmin);

router.post("/logout", auth.logout);

module.exports = router;
