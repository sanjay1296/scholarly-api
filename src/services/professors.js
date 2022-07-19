//POST "/professors"
exports.registerProfessor = async (req, res) => {
  let { schoolId } = req.params.schoolId;
  try {
    let professorId = getUuid();
    let professorData = {
      professorId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber || "",
      createdAt: Date.now(),
      schoolId,
      students: [],
    };
    let result = await db.putItem("professors", professorData);
    return res.status(200).send({
      message: "Successfully created a new professor",
      schoolId,
      result,
    });
  } catch (error) {
    console.log("Failed to register professor: ", error.message);
    return res.status(400).send({
      message: "Failed to register professor",
      error: error.message,
    });
  }
};

//GET "/professors"
exports.fetchAllProfessors = async (req, res) => {
  try {
    let professors = await db.queryTable("professors");
    return res.status(200).send(professors);
  } catch (error) {
    console.log("Failed to fetch all professors: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch all professors",
      professors: [],
      error: error.message,
    });
  }
};

//GET "/professors/:uid/start/:sortBy"
exports.fetchProfessor = async (req, res) => {
  try {
    let { professorId, sortBy } = req.params;
    console.log("Fetching professor data for: ", username);
    const params = {
      TableName: "professors",
      Key: {
        professorId,
        username: sortBy,
      },
    };
    let professorData = await db.getItem(params);
    return res.status(200).send(professorData);
  } catch (error) {
    console.log("Failed to fetch professor: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch professor",
      error: error.message,
    });
  }
};

//PUT "/professors/:uid"
exports.updateProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;
};

//DEL "/professors/:uid"
exports.deleteProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;

  try {
  } catch (error) {}
};
