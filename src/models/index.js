exports.userParams = {
  AttributeDefinitions: [
    {
      AttributeName: "uid",
      AttributeType: "S",
    },
    {
      AttributeName: "email",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "uid",
      KeyType: "HASH",
    },
    {
      AttributeName: "email",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "Users",
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
  TableName: "Schools",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

exports.courseParams = {
  AttributeDefinitions: [
    {
      AttributeName: "courseId",
      AttributeType: "S",
    },
    {
      AttributeName: "courseName",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "courseId",
      KeyType: "HASH",
    },
    {
      AttributeName: "courseName",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "Courses",
  StreamSpecification: {
    StreamEnabled: false,
  },
};
