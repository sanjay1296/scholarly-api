const router = require("express").Router({ mergeParams: true });
const { students } = require("../services");

router.get("/schools/:schoolId/students", students.fetchAllStudents);

router.get("/schools/:schoolId/students/:uid", students.fetchStudent);

router.put("/schools/:schoolId/students/:uid", students.updateStudent);

router.delete("/schools/:schoolId/students/:uid", students.deleteStudent);

module.exports = router;
