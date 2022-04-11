"use strict";

const introForm = document.querySelector("form");
const urlInput = document.querySelector("#url_field");
const errMsg = document.querySelector("#error-msg");
const sendBtn = document.querySelector(`input[type="submit"]`);

const link = document.querySelector(".send-btn");

function validURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function errorMsg(text) {
  errMsg.classList.remove("hidden");
  errMsg.textContent = text;
}

urlInput.addEventListener("input", () => {
  if (validURL(urlInput.value) || urlInput.value.length === 1) {
    errMsg.classList.add("hidden");
  }
});

urlInput.addEventListener("blur", () => {
  if (!validURL(urlInput.value) && urlInput.value.length > 0) {
    errorMsg("This is not a valid URL.");
  } else if (!urlInput.value) {
    errorMsg("Please insert an URL here.");
  } else errMsg.classList.add("hidden");
});

urlInput.addEventListener("invalid", function (e) {
  if (e.target.validity.valueMissing) {
    e.preventDefault();

    urlInput.focus();
  }
});

introForm.addEventListener("submit", (e) => {
  if (!validURL(urlInput.value) && urlInput.value.length > 0) {
    e.preventDefault();
    urlInput.focus();
    urlInput.select();
  } else {
    e.preventDefault();

    const url = urlInput.value;
    localStorage.setItem("checkedUrl", url);
    location.href = "results.html";
  }
});
