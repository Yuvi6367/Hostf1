document.addEventListener("DOMContentLoaded", () => {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  
    // Adjust the path to point to the correct location of the translation files
    fetch(`/LoginInterface/Dashboard/Translation/${selectedLanguage}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load ${selectedLanguage}.json`);
        }
        return response.json();
      })
      .then(translations => applyTranslations(translations))
      .catch(error => console.error("Error loading translations:", error));
  });
  
  function applyTranslations(translations) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const keys = el.getAttribute("data-i18n").split(".");
      let text = translations;
  
      // Traverse the keys to find the correct translation
      keys.forEach(key => {
        text = text[key];
      });
  
      if (text) {
        el.textContent = text;
      }
    });
  }