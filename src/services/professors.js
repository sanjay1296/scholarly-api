//POST "/users"
const registerProfessor = async (req, res) => {
  let { schoolId } = req.params.schoolId;
  let { username, password, firstName, lastName, phoneNumber } = req;
  req.body;
};

//GET "/users"
const fetchProfessors = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;
  try {
  } catch (error) {}
};

//GET "/users/:uid"
const fetchProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;

  try {
  } catch (error) {}
};

//PUT "/users/:uid"

const updateProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;
};

//DEL "/users/:uid"
const deleteProfessor = async (req, res) => {
  let { schoolId, uid } = req.params.schoolId;

  try {
  } catch (error) {}
};
