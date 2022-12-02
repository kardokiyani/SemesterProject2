// PROFILE MJS

const API_BASE_URL = "https://nf-api.onrender.com";

const API_AUCTION_PROFILE = "/api/v1/auction/profiles/";

const content = document.querySelector(".apiProfile");

import {save, load, remove} from "./storage.mjs";

async function fetchToken(name) {
  try {
    const token = load('accessToken')
    console.log(token);
    const getAllData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      API_BASE_URL + API_AUCTION_PROFILE)
      getAllData
    console.log(response);
    const json = await response.json();
    content.innerHTML += fetchToken(json);
    console.log(json);

    function fetchToken(json) {
      return ` <div class="imageContainer"> 
      <div class="row">
        <div class="col-lg-4">
          <div class=" mb-4">
            <div class="card-body text-center">
            <h2></h2>
              </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchToken(API_BASE_URL + API_AUCTION_PROFILE);

// TO THE LOGOUT 

import {logOutSite} from "./logout.mjs";

logOutSite();