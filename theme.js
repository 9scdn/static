(function () {
    function syncThemeToggle() {
        var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        var isDark = theme === 'dark';

        $('.theme-toggle').each(function () {
            var $button = $(this);
            $button.attr('aria-pressed', isDark ? 'true' : 'false');
            $button.attr('title', isDark ? '切换到亮色' : '切换到暗色');
            $button.find('i').removeClass('fa-sun fa-moon').addClass(isDark ? 'fa-sun' : 'fa-moon');
            var label = isDark ? '亮色' : '暗色';
            var $label = $button.find('.theme-toggle-label');
            if ($label.length) {
                $label.text(label);
            } else {
                $button.text(label);
            }
        });
    }

    $(function () {
        syncThemeToggle();
        $(document).on('click', '.theme-toggle', function (event) {
            event.preventDefault();
            event.stopPropagation();

            var currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);

            try {
                localStorage.setItem('theme', nextTheme);
            } catch (e) {}

            syncThemeToggle();
        });
    });
})();
