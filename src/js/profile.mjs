// PROFILE MJS

const API_BASE_URL = "https://nf-api.onrender.com";

const API_AUCTION_PROFILE = "/api/v1/auction/profiles/";

const content = document.querySelector(".apiProfile");

import { load } from "./storage.mjs";

async function fetchToken(profileName) {
  const profileURL = '/api/v1/auction/profiles/' + profileName;
  try {
    const response = await authFetch(API_BASE_URL + profileURL);
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
            <h2>${json.name}</h2>
            <h3>${json.email}<h3>
            <h3>${json.credits}</h3>
            <h3>${json.avatar}</h3>
              </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

const { name } = load('profile');
fetchToken(name);

// UPDATE AVATAR

const form = document.querySelector("#form");
const avatar = document.querySelector("#avatar");

const url = API_BASE_URL + API_AUCTION_PROFILE + "kardo/media";

(async function () {
  const method = "PUT";
  try {
    const response = await authFetch(url, method);
    const json = await response.json();

    avatar.value = json.avatar;
    
  } catch (error) {
    console.log(error);
  }
})();

form.onsubmit = function (event) {
  event.preventDefault();

  const avatarValue = avatar.value;

  updateAvatar(avatarValue);
};

async function updateAvatar(avatar) {
  const method = "PUT";

  const data = {
    avatar: avatar,
  };

  try {
    const response = await authFetch(url, {
      method,
      body: JSON.stringify(data),
    });

    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

// TO THE LOGOUT

import { logOutSite } from "./logout.mjs";
import { authFetch } from "./authFetch.mjs";

logOutSite();