const AWS = require("aws-sdk");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const REGION = "us-east-1";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });
const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB Document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

// snippet-end:[dynamodb.JavaScript.tables.createdocclientv3]
const documentClient = new AWS.DynamoDB.DocumentClient({
  // optional tuning - 50% faster(cold) / 20% faster(hot)
  region: REGION,
  apiVersion: "2012-08-10",
  sslEnabled: false,
  paramValidation: false,
  convertResponseTypes: false,
});
module.exports = { ddbClient, ddbDocClient, documentClient };
