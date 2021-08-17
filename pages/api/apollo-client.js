import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const GET_ALL = gql `
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
      description(asHtml:false)
    }
  }
  }
`;

const variables={
  page:1,
  perPage:10
}

const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

export default client;