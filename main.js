import "./scss/style.scss";

// page speed insights key:  AIzaSyCJpmbyPCYEITV04onRwPknKcJkdSdEhvU

const url = "http://georgendesign.com/";

async function getCarbonData(url) {
  const request = await fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${url}`);
  const data = await request.json();
  console.log(data);
}

getCarbonData(url);

async function getPageSpeed(url) {
  const request = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyCJpmbyPCYEITV04onRwPknKcJkdSdEhvU`);
  const data = await request.json();
  console.log(data);
}

getPageSpeed(url);

// take action - metrices
const checkbox = document.querySelectorAll(".checkbox");
// const metric_2 = document.querySelector("#metric_2");
// const metric_3 = document.querySelector("#metric_3");
const could_be_value = document.querySelector(".could_be_value");

checkbox.forEach((e) => {
  e.addEventListener("click", () => {
    if (could_be_value.classList.contains("grow")) {
      could_be_value.classList.add("grow");
    } else {
      could_be_value.classList.remove("grow");
    }
    console.log("metric_1");
  });
});
