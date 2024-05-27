document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('inputBox');
    const saveButton = document.getElementById('saveButton');
    const displayText = document.getElementById('displayText');

    // Load the saved text from localStorage
    if (localStorage.getItem('savedText')) {
        displayText.textContent = localStorage.getItem('savedText');
    }

    saveButton.addEventListener('click', () => {
        const userText = inputBox.value;
        if (userText.trim()) {
            // Save the text in localStorage
            localStorage.setItem('savedText', userText);

            // Update the display text
            displayText.textContent = userText;

            // Alert the user
            alert(userText);

            // Notify other tabs about the change
            localStorage.setItem('savedTextUpdated', Date.now());
        }
    });

    // Listen for updates from other tabs
    window.addEventListener('storage', (event) => {
        if (event.key === 'savedTextUpdated') {
            displayText.textContent = localStorage.getItem('savedText');
            alert(localStorage.getItem('savedText'));
        }
    });
});
