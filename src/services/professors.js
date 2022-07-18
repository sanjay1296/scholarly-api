//POST "/users"
exports.registerProfessor = async (req, res) => {
  let { schoolId } = req.params.schoolId;
  let { username, password, firstName, lastName, phoneNumber } = req;
  req.body;
};

//GET "/users"
exports.fetchAllProfessors = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;
  try {
  } catch (error) {}
};

//GET "/users/:uid"
exports.fetchProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;

  try {
  } catch (error) {}
};

//PUT "/users/:uid"
exports.updateProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;
};

//DEL "/users/:uid"
exports.deleteProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;

  try {
  } catch (error) {}
};
