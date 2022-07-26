const router = require("express").Router({ mergeParams: true });
const { professors } = require("../services");

router.post("/school/:schoolId", professors.createProfessor);

router.get("/school/:schoolId", professors.fetchAllProfessors);

router.get(
  "/school/:schoolId/professor/:professorId/start/:sortBy",
  professors.fetchProfessor
);

router.put(
  "/school/:schoolId/professor/:professorId",
  professors.updateProfessor
);

router.delete(
  "/school/:schoolId/professor/:professorId",
  professors.deleteProfessor
);

module.exports = router;
