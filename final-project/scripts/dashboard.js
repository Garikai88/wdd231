// Transaction Data 
const transactions = [
    {
        date: "2026-02-10",
        desc: "Pick n Pay Harare",
        cat: "Groceries",
        amt: -45.50
    },

    {
        date: "2026-02-11",
        desc: "Zesa Prepaid",
        cat: "Utilities",
        amt: -20.00
    },

    {
        date: "2026-02-12",
        desc: "Freelance Payment",
        cat: "Income",
        amt: 500.00
    },

    {
        date: "2026-02-13",
        desc: "Mbare Market",
        cat: "Food",
        amt: -15.25
    }

];

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
   