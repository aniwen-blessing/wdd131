// 1. The Product Array
const products = [
    { id: "1", name: "TrailMaster X4 Tent" },
    { id: "2", name: "Quasar Light Jacket" },
    { id: "3", name: "Summit Breeze Backpack" },
    { id: "4", name: "Alpine Explorer Sleeping Bag" }
];

// 2. Populate Product Dropdown (Runs only on form.html)
const productSelect = document.getElementById('productName');
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;       // id used for value
        option.textContent = product.name; // name used for display
        productSelect.appendChild(option);
    });
}

// 3. Set Last Modified Date (Runs on both pages)
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModified.toLocaleString();
}

// 4. Handle Review Confirmation & LocalStorage (Runs only on review.html)
const confirmationDetails = document.getElementById('confirmationDetails');
if (confirmationDetails) {
    // Increment review count in localStorage
    let count = localStorage.getItem('reviewCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('reviewCount', count);
    
    // Display the count on the page
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = count;
    }

    // Parse URL parameters (from the GET method) to display submitted data
    const params = new URLSearchParams(window.location.search);
    let html = '<ul>';
    
    // Map the product ID back to its name for a cleaner display
    const productId = params.get('productName');
    const foundProduct = products.find(p => p.id === productId);
    const displayProductName = foundProduct ? foundProduct.name : productId;
    
    html += `<li><strong>Product:</strong> ${displayProductName}</li>`;
    html += `<li><strong>Rating:</strong> ${params.get('rating')} Star(s)</li>`;
    html += `<li><strong>Installation Date:</strong> ${params.get('installDate')}</li>`;
    
    // Get all checked features
    const features = params.getAll('features');
    html += `<li><strong>Useful Features:</strong> ${features.length > 0 ? features.join(', ') : 'None selected'}</li>`;
    
    const review = params.get('writtenReview');
    html += `<li><strong>Written Review:</strong> ${review ? review : 'No written review provided.'}</li>`;
    
    const userName = params.get('userName');
    html += `<li><strong>Name:</strong> ${userName ? userName : 'Anonymous'}</li>`;
    
    html += '</ul>';
    confirmationDetails.innerHTML = html;
}