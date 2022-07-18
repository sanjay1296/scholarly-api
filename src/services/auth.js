//POST "/auth/login"
exports.login = async (req, res) => {
  try {
  } catch (error) {}
};

//POST "/auth/logout"
exports.logout = async (req, res) => {
  try {
  } catch (error) {}
};

//POST "/admin"
exports.registerAdmin = async (req, res) => {
  let { username, password, firstName, lastName, phoneNumber } = req.body;
};

//GET "/admin"
exports.fetchAdmin = async (req, res) => {
  let uid = req.params.uid;
};
