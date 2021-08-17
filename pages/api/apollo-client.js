import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

//GraphQL Query to get first 10 media items on page 1
const GET_ALL = gql`
  query ($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(id: $id) {
        id
        title {
          romaji
        }
        coverImage {
          medium
          large
        }
        description(asHtml: false)
      }
    }
  }
`;

const variables = {
  page: 1,
  perPage: 10,
};

//initilize Apollo Client with GraphQL endpoint and save cached data
const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export default client;
