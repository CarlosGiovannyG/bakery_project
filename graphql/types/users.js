import { gql } from "apollo-server-micro";

const usersTypes = gql`
  type User {
    name: String
  }

  input UserData {
    email: String
    password: String
  }

  type UserRegister {
    message: String
  }

  type Query {
    oneUser: User
  }

  type Mutation {
    RegisterUsers(input: UserData): UserRegister
  }
`;

export default usersTypes;
