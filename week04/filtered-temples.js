const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74700,
        imageUrl: "images/manti-utah.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, August, 8",
        area: 6800,
        imageUrl: "images/yigo-guam.jpg"
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        name: "Los Angeles California",
        location: "Los Angeles, California",
        dedicated: "1956, March, 11",
        area: 190234,
        imageUrl: "images/los-angeles-temple.jpg"
    },
    {
        name: "Nauvoo Illinois",
        location: "Nauvoo, Illinois",
        dedicated: "2002, June, 27",
        area: 53000,
        imageUrl: "images/nauvoo-temple.jpg"
    },
    {
        name: "St. George Utah",
        location: "St. George, Utah",
        dedicated: "1877, April, 6",
        area: 29471,
        imageUrl: "images/st-george-temple.jpg"
    },
    {
        name: "Manila Philippines",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 42900,
        imageUrl: "images/manila-temple.jpg"
    },
    {
        name: "Fort Lauderdale Florida",
        location: "Davie, Florida",
        dedicated: "2014, May, 4",
        area: 36000,
        imageUrl: "images/fort-lauderdale-temple.jpg"
    },
    {
        name: "Logan Utah",
        location: "Logan, Utah",
        dedicated: "1884, May, 17",
        area: 195000,
        imageUrl: "images/logan-temple.jpg"
    },
    {
        name: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 110000,
        imageUrl: "images/provo-city-center-temple.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <img 
            src="${temple.imageUrl}" 
            alt="${temple.name} Temple" 
            loading="lazy"
            width="400"
            height="250"
        >
        <figcaption>
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;
    return card;
}

function displayTemples(templesToDisplay) {
    const container = document.getElementById('temples-container');
    container.innerHTML = ''; 
    
    templesToDisplay.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

function filterTemples(filterType) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    let filteredTemples = [];
    
    switch(filterType) {
        case 'old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }
    
    displayTemples(filteredTemples);
}

function setFooterInfo() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    setFooterInfo();
    displayTemples(temples);
    
    document.getElementById('home').addEventListener('click', (e) => { e.preventDefault(); filterTemples('home'); });
    document.getElementById('old').addEventListener('click', (e) => { e.preventDefault(); filterTemples('old'); });
    document.getElementById('new').addEventListener('click', (e) => { e.preventDefault(); filterTemples('new'); });
    document.getElementById('large').addEventListener('click', (e) => { e.preventDefault(); filterTemples('large'); });
    document.getElementById('small').addEventListener('click', (e) => { e.preventDefault(); filterTemples('small'); });
});