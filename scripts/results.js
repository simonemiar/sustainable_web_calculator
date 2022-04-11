const url = "https://kea.dk/";

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
  const percentageText = document.querySelector("dt");

  if (cleanerThan > 0.5) {
    // bar.classList.add("greenBar");
    // percentageText.textContent = `This website is cleaner than ${(
    //   cleanerThan * 100
    // ).toFixed(0)}%`;
    percentageText.innerHTML = `<span id="clean-percentage">% </span>green`;
  } else {
    percentageText.innerHTML = `<span id="clean-percentage">${(
      cleanerThan * 100
    ).toFixed(0)}% </span>red`;
  }

  //   bar.style.width = `${(data.cleanerThan * 100).toFixed(0) * 10}px`;
}
