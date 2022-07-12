import { gql } from "apollo-server-micro";

const productsTypes = gql`
  type Link {
    id: String
    title: String
    description: String
  }

  type Query {
    links: [Link]!
    link: Link
  }
`;

export default productsTypes;
