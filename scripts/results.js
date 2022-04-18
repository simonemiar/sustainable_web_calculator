const url = localStorage.getItem("checkedUrl");
console.log(url);

getDataRest();

async function getDataRest() {
  const options = {
    headers: {
      "x-apikey": "61b64c7672a03f5dae822307",
    },
  };

  const request = await fetch(`https://gnmmd2ndsemester-6f2a.restdb.io/rest/website-calc`, options);

  const data = await request.json();
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].url.includes(url));

    if (data[i].url.includes(url) || url.includes(data[i].url)) {
      displayData(data[i]);
      break;
    } else {
      if (i === data.length - 1) {
        getDataApi();
      }
    }
  }
}

async function getDataApi() {
  const request = await fetch(`https://kea-alt-del.dk/websitecarbon/site/?url=${url}`);

  const data = await request.json();

  displayData(data);

  const newUrl = {
    url: url,
    cleanerThan: data.cleanerThan,
  };
  const postData = JSON.stringify(newUrl);

  fetch("https://gnmmd2ndsemester-6f2a.restdb.io/rest/website-calc", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "61b64c7672a03f5dae822307",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const resultsURL = document.querySelector("#results-url");
resultsURL.innerHTML = `<span id="results-url">${url}% </span>`;

function displayData(data) {
  const cleanerThan = data.cleanerThan;
  let percentage;

  document.querySelector(".loading-screen").style.display = "none";

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

    percentageText.innerHTML = `<span id="clean-percentage">  ${[percentage]}% </span>dirty`;
    descriptionDetails.innerHTML = `<span id="dd-title">COME ON GUYS,</span>
    <span class="results-details">this is</span>
    <span class="results-details">really</span>
    <span class="results-details">bad</span>`;

    progressBar.style.setProperty("--end-progress", `${percentage}%`);
    progressBar.classList.add("red-bg");
    percentageText.classList.add("red-txt");
  }

  // ticking off the checkboxes to make the progressBar grow
  const checkbox = document.querySelectorAll(`input[type="checkbox"`);
  const could_be_value = document.querySelector(".could_be_value");
  let percentageLeft = (100 - percentage) / 3;
  // const textCouldBe = document.querySelector(".text_could_be");

  could_be_value.style.setProperty("--end-progress", `${percentage}%`);
  checkbox.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.checked) {
        percentage = percentageLeft + Number(percentage);
        could_be_value.style.setProperty("--end-progress", `${percentage}%`);
        // textCouldBe.innerHTML = `<span class="text_could_be">Your page could be ${could_be_value}% green</span>`;
      } else {
        percentage = Number(percentage) - percentageLeft;
        could_be_value.style.setProperty("--end-progress", `${percentage}%`);
        // textCouldBe.innerHTML = `<span class="text_could_be">Your page could be ${could_be_value}% green</span>`;
      }
    });
  });

  // smaller text explaining the result, shown under the bar
  const explainingPercentage = document.querySelector(".explaining-percentage");

  if (cleanerThan > 0.5) {
    explainingPercentage.innerHTML = `<span class="explaining-title">Your website is ${percentage}% green, this is a number compared to other pages tested in your industry. Your industry is the category you chose when running the calculation, on the frontpage.</span>`;
  } else {
    explainingPercentage.innerHTML = `<span class="explaining-title">Your website is ${percentage}% dirty, this is a number compared to other pages tested in your industry. Your industry is the category you chose when running the calculation, on the frontpage.</span>`;
  }
}
