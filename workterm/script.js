const savedTheme = localStorage.getItem('report-theme');
    if (savedTheme === 'light') document.documentElement.dataset.theme = 'light';

const themeToggle = document.querySelector('.theme-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.links');
    function updateThemeToggle() {
      const dark = document.documentElement.dataset.theme === 'dark';
      themeToggle.textContent = dark ? 'Light mode' : 'Dark mode';
      themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    function closeNavigation() {
      navigation.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem('report-theme', nextTheme);
      updateThemeToggle();
    });
    menuToggle.addEventListener('click', () => {
      const open = navigation.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNavigation(); });
    updateThemeToggle();
