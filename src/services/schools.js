const { db } = require("../utils");
var { v4: getUuid } = require("node-uuid");

//POST "/schools"
exports.registerSchool = async (req, res) => {
  try {
    let schoolId = getUuid();
    let schoolData = {
      schoolId,
      schoolName: req.body.schoolName,
      schoolSize: req.body.schoolSize || 100,
      address: req.body.address || "",
      city: req.body.city || "",
      postcode: req.body.postcode || "",
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber || "",
      createdAt: Date.now(),
      students: [],
      professors: [],
    };
    let result = await db.putItem("schools", schoolData);
    return res.status(200).send({
      message: "Successfully created a new school",
      schoolId,
      result,
    });
  } catch (error) {
    console.log("Failed to register school: ", error.message);
    return res.status(400).send({
      message: "Failed to register school",
      error: error.message,
    });
  }
};

//GET "/schools"
exports.fetchAllSchools = async (req, res) => {
  try {
    let schools = await db.queryTable("schools");
    if (!schools || schools.length === 0) throw new Error("No schools found");
    return res.status(200).send(schools);
  } catch (error) {
    console.log("Failed to fetch all school: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch all school",
      schools: [],
      error: error.message,
    });
  }
};

//GET "/schools/:schoolId/start/:sortBy"
exports.fetchSchool = async (req, res) => {
  try {
    let { schoolId, sortBy } = req.params;
    console.log("Fetching school: ", schoolName);
    const params = {
      TableName: "schools",
      Key: {
        schoolId,
        schoolName: sortBy,
      },
    };
    let schoolData = await db.getItem(params);
    return res.status(200).send(schoolData);
  } catch (error) {
    console.log("Failed to fetch school: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch school",
      error: error.message,
    });
  }
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
