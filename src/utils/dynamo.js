const { ddbClient, ddbDocClient } = require("../libs").aws;
const { CreateTableCommand } = require("@aws-sdk/client-dynamodb");
const { GetCommand } = require("@aws-sdk/lib-dynamodb");

const models = require("../models");
const fetchParams = (type) => {
  switch (type) {
    case "user":
      return models.userParams;
    case "professor":
      return models.professorParams;
    case "school":
      return models.schoolParams;
    default:
      return models.userParams;
  }
};
exports.createTable = async (type) => {
  try {
    const params = fetchParams(type);
    console.log(`"Fetching ${type} Params ${params}`);
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
    return err.message;
  }
};

exports.getItem = async (tableName, id) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        primaryKey: id,
        // sortKey: sortBy,
      },
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
    return data.Item;
  } catch (err) {
    console.log("Error", err);
  }
};

const putItem = async (tableName, data) => {
  // Set the parameters.
  const params = {
    TableName: "USERS",
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
