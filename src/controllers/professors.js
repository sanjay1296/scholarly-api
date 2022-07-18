const router = require("express").Router({ mergeParams: true });
const { professors } = require("../services");

router.post("/schools/:schoolId/professors", professors.registerProfessor);

router.get("/schools/:schoolId/professors", professors.fetchAllProfessors);

router.get(
  "/schools/:schoolId/professors/:professorId",
  professors.fetchProfessor
);

router.put(
  "/schools/:schoolId/professors/:professorId",
  professors.updateProfessor
);

router.delete(
  "/schools/:schoolId/professors/:professorId",
  professors.deleteProfessor
);

module.exports = router;
