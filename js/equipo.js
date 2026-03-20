/**
 * Lumina – Página Equipo: scroll del hero y botón "Leer más"
 */
(function () {
    'use strict';

    function i18n(key, fallback) {
        return (window.luminaI18n && window.luminaI18n.get(key)) || fallback;
    }

    var scrollIndicator = document.querySelector('.team-hero .scroll-indicator');
    if (scrollIndicator) {
        var target = document.querySelector('#equipo-intro');
        scrollIndicator.addEventListener('click', function () {
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    document.querySelectorAll('.team-member-more-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var id = this.getAttribute('data-more');
            var block = document.getElementById('team-more-' + id);
            if (!block) return;
            var isOpen = !block.hidden;
            block.hidden = isOpen;
            btn.setAttribute('aria-expanded', !isOpen);
            btn.textContent = isOpen ? i18n('team.readmore', 'Leer más') : i18n('team.readless', 'Menos');
        });
    });
})();
