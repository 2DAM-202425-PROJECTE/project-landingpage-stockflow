// Cercador dins del FAQ
document.getElementById('faq-search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question span:first-child').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Expansió/Collapsació FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const symbol = item.querySelector('.faq-question span:last-child');
        symbol.textContent = item.classList.contains('active') ? '-' : '+';
    });
});

// Favorits
document.querySelectorAll('.faq-favorite').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.classList.toggle('active');
    });
});

// Mode clar/fosc
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Defineix els estils del mode clar
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background-color: #f4f4f4;
        color: #121212;
    }
    .light-mode nav {
        background-color: #ffffff;
        color: #121212;
    }
    .light-mode .faq-item {
        background-color: #ffffff;
        color: #121212;
    }
    .light-mode footer {
        background-color: #ffffff;
        color: #121212;
    }
    .light-mode .theme-toggle {
        background-color: #121212;
        color: #ffffff;
    }
`;
document.head.appendChild(style);
