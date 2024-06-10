document.addEventListener("DOMContentLoaded", function() {
    var cookieConsent = document.getElementById('cookieConsent');
    var acceptCookiesButton = document.getElementById('acceptCookies');
    var rejectButton = document.getElementById('rejectCookies');

    // 检查是否已同意Cookies
    if (!getCookie('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // 用户点击“接受”按钮时设置cookie
    acceptCookiesButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'true', 365);
        cookieConsent.style.display = 'none';
    });

    // 用户点击“拒绝”按钮时删除cookie并隐藏提示
    rejectButton.addEventListener('click', function() {
        deleteCookie('cookieConsent');
        cookieConsent.style.display = 'none';
    });

    // 设置cookie的函数
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // 获取cookie的函数
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

    // 删除cookie的函数
    function deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
});
