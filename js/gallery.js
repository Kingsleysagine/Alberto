async function loadLuxuryProducts() {
  try {
      const response = await fetch("products.json"); // Load the JSON file
      const products = await response.json();
      const galleryContainer = document.getElementById("gallery-container");

      // Clear existing content
      galleryContainer.innerHTML = "";

      products.forEach(product => {
          const productHTML = `
              <div class="col-md-4 col-sm-6 mb-4">
                  <div class="card">
                      <a class="glightbox" data-gallery="images-gallery" href="${product.image}">
                          <img src="${product.image}" class="card-img-top img-fluid" alt="Image of ${product.name}">
                      </a>
                  </div>
              </div>
          `;

          galleryContainer.innerHTML += productHTML;
      });

  } catch (error) {
      console.error("Error loading luxury products:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLuxuryProducts);
