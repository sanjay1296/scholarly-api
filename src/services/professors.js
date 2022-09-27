var { v4: getUuid } = require("node-uuid");
const { db } = require("../utils");
const { ddbDocClient, documentClient } = require("../libs").aws;
//POST "/professors"
exports.createProfessor = async (req, res) => {
  let { schoolId } = req.params.schoolId;
  try {
    let uid = getUuid();
    let professorData = {
      uid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber || "",
      createdAt: Date.now(),
      schoolId,
      userType: "staff",
    };
    let result = await db.putItem("Users", professorData);
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
    let schoolId = req.params.schoolId;
    var params = {
      TableName: "Users",
      IndexName: "schoolId",
      KeyConditionExpression: "#sid = :ss",

      ExpressionAttributeNames: {
        "#sid": "schoolId",
      },
      ExpressionAttributeValues: {
        ":ss": schoolId,
      },
    };
    let professors = await documentClient.query(params).promise();
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
    let { uid, sortBy, schoolId } = req.params;
    console.log("Fetching professor data for: ", email);
    const params = {
      TableName: "Users",
      Key: {
        uid,
        email: sortBy,
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
