export const params = {
  AttributeDefinitions: [
    {
      AttributeName: "userName",
      AttributeType: "S",
    },
    {
      AttributeName: "password",
      AttributeType: "S",
    },
    {
      AttributeName: "firstName",
      AttributeType: "S",
    },

    {
      AttributeName: "lastName",
      AttributeType: "S",
    },
    {
      AttributeName: "phoneNumber",
      AttributeType: "S",
    },
    {
      AttributeName: "schoolId",
      AttributeType: "S",
    },
    {
      AttributeName: "professorId",
      AttributeType: "S",
    },
    {
      AttributeName: "userType",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "userName",
      KeyType: "S",
    },
    {
      AttributeName: "password",
      KeyType: "S",
    },
    {
      AttributeName: "firstName",
      KeyType: "S",
    },

    {
      AttributeName: "lastName",
      KeyType: "S",
    },
    {
      AttributeName: "phoneNumber",
      KeyType: "S",
    },
    {
      AttributeName: "schoolId",
      KeyType: "S",
    },
    {
      AttributeName: "professorId",
      KeyType: "S",
    },
    {
      AttributeName: "userType",
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
