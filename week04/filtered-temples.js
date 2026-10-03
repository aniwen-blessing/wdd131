// Array of Temple Objects
const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "aba-nigeria-temple.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74700,
        imageUrl: "images/manti-utah-temple.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, August, 8",
        area: 6800,
        imageUrl: "images/yigo-guam-temple.jpg"
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

// Function to create temple card HTML
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

// Function to display temples
function displayTemples(templesToDisplay) {
    const container = document.getElementById('temples-container');
    container.innerHTML = ''; // Clear existing content
    
    templesToDisplay.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(filterType) {
    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    event.target.classList.add('active');
    
    let filteredTemples = [];
    
    switch(filterType) {
        case 'old':
            // Temples built before 1900
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
            
        case 'new':
            // Temples built after 2000
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
            
        case 'large':
            // Temples larger than 90,000 square feet
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
            
        case 'small':
            // Temples smaller than 10,000 square feet
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
            
        case 'home':
        default:
            // Display all temples
            filteredTemples = temples;
            break;
    }
    
    displayTemples(filteredTemples);
}

// Function to set footer information
function setFooterInfo() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set footer information
    setFooterInfo();
    
    // Display all temples initially
    displayTemples(temples);
    
    // Add event listeners to navigation
    document.getElementById('home').addEventListener('click', (e) => {
        e.preventDefault();
        filterTemples('home');
    });
    
    document.getElementById('old').addEventListener('click', (e) => {
        e.preventDefault();
        filterTemples('old');
    });
    
    document.getElementById('new').addEventListener('click', (e) => {
        e.preventDefault();
        filterTemples('new');
    });
    
    document.getElementById('large').addEventListener('click', (e) => {
        e.preventDefault();
        filterTemples('large');
    });
    
    document.getElementById('small').addEventListener('click', (e) => {
        e.preventDefault();
        filterTemples('small');
    });
});