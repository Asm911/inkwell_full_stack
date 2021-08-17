const { ApolloServer, gql } = require("apollo-server");

export const typeDefs = gql`
  type query ($id: Int) {
  Page(page: 1, perPage: 10) {
    media(id: $id) {
      id
      title {
        romaji
      }
      coverImage {
        large
      }
      description(asHtml:false)
    }
  }
  }

   type media 
 {
     id: Int
     title: String
     coverImage: String
     description: String
   }

`;
