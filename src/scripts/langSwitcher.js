import { translations } from "./translations.js";

export function initLangSwitcher() {
  const langBtn = document.getElementById("btn-lang-toggle");
  const labelLang = document.getElementById("label-lang");

  const savedLang = localStorage.getItem("lang") || "pt";
  applyLanguage(savedLang);

  langBtn.addEventListener("click", () => {
    const currentLang = document.documentElement.getAttribute("data-lang");
    const newLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(newLang);
    localStorage.setItem("lang", newLang);
  });

  function applyLanguage(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    labelLang.textContent = lang.toUpperCase();

    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  }
}
