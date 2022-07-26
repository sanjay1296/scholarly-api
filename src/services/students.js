const { db } = require("../utils");
var { v4: getUuid } = require("node-uuid");

//POST "/users"
exports.createStudent = async (req, res) => {
  try {
    let uid = getUuid();
    let userdata = {
      uid,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber || "",
      schoolId: req.body.schoolId,
      professorId: req.body.professorId,
      createdAt: Date.now(),
      userType: "student",
    };
    let result = await db.putItem("Users", userdata);
    return res.status(200).send({
      message: "Successfully created a new student",
      uid,
      result,
    });
  } catch (error) {
    console.log("Failed to register student: ", error.message);
    return res.status(400).send({
      message: "Failed to register student",
      error: error.message,
    });
  }
};

//GET "/users"
exports.fetchAllStudents = async (req, res) => {
  try {
    let students = await db.queryTable("Users");
    if (!students || students.length === 0)
      throw new Error("No students found");
    return res.status(200).send(students);
  } catch (error) {
    console.log("Failed to fetch all student: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch all student",
      students: [],
      error: error.message,
    });
  }
};

//GET "/users/:uid/start/:sortBy"
exports.fetchStudent = async (req, res) => {
  try {
    let { uid, sortBy } = req.params;
    console.log("Fetching user data: ", uid);
    const params = {
      TableName: "Users",
      Key: {
        uid,
        email: sortBy,
      },
    };
    let userData = await db.getItem(params);
    return res.status(200).send(userData);
  } catch (error) {
    console.log("Failed to fetch user data: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

//PUT "/users/:uid"

exports.updateStudent = async (req, res) => {
  let uid = req.params.uid;
};

//DEL "/users/:uid"
exports.deleteStudent = async (req, res) => {
  let uid = req.params.uid;
  try {
  } catch (error) {}
};
