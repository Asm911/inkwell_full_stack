import styles from '../styles/Home.module.css'
import { ApolloClient,InMemoryCache, ApolloProvider,useQuery,gql, } from "@apollo/client";
import client from "./api/apollo-client";
import React, { useState } from 'react';
import {Grid} from '@material-ui/core';
import {Image} from 'next/image'

//Static GraphQL query to fetch first 10 media items
const GET_MEDIA = gql `
query ($id: Int) {
  Page(page: 1, perPage: 10) {
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

//Main function to render page and parse gql responce
export default function Home() {
  //useQuery hook to fetch data to store locally
  const { data, loading, error } = useQuery(GET_MEDIA);
  if (loading) {
    return (
      <div style = {{textAlign: "center", paddingTop: "10%"}}>
        Loading...
      </div>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className={styles.main}>
      {data.Page.media.map((media) => (
        <div key={media.id} className='img'>
        <Grid container flexgrow={1} spacing={3}>
              <Grid item lg>
                <img src={media.coverImage.large} alt="Anime Cover Art" width="300" height="200"/>
                <div className= {styles.titlez}>Title: {media.title.romaji}</div>
                <div className= {styles.shadowbox}>Description: {media.description}</div>
                <br></br>
              </Grid>
         </Grid>
          </div> ))
        } 
    </div>
   ) }