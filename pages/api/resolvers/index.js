import { typeDefs } from "../schemas";
const axios = require("axios");

export const resolvers = {
  query: {
    getMedia: async () => {
      try {
        const data = await axios.post(
          "https://graphql.anilist.co",
          { typeDefs },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return data.Page.media.map(({ id, title, coverImage }) => ({
          id,
          title,
          coverImage,
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};
