exports.resolvers = {
	Query: {
		getAllColognes: async (root, args, { Cologne }) => {
	      return await Cologne.find();
	    },
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