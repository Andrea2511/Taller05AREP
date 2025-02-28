const apiUrl = 'https://your-api-endpoint.com/properties'; // Replace with your API endpoint

    // Function to load properties from the backend
    async function loadProperties() {
        const response = await fetch(apiUrl);
        const properties = await response.json();
        const propertyList = document.getElementById('properties');
        propertyList.innerHTML = '';
        properties.forEach(property => {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property-item');
            propertyDiv.innerHTML = `
                <p><strong>Address:</strong> ${property.address}</p>
                <p><strong>Price:</strong> $${property.price}</p>
                <p><strong>Size:</strong> ${property.size} sq ft</p>
                <p><strong>Description:</strong> ${property.description}</p>
                <button onclick="editProperty(${property.id})">Edit</button>
                <button onclick="deleteProperty(${property.id})">Delete</button>
            `;
            propertyList.appendChild(propertyDiv);
        });
    }

    // Function to handle adding a new property
    document.getElementById('property-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const property = {
            address: document.getElementById('address').value,
            price: document.getElementById('price').value,
            size: document.getElementById('size').value,
            description: document.getElementById('description').value,
        };

        if (property.address && property.price && property.size && property.description) {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(property),
            });

            if (response.ok) {
                loadProperties(); // Reload the list of properties
                document.getElementById('property-form').reset(); // Reset the form
            } else {
                alert('Failed to add property');
            }
        } else {
            alert('Please fill in all fields');
        }
    });

    // Function to handle deleting a property
    async function deleteProperty(id) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            loadProperties(); // Reload the list after deletion
        } else {
            alert('Failed to delete property');
        }
    }

    // Function to handle editing a property
    async function editProperty(id) {
        const property = prompt('Enter new address for the property:');
        if (property) {
            const updatedProperty = {
                address: property, // Update with new address
            };

            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProperty),
            });

            if (response.ok) {
                loadProperties(); // Reload the list after editing
            } else {
                alert('Failed to update property');
            }
        }
    }

    // Load properties when the page loads
    window.onload = loadProperties;