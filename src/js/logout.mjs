// LOGOUT MJS

import { remove } from "../js/stored/remove.mjs";

function logOutSite() {
  const logOut = document.querySelector("#logOut");

  logOut.addEventListener("click", () => {
  remove("accessToken");
  remove("credits");
  remove("profile");
  window.location.assign("index.html"); 
  });
}

logOutSite();