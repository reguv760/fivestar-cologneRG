# Create a mutation
* Queries will be useful for us for **returning data from our database**

## Add new `type` to our `schema.js`
* It will be a function that will need parameters passed to it which will be all the fields that the Genealogy needs to be created
* It will also take the type required

`schema.js`

```
// MORE CODE

  type Query {
    getAllColognes: [Cologne]
  }
  
  // add below
  type Mutation {
    addCologne(firstName: String!, lastName: String!, description: String, username: String  ): Cologne
  }
`;
```

`resolvers.js`

```
exports.resolvers = {
  Query: {
    getAllColognes: () => {},
  },

  Mutation: {
    addCologne: async (
      root,
      { firstName, lastName, dateOfBirth, description, username },
      { Cologne }
    ) => {
      const newGenealogy = await new Cologne({
        firstName,
        lastName,
        dateOfBirth,
        description,
        username,
      }).save();
      return newGenealogy;
    },
  },
};

```

## Test it
* View `http://localhost:4444/graphiql`
* You will see a Root type of mutation has been added
* Click on it and you will see the fields inside the `addGenealogy` mutation with all of our parameters included

## Add a new Genealogy on the fly using graphiql
```
mutation {
  addGenealogy(firstName: "Phil", lastName: "Hawley") {
    firstName,
    lastName
  }
}
```

* We don't return an object but the fields from the object
* After enter the above, hit the play button
* and you will see this output:

```
{
  "data": {
    "addGenealogy": {
      "firstName": "Phil",
      "lastName": "Hawley"
    }
  }
}
```

* Check your mongoDB database for the collection info
* When you insert a new document in mongoDB it will automatically add a field named `_id`

## What is async await?
* [What are promises](https://www.youtube.com/watch?v=2d7s3spWAzo)
* [wes boss talks async await](https://www.youtube.com/watch?v=9YkUCxvaLEk)
