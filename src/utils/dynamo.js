const { ddbClient, ddbDocClient } = require("../libs");
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

const models = require("../models");
const fetchParams = (type) => {
  switch (type) {
    case "user":
      return models.user;
    case "professor":
      return models.school;
    case "school":
      return models.school;
    default:
      return models.users;
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

exports.getItem = async (tableName, id, sortBy = "") => {
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
  } catch (err) {
    console.log("Error", err);
  }
};

// exports.updateItem = async (tableName, id, sortBy = "") => {
//   // Set the parameters.
//   const params = {
//     TableName: tableName,
//     Key: {
//       title: "MOVIE_NAME",
//       year: "MOVIE_YEAR",
//     },
//     ProjectionExpression: "#r",
//     ExpressionAttributeNames: { "#r": "rank" },
//     UpdateExpression: "set info.plot = :p, info.#r = :r",
//     ExpressionAttributeValues: {
//       ":p": "MOVIE_PLOT",
//       ":r": "MOVIE_RANK",
//     },
//   };
//   try {
//     const data = await ddbDocClient.send(new UpdateCommand(params));
//     console.log("Success - item added or updated", data);
//     return data;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
