const url = "http://georgendesign.com/";

async function getData() {
  const request = await fetch(
    `https://kea-alt-del.dk/websitecarbon/site/?url=${url}`
  );
  const data = await request.json();
}

getData();
