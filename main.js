import "./scss/style.scss";

// page speed insights key:  AIzaSyCJpmbyPCYEITV04onRwPknKcJkdSdEhvU

const url = "https://georgendesign.com/";

async function getCarbonData(url) {
  const request = await fetch(
    `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`
  );
  const data = await request.json();
  console.log(data);
}

getCarbonData(url);

async function getPageSpeed(url) {
  const request = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyCJpmbyPCYEITV04onRwPknKcJkdSdEhvU`
  );
  const data = await request.json();
  console.log(data);
}

getPageSpeed(url);
