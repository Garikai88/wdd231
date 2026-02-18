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

    // Table rendering by using the DOM manipulation and tempplate literals
    const tableBody = document.getElementById('transaction-body');

    function renderTransactions(data) {
        if (!tableBody) return;
        let tableRows = "";

        data.forEach(item =>  {
            tableRows += `
                <tr>
                    <td>${item.date}</td>
                    <td>${item.desc}</td>
                    <td>${item.cat}</td>
                    <td class="${item.amt > 0 ? 'pos' : 'neg'}">$${Math.abs(item.amt).toFixed(2)}</td>
                </tr>
            `;
            
        });

        // Updating the DOM once
        tableBody.innerHTML = tableRows;
    }

    // We then call the function
    renderTransactions(transactions);

    // Modal dialog logic
    const helpModal = document.getElementById('help-modal');
    const openModalBtn = document.getElementById('open-help');
    const closeModalBtn = document.getElementById('close-help');

    if (helpModal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', () => helpModal.showModal());
        closeModalBtn.addEventListener('click', () => helpModal.close());
    }

    // Mobile Logic
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar-nav');
    const overlay = document.getElementById('side-overlay');

    if (menuToggle && sidebar && overlay) {
        const toggleMenu = () => {
            const isOpening = !sidebar.classList.contains('show');
            sidebar.classList.toggle('show');
            overlay.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpening);
        };

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        //Side bar closes when a link is clicked
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('show');
                overlay.classList.remove('active');
            });
        });
    }

    // Form action logic for the thankyou.html 
    const displayArea = document.getElementById('details');
    if (displayArea) {
        const urlParams = new URLSearchParams(window.location.search);
        const amount = urlParams.get('amount');
        const recipient = urlParams.get('recipient');

        const recipientSpan = document.getElementById('display-recipient');
        const amountSpan = document.getElementById('display-amount');
        const idSpan = document.getElementById('display-id');

        if (amount && recipient) {
            if (recipientSpan) recipientSpan.textContent = recipient;
            if (amountSpan) amountSpan.textContent = `$${parseFloat(amount).toFixed(2)}`;
            if (idSpan) idSpan.textContent = `MB-${Math.floor(Math.random() * 1000000)}`;
        }
    }

    // Local Storage & Footer
    localStorage.setItem('lastVisit', new Date().toLocaleString());
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }
});

//Animating Progress Bars on Dashboard
const progressBars = document.querySelectorAll('progress-bar');
progressBars.forEach(bar => {
    const target = bar.getAttribute('data-target');
    setTimeout(() => {
        bar.computedStyleMap.width = target;
    }, 500);
});

