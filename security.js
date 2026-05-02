// security.js - Protection simple
(function() {
    'use strict';
    
    // Nettoyer les caractères dangereux
    window.sanitizeHTML = function(str) {
        if (!str) return '';
        if (typeof str !== 'string') str = String(str);
        return str.replace(/[&<>"'/]/g, function(match) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;'
            };
            return map[match];
        });
    };
    
    // Protéger les inputs
    function protegeInput(input) {
        if (input.type === 'password') return;
        input.addEventListener('input', function() {
            const valeur = input.value;
            const nettoye = window.sanitizeHTML(valeur);
            if (valeur !== nettoye) input.value = nettoye;
        });
    }
    
    // Appliquer à tous les inputs
    document.querySelectorAll('input:not([type="password"]), textarea').forEach(protegeInput);
    
    // Anti-clickjacking
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
    
    console.log('✅ Sécurité active');
})();