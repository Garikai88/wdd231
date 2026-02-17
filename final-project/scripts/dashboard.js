

function displayTransactions(data) {
    const container = document.getElementById('transaction-list');
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
        const row = `
            <div class="transaction-item">
                <span class="t-date">${item.date}</span>
                <span class="t-cat">${item.category}</span>
                <span class="t-amount">${item.amount.toFixed(2)}</span>
                <span class="t-status status-${item.status.toLowerCase()}">${item.status}</span>
            </div>
        `;
        container.innerHTML += row;

    });
}

// Select the table Body from HTML
const tableBody = document.getElementById('transaction-body');

// Function to build the table rows
function renderTransactions(data) {
    if (!tableBody) return;

    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement('tr');

        // Matching the 4 columns in the wireframe
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.desc}</td>
            <td>${item.cat}</td>
            <td class="${item.amt > 0 ? 'pos' : 'neg'}">$${Math.abs(item.amt).toFixed(2)}</td>
            `;

            tableBody.appendChild(row);
    });
}

// Execute on load
renderTransactions(transactions);
   