const router = require("express").Router({ mergeParams: true });
const { schools } = require("../services");

router.post("/schools", schools.registerSchool);

router.get("/schools", schools.fetchAllSchools);

router.get("/schools/:schoolId", schools.fetchSchool);

router.put("/schools/:schoolId", schools.updateSchool);

router.delete("/schools/:schoolId", schools.deleteSchool);

module.exports = router;
