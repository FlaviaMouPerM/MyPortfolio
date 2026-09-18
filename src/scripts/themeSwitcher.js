export function initPortfolioSwitcher() {
  const styleBtn = document.getElementById('btn-portfolio-style');
  const labelStyle = document.getElementById('label-style');

  const savedStyle = localStorage.getItem('portfolioStyle') || 'modern';
  applyStyle(savedStyle);

  styleBtn.addEventListener('click', () => {
    const currentStyle = document.documentElement.getAttribute('data-style');
    const newStyle = currentStyle === 'modern' ? 'retro' : 'modern';
    applyStyle(newStyle);
    localStorage.setItem('portfolioStyle', newStyle);
  });

  function applyStyle(style) {
    document.documentElement.setAttribute('data-style', style);
    labelStyle.textContent = style === 'modern' ? 'Estilo: Moderno' : 'Estilo: Retrô';
  }
}