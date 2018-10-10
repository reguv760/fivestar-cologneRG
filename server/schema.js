exports.typeDefs = `
  type Cologne {
    _id: ID,
    firstName: String!
    lastName: String!
    dateOfBirth: String
    description: String
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id: ID,
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Cologne]
  }

  type Query {
    getAllColognes: [Cologne]
  }

  type Mutation {
    addCologne(scentName: String!, scentPrice: Int, description: String, username: String): Cologne
  }
`;
