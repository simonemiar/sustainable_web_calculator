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
  let percentage;

  const progressBar = document.querySelector(".progress-value");

  const percentageText = document.querySelector("dt");
  const descriptionDetails = document.querySelector("dd");

  if (cleanerThan > 0.5) {
    percentage = (cleanerThan * 100).toFixed(0);

    percentageText.innerHTML = `<span id="clean-percentage">${percentage}% </span>green`;
    descriptionDetails.innerHTML = `<span id="dd-title">THIS IS PROMISING,</span>
    <span class="results-details">but we</span>
    <span class="results-details">can do</span>
    <span class="results-details">better</span>`;

    progressBar.style.setProperty("--end-progress", `${percentage}%`);
    progressBar.classList.add("green-bg");
    percentageText.classList.add("green-txt");
  } else {
    percentage = ((1 - cleanerThan) * 100).toFixed(0);

    percentageText.innerHTML = `<span id="clean-percentage">  ${[
      percentage,
    ]}% </span>dirty`;
    descriptionDetails.innerHTML = `<span id="dd-title">COME ON GUYS,</span>
    <span class="results-details">this is</span>
    <span class="results-details">really</span>
    <span class="results-details">bad</span>`;

    progressBar.style.setProperty("--end-progress", `${percentage}%`);
    progressBar.classList.add("red-bg");
    percentageText.classList.add("red-txt");
  }

  const checkbox = document.querySelectorAll(`input[type="checkbox"`);

  const could_be_value = document.querySelector(".could_be_value");
  could_be_value.style.setProperty("--end-progress", `${percentage}%`);

  let percentageLeft = (100 - percentage) / 3;

  checkbox.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.checked) {
        percentage = percentageLeft + Number(percentage);
        could_be_value.style.setProperty("--end-progress", `${percentage}%`);
      } else {
        percentage = Number(percentage) - percentageLeft;
        could_be_value.style.setProperty("--end-progress", `${percentage}%`);
      }
    });
  });
}
