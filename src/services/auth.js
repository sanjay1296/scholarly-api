const router = require("express").Router({ mergeParams: true });
const services = require("../services/auth");

//POST "/auth/login"
const login = async (req, res) => {
  try {
  } catch (error) {}
};

//POST "/auth/logout"
const logout = async (req, res) => {
  try {
  } catch (error) {}
};


//POST "/admin"
const registerAdmin = async (req, res) => {
  let { username, password, firstName, lastName, phoneNumber } = req.body;
};

//GET "/admin"
router.get("/admin", services.fetchAdmin);
const fetchAdmin = async (req, res) => {
  let uid = req.params.uid;
};
module.exports = router;
