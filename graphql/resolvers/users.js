const usersResolvers = {
  Query: {
    oneUser: async (_, {}, { dataSources }) => {
      return await dataSources.UsersApi.oneUser();
    },
  },
};

export default usersResolvers;
