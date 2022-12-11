import React, { createContext, useState } from "react";
import axios from "axios";
export const PhotoContext = createContext();



const ImageSearch = () =>{
    const {photos}= this.state;
    const url='https://api.pexels.com/v1/search?query=${photos}&per_page=1';
    const gallery = fetch(url,{
      method: 'GET',
      headers:{
        Accept: 'application/json',
        Authorization: '563492ad6f91700001000001cc90bc9e73f540d0911115253970a3c5'
      }
    })
    .then(response =>{
      return response.json();
    })
    .then(results =>{
      console.log(results);
    })
    .catch(err =>{
      console.error("Error with fetching and parsing data", err);
    });
  }
    return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );


export default ImageSearch;