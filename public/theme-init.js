(function () {
  try {
    var storedTheme = localStorage.getItem('theme');
    var isThemeName =
      storedTheme === 'orange' ||
      storedTheme === 'white' ||
      storedTheme === 'gray' ||
      storedTheme === 'blue';

    var theme = isThemeName ? storedTheme : 'white';
    var themeMap = {
      orange: { bg: '#f05222', link: 'white' },
      white: { bg: '#dcddde', link: '#f05222' },
      gray: { bg: '#afb8b6', link: 'black' },
      blue: { bg: '#e3e4e5', link: '#3852a5' },
    };

    var colors = themeMap[theme];
    var root = document.documentElement;

    root.style.setProperty('--background-color', colors.bg);
    root.style.setProperty('--link-color', colors.link);

    // Apply to <html> immediately (body may not exist yet).
    root.classList.remove('orange-theme', 'white-theme', 'gray-theme', 'blue-theme');
    root.classList.add(theme + '-theme');

    // Keep for any code that reads it later.
    root.setAttribute('data-theme', theme);

    var themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', colors.bg);
    }

    // Also apply to <body> once it exists.
    var applyBody = function () {
      if (!document.body) return;
      document.body.classList.remove('orange-theme', 'white-theme', 'gray-theme', 'blue-theme');
      document.body.classList.add(theme + '-theme');
    };

    applyBody();
    if (!document.body) {
      document.addEventListener('readystatechange', applyBody, { once: true });
      window.setTimeout(applyBody, 0);
    }
  } catch (e) {
    // no-op
  }
})();
