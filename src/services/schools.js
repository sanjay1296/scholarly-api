const { db } = require("../utils");
var { v4: getUuid } = require("node-uuid");

//POST "/schools"
var { v4: getUuid } = require("node-uuid");

exports.registerSchool = async (req, res) => {
  try {
    let schoolId = getUuid();
    let principalId = getUuid();
    let schoolData = {
      schoolId,
      schoolName: req.body.schoolName,
      schoolSize: req.body.schoolSize || 100,
      address: req.body.address || "",
      city: req.body.city || "",
      postcode: req.body.postcode || "",
      principalId,
      createdAt: Date.now(),
    };

    let userData = {
      uid: principalId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber || "",
      password: req.body.password,
      createdAt: Date.now(),
      schoolId,
      userType: "principal",
    };
    let schoolResponse = await db.putItem("Schools", schoolData);
    console.log("Successfully create a new school", schoolResponse);
    let principalResponse = await db.putItem("Users", userData);
    console.log(
      "Successfully create a new principal for the school",
      principalResponse
    );

    return res.status(200).send({
      message: "Successfully created a new school",
      schoolId,
      principalId,
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
    let schools = await db.queryTable("Schools");
    if (!schools || schools.length === 0) throw new Error("No schools found");
    console.log(`Successfully fetched ${schools.length} schools`);
    return res.status(200).send(schools);
  } catch (error) {
    console.log("Failed to fetch all schools data: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch all schools data",
      schools: [],
      error: error.message,
    });
  }
};

exports.fetchCounts = async (req, res) => {
  try {
    let staffsCount = 0,
      studentsCount = 0,
      schoolsCount = 0,
      coursesCount = 0;
    let schools = await db.queryTable("Schools");
    schoolsCount = schools.length;
    let users = await db.queryTable("Users");
    if (users.length > 0) {
      staffsCount = users.filter((user) => user.userType === "staff").length;
      studentsCount = users.filter(
        (user) => user.userType === "student"
      ).length;
    }
    console.log(
      `Successfully fetched ${schoolsCount} schools; ${staffsCount} staffs; ${studentsCount} students`
    );
    return res
      .status(200)
      .send({ schoolsCount, staffsCount, studentsCount, coursesCount });
  } catch (error) {
    console.log("Failed to fetch all schools data: ", error.message);
    return res.status(400).send({
      message: "Failed to fetch all schools data",
      count: 0,
      error: error.message,
    });
  }
};
//GET "/schools/:schoolId/start/:sortBy"
exports.fetchSchool = async (req, res) => {
  try {
    let { schoolId, sortBy } = req.params;
    console.log("Fetching school: ", sortBy);
    const params = {
      TableName: "Schools",
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
