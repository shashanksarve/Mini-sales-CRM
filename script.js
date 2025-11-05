// Example API endpoint (replace with your backend API URL)
const API_URL = "https://jsonplaceholder.typicode.com/users"; 

// Fetch leads from API
async function fetchLeads() {
    try {
        const response = await fetch(API_URL);
        const leads = await response.json();
        displayLeads(leads);
    } catch (error) {
        console.error("Error fetching leads:", error);
    }
}

// Display leads on the page
function displayLeads(leads) {
    const leadList = document.getElementById("lead-list");
    leadList.innerHTML = "";

    leads.forEach(lead => {
        const leadCard = document.createElement("div");
        leadCard.classList.add("lead-card");

        leadCard.innerHTML = `
            <h3>${lead.name}</h3>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Status:</strong> Pending</p>
            <div class="lead-actions">
                <a href="tel:${lead.phone}" class="call-btn">Call</a>
                <a href="mailto:${lead.email}" class="email-btn">Email</a>
                <button class="sold-btn" onclick="updateStatus('${lead.name}', 'Sold')">Mark Sold</button>
                <button class="not-sold-btn" onclick="updateStatus('${lead.name}', 'Not Sold')">Not Sold</button>
            </div>
        `;
        leadList.appendChild(leadCard);
    });
}

// Update lead status
function updateStatus(name, status) {
    alert(`${name} marked as ${status}`);
    // Example API request (POST/PUT to backend)
    /*
    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
    })
    .then(res => res.json())
    .then(data => console.log("Status updated:", data))
    .catch(err => console.error(err));
    */
}

// Initialize
fetchLeads();
