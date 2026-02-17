document.addEventListener('DOMContentLoaded', () => {
    
    // Data Definition
    const transactions = [
        {date: "2026-02-10", desc: "Weekly Groceries", cat: "Food", amt: -120.50, status: "Completed" },
        {date: "2026-02-11", desc: "Electric Bill", cat: "Utilities", amt: -45.00, status: "Pending" },
        {date: "2026-02-12", desc: "Dinner Out", cat: "Dining", amt: -15.25, status: "Completed" },
        {date: "2026-02-13", desc: "Montly Rent", cat: "Housing", amt: -1200.00, status: "Completed" },
        {date: "2026-02-14", desc: "Bus Pass", cat: "Transport", amt: -10.00, status: "Completed" },
        {date: "2026-02-14", desc: "New Shoes", cat: "Shopping", amt: -55.60, status: "Completed" },
        {date: "2026-02-15", desc: "Movie Ticket", cat: "Fun", amt: -18.99, status: "Pending" },
        {date: "2026-02-15", desc: "Morning Coffee", cat: "Dining", amt: -5.00, status: "Completed" },
        {date: "2026-02-15", desc: "Car Insurance", cat: "Bills", amt: -150.50, status: "Completed" },
        {date: "2026-02-16", desc: "Internet", cat: "Utilities", amt: -65.00, status: "Completed" },
        {date: "2026-02-16", desc: "Paycheck", cat: "Income", amt: +2500.00, status: "Completed" },
        {date: "2026-02-16", desc: "Lunch", cat: "Dining", amt: -12.50, status: "Completed" },
        {date: "2026-02-16", desc: "Uber Ride", cat: "Transport", amt: -22.00, status: "Pending" },
        {date: "2026-02-16", desc: "Gas Station", cat: "Transport", amt: -42.10, status: "Completed" },
        {date: "2026-02-16", desc: "Netflix", cat: "Sub", amt: -18.00, status: "Completed" },
    ];

    function displayTransactions(data) {
        const container = document.getElementById('transaction-list');
        if (!container) return;

        let allRows = "";

        data.forEach(item => {
            allRows += `
                <div class="transaction-item">
                    <span class="t-date">${item.date}</span>
                    <span class="t-cat">${item.cat}</span>
                    <span class="t-amount">${Math.abs(item.amt).toFixed(2)}</span>
                    <span class="t-status status-${item.status.toLowerCase()}">${item.status}</span>
                </div>
            `;
            
        });

        container.innerHTML = allRows;
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

    // DOM execution
    renderTransactions(transactions);
    displayTransactions(transactions);

    // Footer Update
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }
});


   
   