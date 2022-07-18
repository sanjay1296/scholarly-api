const router = require("express").Router({ mergeParams: true });
const { users } = require("../services");

router.get("/schools/:schoolId/users", users.fetchAllUsers);

router.get("/schools/:schoolId/users/:uid", users.fetchUser);

router.put("/schools/:schoolId/users/:uid", users.updateUser);

router.delete("/schools/:schoolId/users/:uid", users.deleteUser);

module.exports = router;
