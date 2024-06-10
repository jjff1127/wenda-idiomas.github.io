document.addEventListener("DOMContentLoaded", function() {
    var cookieConsent = document.getElementById('cookieConsent');
    var acceptCookiesButton = document.getElementById('acceptCookies');
    var rejectButton = document.getElementById('rejectCookies');

    // Accepted Cookies?
    if (!getCookie('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // Button accept
    acceptCookiesButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'true', 365);
        cookieConsent.style.display = 'none';
    });

    // button reject
    rejectButton.addEventListener('click', function() {
        deleteCookie('cookieConsent');
        cookieConsent.style.display = 'none';
    });

    // set Cookies
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // get cookies
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // delete cookie
    function deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
});
