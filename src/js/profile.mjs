// PROFILE MJS

const API_BASE_URL = "https://nf-api.onrender.com";

const API_AUCTION_PROFILES = "/api/v1/auction/profiles";

const content = document.querySelector(".apiProfile");

async function fetchToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const getAllData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getAllData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    for (let i = 0; i < fetchToken.length; i++) {
      content.innerHTML += `<div class="imageContainer"> 
      <div class="row">
        <div class="col-lg-4">
          <div class=" mb-4">
            <div class="card-body text-center">
              <img src="${json[i].avatar}"</img>
              </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchToken(API_BASE_URL + API_AUCTION_PROFILES);