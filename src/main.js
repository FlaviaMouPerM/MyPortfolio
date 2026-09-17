import { initPortfolioSwitcher } from "./src/scripts/portfolioSwitcher.js";
import { initLangSwitcher } from "./src/scripts/langSwitcher.js";
import { initThemeSwitcher } from "./src/scripts/themeSwitcher.js";
import { initNavigation } from "./src/scripts/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioSwitcher();
  initThemeSwitcher();
  initLangSwitcher();
  initNavigation();
});
