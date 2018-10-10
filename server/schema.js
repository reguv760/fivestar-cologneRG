exports.typeDefs = `
  type Cologne {
    scentName: String!
    scentPrice: Int
    createdDate: String
    description: String
    likes: Int
    username: String
  }

  type User {
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
