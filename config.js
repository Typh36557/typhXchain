// config.js - App Check reCAPTCHA v3
(function() {
    console.log('🔧 Activation App Check...');
    
    if (typeof firebase !== 'undefined' && firebase.appCheck) {
        try {
            const appCheck = firebase.appCheck();
            appCheck.activate(
                '6Le9utAsAAAAALrbDCplutKi71-EBLCWGpNozUyv',
                true
            );
            console.log('✅ App Check initialisé avec succès');
        } catch(e) {
            console.warn('⚠️ Erreur App Check:', e.message);
        }
    } else {
        console.error('❌ Firebase App Check non disponible');
    }
})();