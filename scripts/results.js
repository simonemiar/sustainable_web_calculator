const url = localStorage.getItem("checkedUrl");
console.log(url);

async function getData() {
  const request = await fetch(
    `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`
  );

  const data = await request.json();

  console.log(data);

  displayData(data);
}

getData();

function displayData(data) {
  const cleanerThan = data.cleanerThan;
  const percentage = (cleanerThan * 100).toFixed(0);
  const badPercentage = ((1 - cleanerThan) * 100).toFixed(0);
  const progressBar = document.querySelector(".progress-value");

  const percentageText = document.querySelector("dt");
  const descriptionDetails = document.querySelector("dd");

  if (cleanerThan > 0.5) {
    percentageText.innerHTML = `<span id="clean-percentage">${percentage}% </span>green`;
    descriptionDetails.innerHTML = `<span id="dd-title">THIS IS PROMISING,</span>
    <span class="results-details">but we</span>
    <span class="results-details">can do</span>
    <span class="results-details">better</span>`;

    progressBar.style.setProperty("--end-progress", `${percentage}%`);
  } else {
    percentageText.innerHTML = `<span id="clean-percentage">  ${badPercentage}% </span>dirty`;
    descriptionDetails.innerHTML = `<span id="dd-title">COME ON GUYS,</span>
    <span class="results-details">this is</span>
    <span class="results-details">really</span>
    <span class="results-details">bad</span>`;

    progressBar.style.setProperty("--end-progress", `${badPercentage}%`);
  }

  //   bar.style.width = `${(data.cleanerThan * 100).toFixed(0) * 10}px`;
}
