// script.js

const dailyDevUrl = "https://daily.dev/";

function fetchNews() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", dailyDevUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const news = JSON.parse(xhr.responseText);
      const content = document.getElementById("content");
      content.innerHTML = news.map(newsItem => `
        <h3>${newsItem.title}</h3>
        <p>${newsItem.description}</p>
      `).join("");
    }
  };
  xhr.send();
}

window.onload = fetchNews;
