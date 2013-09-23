(function (app) {
    app.config.resourceBase = 'http://a.tbcdn.cn/g/mtb/';
    app.config.enableMessageLog = false;
    app.config.enableNavbar = !window.lib.hybrid.detect.isClient();
    app.config.enableToolbar = !0;
    app.config.enableScroll = !1;
    app.config.enableTransition = !0;

    window.lib.mtop.loading = app.plugin.loading;

    var __orginalDefinePage = app.definePage,
        __originPush = app.navigation.push;

    backBtn = {
        type: 'back',
        text: '返回',
        autoHide: false,
        handler: function () {
            var href = window.location.href;
            app.navigation.pop();
            setTimeout(function () {
                if (href === window.location.href) {
                    window.location.href = "http://m.taobao.com"
                }
            }, 500);
        }
    };

    app.navigation.push = function (str) {
        if (str.indexOf('http') === 0) {
            window.location.href = str;
        } else {
            var refer = app.navigation.getReferer() || '',
                splites = refer.split("#");
            if (splites.length === 2 && splites[1] === str) {
                app.plugin.pagenotify && app.plugin.pagenotify.notify(str, true);
                app.navigation.pop();
            } else {
                __originPush.apply(null, Array.prototype.slice.call(arguments));
            }
        }
    };


    //统一配置back 和 http url 拦截
    app.definePage = function (page) {
        if (page.buttons) {
            var hasBack;
            for (var i = 0, max = page.buttons.length; i < max; i++) {
                if ("back" === page.buttons[i].type) {
                    hasBack = true;
                    break;
                }
            }
            hasBack || page.buttons.push(backBtn);
        } else {
            page.buttons = [backBtn];
        }
        __orginalDefinePage(page);
    };
})(window.app);