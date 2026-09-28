// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-2560.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-2560.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-2560.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-2560.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-dc-temple/washington-dc-temple-2560.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-2560.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-2560.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2560.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-city-utah-temple/salt-lake-city-utah-temple-2560.jpg"
    },
    // Three additional temples
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 110000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st-george-utah-temple/st-george-utah-temple-2560.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 120000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-2560.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-2560.jpg"
    }
];

// Function to display temples
function displayTemples(templesToDisplay) {
    const grid = document.getElementById('temple-grid');
    grid.innerHTML = ''; // Clear existing content
    
    templesToDisplay.forEach(temple => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        // Create card content
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName} Temple" 
                 loading="lazy">
        `;
        
        // Append card to grid
        grid.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(category) {
    let filteredTemples = [];
    const currentYear = new Date().getFullYear();
    
    switch(category) {
        case 'old':
            // Temples built before 1900
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear < 1900;
            });
            break;
            
        case 'new':
            // Temples built after 2000
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear > 2000;
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
    
    // Update the current filter heading
    document.getElementById('current-filter').textContent = category;
    
    // Display filtered temples
    displayTemples(filteredTemples);
}

// Function to set footer dates
function setFooterDates() {
    const currentYearSpan = document.getElementById('current-year');
    const lastModifiedSpan = document.getElementById('last-modified');
    
    // Set current year
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set footer dates
    setFooterDates();
    
    // Display all temples initially
    displayTemples(temples);
    
    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('href').substring(1);
            filterTemples(category);
        });
    });
});