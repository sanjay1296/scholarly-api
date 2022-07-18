const { db } = require("../utils");

//POST "/users"
exports.registerUser = async (req, res) => {
  let { username, password, firstName, lastName, phoneNumber, schoolId } =
    req.body;

};

//GET "/users"
exports.fetchAllUsers = async (req, res) => {
  let uid = req.params.uid;
  let userType = req.query.userType;
  try {
  } catch (error) {}
};

//GET "/users/:uid"
exports.fetchUser = async (req, res) => {
  let uid = req.params.uid;
  try {
  } catch (error) {}
};

//PUT "/users/:uid"

exports.updateUser = async (req, res) => {
  let uid = req.params.uid;
};

//DEL "/users/:uid"
exports.deleteUser = async (req, res) => {
  let uid = req.params.uid;
  try {
  } catch (error) {}
};
