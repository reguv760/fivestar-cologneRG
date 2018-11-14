exports.typeDefs = `
  type Cologne {
    _id: ID,
    scentName: String!
    scentPrice: Int
    createdDate: String
    description: String
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

    getCurrentUser: User
  }

  type Token
  {
    token: String!
  }

  type Mutation {
    addCologne(scentName: String!, scentPrice: Int, description: String, username: String): Cologne

    signupUser(username: String!, email: String!, password: String!): Token

    signinUser(username: String!, password: String!): Token
  }
`;
