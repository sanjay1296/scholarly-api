const { ddbClient, ddbDocClient } = require("./../src/libs").aws;
var { v4: getUuid } = require("node-uuid");

const {
  CreateTableCommand,
  BatchGetItemCommand,
} = require("@aws-sdk/client-dynamodb");
const {
  GetCommand,
  PutCommand,
  QueryCommand,
} = require("@aws-sdk/lib-dynamodb");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient({
  // optional tuning - 50% faster(cold) / 20% faster(hot)
  region: "us-east-1",
  apiVersion: "2012-08-10",
  sslEnabled: false,
  paramValidation: false,
  convertResponseTypes: false,
});
let {
  userParams,
  schoolParams,
  professorParams,
  courseParams,
} = require("./../src/models");

const createTable = async (params) => {
  try {
    console.log(`"Fetching Params ${JSON.stringify(params)}`);
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
let schoolData = {
  schoolId: getUuid(),
  schoolName: "St.Claire",
  schoolSize: 100,
  address: "28 Price's Ave.",
  city: "New York",
  postcode: "1234",
  firstName: "John",
  lastName: "Davy",
  phoneNumber: "+1212121212",
  students: [],
  professors: [],
};
let schoolData2 = {
  schoolId: getUuid(),
  schoolName: "St.John",
  schoolSize: 100,
  address: "38 Church street",
  city: "New York",
  postcode: "1234",
  firstName: "Sam",
  lastName: "Jackson",
  phoneNumber: "+1212121212",
  students: [],
  professors: [],
};
let professorData = {
  professorId: getUuid(),
  email: "sampleprofessor@mail.com",
  username: "mathew21",
  firstName: "Mathew",
  lastName: "Henry",
  phoneNumber: "+91212121212",
  schoolId: "b102e3b3-e07a-4556-9f77-a46e89ec1869",
  students: [],
};

let professorData2 = {
  professorId: getUuid(),
  email: "sampleprofessor2@mail.com",
  username: "joey98",
  firstName: "Joey",
  lastName: "J",
  phoneNumber: "+91212121212",
  schoolId: "663dd278-c99f-4380-95ad-becacc1202a0",
  students: [],
};
let superAdminData = {
  uid: getUuid(),
  email: "samplestudent@mail.com",
  password: "password",
  firstName: "Super",
  lastName: "Admin",
  phoneNumber: "+91212121212",
};
let userData = {
  uid: getUuid(),
  email: "samplestudent@mail.com",
  username: "john100",
  firstName: "John",
  lastName: "Davy",
  phoneNumber: "+91212121212",
  schoolId: "b61716ea-4626-485b-9e5b-003b8dceb5c2",
  professorId: "3932b105-5d07-40a0-985b-6cd9830f7689",
};

const putItem = async (tableName, data) => {
  // Set the parameters.
  const params = {
    TableName: tableName,
    Item: data,
  };
  try {
    console.log(params);
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const getItem = async (tableName, id) => {
  try {
    const params = {
      TableName: "users",
      Key: {
        uid: "f810c1fd-e039-4523-b778-9ffcd3cdde96",
        username: "sanjay96",
      },
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
    return data.Item;
  } catch (err) {
    console.log("Error", err.message);
  }
};
const queryTable = async (tableName) => {
  const params = {
    ExpressionAttributeNames: { "#r": "rank", "#y": "year" },
    ProjectionExpression: "#r, #y, title",
    TableName: tableName,
    UpdateExpression: "set #r = :r, title = :t, #y = :y",
    ExpressionAttributeValues: {
      ":t": existingMovieName,
      ":y": existingMovieYear,
      ":r": newMovieRank,
    },
    KeyConditionExpression: "title = :t and #y = :y",
    FilterExpression: "info.#r = :r",
  };

  console.log("Querying table...");
  const data = await ddbDocClient.send(new QueryCommand(params));
  // Loop through and parse the response.
  for (let i = 0; i < data.Items.length; i++) {
    console.log(
      "Query successful. Items with rank of " +
        newMovieRank +
        " include\n" +
        "Year = " +
        data.Items[i].year +
        " Title = " +
        data.Items[i].title
    );
  }
};
const updateTable = async () => {
  try {
    const params = {
      ExpressionAttributeNames: { "#r": "rank", "#y": "year" },
      ProjectionExpression: "#r, #y, title",
      TableName: tableName,
      UpdateExpression: "set #r = :r, title = :t, #y = :y",
      ExpressionAttributeValues: {
        ":t": existingMovieName,
        ":y": existingMovieYear,
        ":r": newMovieRank,
      },
      KeyConditionExpression: "title = :t and #y = :y",
      FilterExpression: "info.#r = :r",
    };

    console.log("Querying table...");
    const data = await ddbDocClient.send(new QueryCommand(params));
    // Loop through and parse the response.
    for (let i = 0; i < data.Items.length; i++) {
      console.log(
        "Query successful. Items with rank of " +
          newMovieRank +
          " include\n" +
          "Year = " +
          data.Items[i].year +
          " Title = " +
          data.Items[i].title
      );
    }
  } catch (err) {
    console.log("Error", err);
  }
};
const scanTable = async (tableName) => {
  const params = {
    TableName: tableName,
  };

  const scanResults = [];
  let items;
  do {
    items = await documentClient.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== "undefined");

  console.log(scanResults);
};
const run = async () => {
  try {
    const params = {
      RequestItems: {
        users: {
          Keys: [
            {
              uid: { S: "47519799-29ef-4c4c-b416-1bc6179d88d2" },
              username: { S: "sanjay96" },
              //   KEY_NAME_3: { N: "KEY_VALUE" },
            },
          ],
          ProjectionExpression: "username",
        },
      },
    };

    const { Responses } = await ddbClient.send(new BatchGetItemCommand(params));
    console.log("Success, items retrieved", Responses);
    console.log(Responses.users);
    // return data;
  } catch (err) {
    console.log("Error", err);
  }
};
// documentClient
//   .get({
//     TableName: "schools",
//     Key: {
//       schoolId: "23d181bf-ecdd-4ad9-84bb-691cc3f96ac1",
//       schoolName : "School3 Name"
//     },
//   })
//   .promise()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// documentClient
//   .scan({ TableName: "schools" })
//   .promise()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// createTable(schoolParams);
// createTable(userParams);
// createTable(courseParams);
putItem("Users", superAdminData);
// putItem("schools", schoolData2);
// putItem("professors", professorData);
// putItem("professors", professorData2);
// putItem("schools", updateData);
// putItem("users", userData);
// getItem();
// queryTable();
// scanTable("schools");
// run();
// queryTable();
