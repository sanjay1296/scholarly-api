//POST "/schools"
exports.registerSchool = async (req, res) => {
  let { schoolName, city } = req.body;
};

//GET "/schools"
exports.fetchAllSchools = async (req, res) => {
  let { schoolId, uid } = req.params;
  try {
  } catch (error) {}
};

//GET "/schools/:schoolId"
exports.fetchSchool = async (req, res) => {
  let { schoolId, uid } = req.params;
  try {
  } catch (error) {}
};

//PUT "/schools/:schoolId"
exports.updateSchool = async (req, res) => {
  let { schoolId, uid } = req.params;
};

//DEL "/schools/:schoolId"
exports.deleteSchool = async (req, res) => {
  let { schoolId, uid } = req.params;
  try {
  } catch (error) {}
};
