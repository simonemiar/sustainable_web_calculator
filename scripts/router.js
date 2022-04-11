const link = document.querySelector(".send-btn");

async function getCarbonData(url) {
  console.log(data);
}

link.addEventListener("click", navigate);

async function navigate() {
  const url = "http://georgendesign.com/";

  const request = await fetch(
    `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`
  );
  const data = await request.json();

  var favoritemovie = "Shrek";
  sessionStorage.setItem("favoriteMovie", favoritemovie);

  redirect();

  function redirect() {
    location.href = "results.html";
  }
}
