// created by https://blog.ukena.de/posts/2021/10/pure-javascript-cookie-consent-for-google-analytics/

var CookieBanner = (function() {
    return {
        'cookieDuration': 100,
        'cookieName': 'cookieConsent',
        'cookieAcceptedValue': 'analytics_accepted',
        'cookieDeniedValue': 'analytics_denied',
        'privacy_policy_url': '/policy',
        'consentCallBack': (function () {
            console.error("You must assign a call back function to CookieBanner.consentCallBack")
        }),
        '_createDiv': function(html) {
            var bodytag = document.getElementsByTagName('body')[0];
            var div = document.createElement('div');
            div.setAttribute('class','cookie-law');
            div.innerHTML = html;

            bodytag.insertBefore(div,bodytag.firstChild);

            document.getElementsByTagName('body')[0].className+='cookiebanner';

        },

        '_createCookie': function(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name+"="+value+expires+"; path=/";
        },

        '_cookieExists': function(name) {
            return document.cookie.indexOf(name + "=") !== -1;
        },

        '_triggerCallBackIfUserAccepted': function () {
            if (CookieBanner.hasUserAccepted()) {
                CookieBanner.consentCallBack()
            }
        },

        'hasUserAccepted': function() {
            return document.cookie.indexOf(CookieBanner.cookieAcceptedValue) !== -1;
        },

        '_eraseCookie': function(name) {
            CookieBanner._createCookie(name,"",-1);
        },

        'createAcceptCookie': function() {
            CookieBanner._createCookie(CookieBanner.cookieName, CookieBanner.cookieAcceptedValue, CookieBanner.cookieDuration);
        },

        'createDenyCookie': function() {
            CookieBanner._createCookie(CookieBanner.cookieName, CookieBanner.cookieDeniedValue, CookieBanner.cookieDuration);
        },

        'closeBanner': function() {
            var element = document.querySelector('.cookie-law');
            element.parentNode.removeChild(element);
        },

        'accept': function() {
            CookieBanner.createAcceptCookie();
            CookieBanner.closeBanner();
            CookieBanner._triggerCallBackIfUserAccepted()
        },

        'deny': function() {
            CookieBanner.createDenyCookie();
            CookieBanner.closeBanner();
        },

        'showIfCookieMissing': function(html) {
            if(CookieBanner._cookieExists(CookieBanner.cookieName) === false){
                CookieBanner._createDiv(html);
            }
            CookieBanner._triggerCallBackIfUserAccepted()
        }
    }

})();

window.onload = function(){
    var html = '<div class="row">' +
        '<div class="col-lg-9">' +
        `We use cookies to improve your experience on our site. By clicking 'Accept,' you agree to our use of cookies. Prefer not to? Click 'Deny.' See our <a href="${CookieBanner.privacy_policy_url}">Privacy Policy</a> for details.` +
        '</div>'

    html += '<div class="col cookieButtons">'
    html += '<button class="btn btn-primary" id="btn_accept" onclick="CookieBanner.accept();"><span>Accept</span></button>';
    html += '<button class="btn btn-danger" id="btn_deny" onclick="CookieBanner.deny();"><span>Deny</span></button>';
    html += '</div></div>'
    CookieBanner.consentCallBack = (function () {  
        var script = document.createElement('script');
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-0GS2KLZXCG";
        document.head.appendChild(script);
    
        script.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
    
            gtag('js', new Date());
            gtag('config', 'G-0GS2KLZXCG', { 'anonymize_ip': true });
        };
    });
    CookieBanner.showIfCookieMissing(html);
}