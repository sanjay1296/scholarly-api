const { ddbClient, ddbDocClient, documentClient } = require("../libs").aws;
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

exports.queryTable = async (tableName) => {
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

  return scanResults;
};
exports.getItem = async (params) => {

  const data = await ddbDocClient.send(new GetCommand(params));
  console.log("Success :", data.Item);
  return data.Item;
};

exports.putItem = async (tableName, data) => {
  // Set the parameters.
  const params = {
    TableName: tableName,
    Item: data,
  };
  console.log("Adding/Updating :", params);
  const result = await ddbDocClient.send(new PutCommand(params));
  console.log("Success - item added or updated", result);
  return result;
};
