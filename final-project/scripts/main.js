document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.sidebar-nav');
    const overlay = document.getElementById('sidebar-overlay');

    if (menuToggle && nav && overlay) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            nav.classList.remove('show');
            overlay.classList.remove('active');
        });
    }

    // Handling goal progress animation
    const animateBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');

        setTimeout(() => {
            progressBars.forEach(bar => {
                const target = bar.getAttribute('data-target');
                if (target) {
                    bar.style.width = target;

                    // Checking if the goal is 100%
                    if (target === "100%") {
                        //Finding the closest parent card to add a success style
                        const card = bar.closest('.goal-card');
                        if (card) {
                            card.classList.add('goal-completed');
                        }

                        // Adding a small "Completed!" badge dynamically
                        if (!card.querySelector('.complete-badge')){
                            const badge = document.createElement('span');
                            badge.className = 'complete-badge';
                            badge.innerText = '🏆Goal Reached';

                            const goalInfo = card.querySelector('.goal-info');
                            if (goalInfo) {
                                goalInfo.appendChild(badge);
                            }

                        }
                        

                    }
                }
            });
        }, 100);
    };

    // To call the animations to run
    animateBars();

    // Transfer Form Submission
    const transferForm = document.getElementById('transfer-form');

    if (transferForm) {
        transferForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const amount = document.getElementById('amount').value;
            const recipient = document.getElementById('to-account').value;

            alert(`Success! $${amount} has been sent to ${recipient}.`);

            //Changing .requestFullscreen() (incorrect) to .reset()
            transferForm.reset();
        });
    }

    //Updating Last Modified Date 
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }
});