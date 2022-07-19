exports.userParams = {
  AttributeDefinitions: [
    {
      AttributeName: "uid",
      AttributeType: "S",
    },
    {
      AttributeName: "username",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "uid",
      KeyType: "HASH",
    },
    {
      AttributeName: "username",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "students",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

exports.professorParams = {
  AttributeDefinitions: [
    {
      AttributeName: "professorId",
      AttributeType: "S",
    },
    {
      AttributeName: "username",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "professorId",
      KeyType: "HASH",
    },
    {
      AttributeName: "username",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "professors",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

exports.schoolParams = {
  AttributeDefinitions: [
    {
      AttributeName: "schoolId",
      AttributeType: "S",
    },
    {
      AttributeName: "schoolName",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "schoolId",
      KeyType: "HASH",
    },
    {
      AttributeName: "schoolName",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "schools",
  StreamSpecification: {
    StreamEnabled: false,
  },
};
