async function heroImg() {
    try {
        let api = await fetch("https://repo-tech2edge.github.io/tasks/sample.json");
        let data = await api.json();
        let series = data.series;
        let heroimg = series.img;
        console.log(heroimg);
        const img = document.querySelector(".header");
        if (img) {
            img.style.backgroundImage = `url(${heroimg})`;
        }
    } catch (error) {
        console.error("Error fetching or displaying image:", error);
    }
}

async function heroOtt() {
    try {
        let api = await fetch("https://repo-tech2edge.github.io/tasks/sample.json");
        let data = await api.json();
        let series = data.series;
        let heroott = series.ott;
        console.log(heroott);
        const container = document.getElementById('text');
        const h1 = document.createElement('h1');
        h1.style.fontWeight = 'bold';

        if (h1) {
            h1.textContent = `${heroott}`;
            container.appendChild(h1);
        }
    } catch (error) {
        console.error("Error fetching or displaying OTT:", error);
    }
}

async function heroText() {
    try {
        let api = await fetch("https://repo-tech2edge.github.io/tasks/sample.json");
        let data = await api.json();
        let series = data.series;
        let herotext = series.title;
        console.log(herotext);
        const container = document.getElementById('text');
        const h2 = document.createElement('p');
        h2.style.fontWeight = 'bold';
        h2.style.fontSize = '50px';

        if (h2) {
            h2.textContent = `${herotext}`;
            container.appendChild(h2);

        }
    } catch (error) {
        console.error("Error fetching or displaying text:", error);
    }
}

heroImg();
heroOtt();
heroText();
