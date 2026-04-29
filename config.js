// config.js - App Check reCAPTCHA v3 (Version corrigée)

(function() {
    console.log('🔧 Chargement config.js...');
    
    function initAppCheck() {
        // Vérifier si Firebase est initialisé
        try {
            // Récupérer l'instance Firebase par défaut
            const app = firebase.app();
            
            if (app && typeof firebase.appCheck !== 'undefined') {
                try {
                    const appCheck = firebase.appCheck();
                    appCheck.activate(
                        '6Le9utAsAAAAALrbDCplutKi71-EBLCWGpNozUyv',
                        true
                    );
                    console.log('✅ App Check initialisé avec succès');
                } catch(e) {
                    console.warn('⚠️ Erreur activation App Check:', e.message);
                }
            } else {
                console.warn('⏳ Firebase pas encore prêt, réessai dans 500ms...');
                setTimeout(initAppCheck, 500);
            }
        } catch(e) {
            console.warn('⏳ Firebase non initialisé, réessai dans 500ms...');
            setTimeout(initAppCheck, 500);
        }
    }
    
    // Attendre que le DOM et Firebase soient prêts
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAppCheck);
    } else {
        // Petit délai pour laisser Firebase s'initialiser
        setTimeout(initAppCheck, 500);
    }
})();