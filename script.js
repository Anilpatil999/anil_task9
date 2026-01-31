const apiKey = "YOUR_API_KEY_HERE";
const url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&pageSize=12&apiKey=${apiKey}`;

const container = document.getElementById("news-container");

fetch(url)
    .then(response => response.json())
    .then(data => {
        container.innerHTML = "";

        if (data.articles.length === 0) {
            container.innerHTML = "<p>No sports news found.</p>";
            return;
        }

        data.articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "news-card";

            card.innerHTML = `
                <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="">
                <div class="content">
                    <h3>${article.title}</h3>
                    <p>${article.description || ''}</p>
                    <a href="${article.url}" target="_blank">Read More</a>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        container.innerHTML = "<p>news will appear here.</p>";
        console.error(error);
    });
