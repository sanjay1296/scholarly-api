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

// Item: {
//     uid: '47519799-29ef-4c4c-b416-1bc6179d88d2', f810c1fd-e039-4523-b778-9ffcd3cdde96
//     userName: 'sanjay96',
//     firstName: 'Sanjay',
//     lastName: 'P',
//     phoneNumber: '+91212121212',
//     schoolId: 'b61716ea-4626-485b-9e5b-003b8dceb5c2',
//     professorId: '3932b105-5d07-40a0-985b-6cd9830f7689'
//   }

const userParams = {
  AttributeDefinitions: [
    {
      AttributeName: "uid",
      AttributeType: "S",
    },
    {
      AttributeName: "userName",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "USERS",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

const createTable = async () => {
  try {
    console.log(`"Fetching Params ${userParams}`);
    const data = await ddbClient.send(new CreateTableCommand(userParams));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

const putItem = async () => {
  // Set the parameters.
  const params = {
    TableName: "USERS",
    Item: {
      uid: getUuid(),
      userName: "john100",
      firstName: "John",
      lastName: "Davy",
      phoneNumber: "+91212121212",
      schoolId: "b61716ea-4626-485b-9e5b-003b8dceb5c2",
      professorId: "3932b105-5d07-40a0-985b-6cd9830f7689",
    },
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
      TableName: "USERS",
      Key: {
        uid: "f810c1fd-e039-4523-b778-9ffcd3cdde96",
        userName: "sanjay96",
      },
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
    return data.Item;
  } catch (err) {
    console.log("Error", err.message);
  }
};

const queryTable = async () => {
  try {
    const params = {
      ExpressionAttributeNames: { "#uid": "uid" },
      ProjectionExpression: "#uid",
      TableName: "USERS",
      ExpressionAttributeValues: {
        ":uid": "uid",
      },
      KeyConditionExpression: "uid = :uid",
      FilterExpression: "info.#uid = :uid",
    };
    const data = await ddbDocClient.send(new QueryCommand(params));
    for (let i = 0; i < data.Items.length; i++) {
      console.log(
        "Success. Items with rank of " +
          "MOVIE_RANK" +
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
// createTable();
// putItem();
// getItem();

const run = async () => {
  try {
    const params = {
      RequestItems: {
        USERS: {
          Keys: [
            {
              uid: { S: "47519799-29ef-4c4c-b416-1bc6179d88d2" },
              userName: { S: "sanjay96" },
              //   KEY_NAME_3: { N: "KEY_VALUE" },
            },
          ],
          ProjectionExpression: "userName",
        },
      },
    };

    const { Responses } = await ddbClient.send(new BatchGetItemCommand(params));
    console.log("Success, items retrieved", Responses);
    console.log(Responses.USERS)
    // return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// queryTable();
