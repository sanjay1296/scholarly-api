const router = require("express").Router({ mergeParams: true });
const services = require("../services/users");
const {createTable} = require("../utils").dynamo

//POST "/users"
const registerUser = async (req, res) => {
  let { username, password, firstName, lastName, phoneNumber, schoolId } = req.body;


};

//GET "/users"
const fetchUsers = async (req, res) => {
  let uid = req.params.uid;
  let userType = req.query.userType;
  try {
  } catch (error) {}
};

//GET "/users/:uid"
const fetchUser = async (req, res) => {
  let uid = req.params.uid;
  try {
  } catch (error) {}
};

//PUT "/users/:uid"

const updateUser = async (req, res) => {
  let uid = req.params.uid;
};

//DEL "/users/:uid"
const deleteUser = async (req, res) => {
  let uid = req.params.uid;
  try {
  } catch (error) {}
};

module.exports = router;
