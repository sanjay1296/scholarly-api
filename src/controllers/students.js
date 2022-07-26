const router = require("express").Router({ mergeParams: true });
const { students } = require("../services");

router.post("/school/:schoolId", students.createStudent);

router.get("/school/:schoolId", students.fetchAllStudents);

router.get(
  "/school/:schoolId/student/:uid/start/:sortBy",
  students.fetchStudent
);

router.put("/school/:schoolId/student/:uid", students.updateStudent);

router.delete("/school/:schoolId/student/:uid", students.deleteStudent);

module.exports = router;
