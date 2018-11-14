const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign(
    {
      username,
      email,
    },
    secret,
    {
      expiresIn,
    }
  );
};

exports.resolvers = {
  Query: {
    getAllColognes: async (root, args, { Cologne }) => {
      const allColognes = await Cologne.find();
      return allColognes;
    },
    getCurrentUser: async (root, args, { currentUser, User }) => {
      // check if current user is logged in
      if (!currentUser) {
        return null;
      }

      // user IS logged in, grab info
      // await function from mongoose calls findOne() to find currentUser.userName
      const user = await User.findOne({
        username: currentUser.username,
      }).populate({
        path: 'favorites',
        model: 'Cologne', // make sure this is singular
      });

      return user;
    },
  },

  Mutation: {
    addCologne: async (
      root,
      { scentName, scentPrice, description, username },
      { Cologne }
    ) => {
      const newCologne = await new Cologne({
        scentName,
        scentPrice,
        description,
        username,
      }).save();

      return newCologne;
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({
        username,
      });
      if (!user) {
        throw new Error('User not found');
      }
      // check to make sure password matches with user
      // that is found
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid Password');
      }
      // all good? return token
      return {
        token: createToken(user, process.env.SECRET, '1hr'),
      };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      // check if user already exists
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('User already exists');
      }
      // user doesn't exist, create one
      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return {
        token: createToken(newUser, process.env.SECRET, '1hr'),
      };
    },
  },
};

// signin function"""
