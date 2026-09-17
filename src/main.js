import { initPortfolioSwitcher } from "./scripts/portfolioSwitcher.js";
import { initLangSwitcher } from "./scripts/langSwitcher.js";
import { initThemeSwitcher } from "./scripts/themeSwitcher.js";
import { initNavigation } from "./scripts/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioSwitcher();
  initThemeSwitcher();
  initLangSwitcher();
  initNavigation();
});
