// SPECIFIC MJS

const postSpecific = document.querySelector(".postSpecific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const API_BASE_URL_SPECIFIC = "https://nf-api.onrender.com/";

const API_GET_LISTINGS = "api/v1/auction/listings/" + id;

specificPostWithId(API_BASE_URL_SPECIFIC + API_GET_LISTINGS);

async function specificPostWithId(API_ALL_LISTINGS) {
  try {
    const token = localStorage.getItem("accessToken");
    const getAllData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API_ALL_LISTINGS, getAllData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    postSpecific.innerHTML += `<section class="mt-5 container">
    <div class="row">
    <div class="postStyle">
      <div class="col-lg-4">
        <div>
          <div class="card-body text-center">
            <div class="mt-5 col-12">
                    <div>
                      <img src="${json.media}" class=" w-100">
                    </div>
<div class="col-sm-9 mt-4">
                <p>${json.description}</p>
              </div>
            <div>
            <form id="formBid">
            <input class="form-control" placeholder="Bid....." name="inputName" id="bidButton" required>
                <button type="submit" class="btn btn-outline-success shadow-lg  border rounded text-dark mt-2">Place bid</button>
                </form>
              </div>
              </div>
       </section>`;

    const bidInput = document.querySelector("#bidButton");

    async function bidToSpecificListing(listID) {
      try {
        const token = localStorage.getItem("accessToken");
        const getSpecificData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: Number(bidInput.value),
          }),
        };
        const url = `api/v1/auction/listings/${listID}/bids`;
        const response = await fetch(
          API_BASE_URL_SPECIFIC + url,
          getSpecificData
        );
        console.log(response);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }

    const form = document.querySelector("#formBid");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      bidToSpecificListing(id);
    });
  } catch (error) {
    console.log(error);
  }
}

// TO THE LOGOUT

import { logOutSite } from "./logout.mjs";

logOutSite();
