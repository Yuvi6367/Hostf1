document.getElementById('language-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
    
    // Store the selected language in localStorage or a cookie
    localStorage.setItem('selectedLanguage', selectedLanguage);

    // Redirect to the login interface (change 'login.html' to your actual login page file)
    window.location.href = 'Login-Page.html';
});