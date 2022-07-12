const usersResolvers = {
  Query: {
    oneUser: async (_, {}, { dataSources }) => {
      return await dataSources.UsersApi.oneUser();
    },
  },

  Mutation: {
    RegisterUsers: async (_, { input }, { dataSources }) => {
      return await dataSources.UsersApi.RegisterUsers(input);
    },
  },
};

export default usersResolvers;
