const router = require("express").Router({ mergeParams: true });
const { schools } = require("../services");

router.post("/", schools.registerSchool);

router.get("/", schools.fetchAllSchools);

router.get("/count", schools.fetchCounts);

router.get("/:schoolId/start/:sortBy", schools.fetchSchool);

router.put("/:schoolId", schools.updateSchool);

router.delete("/:schoolId", schools.deleteSchool);

module.exports = router;
