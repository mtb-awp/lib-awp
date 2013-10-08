/**
 * Created by wuzhong on 13-9-29.
 */

(function (lib) {

    var config = function () {
            var config = localStorage.getItem("cacheConfig");
            return config ? JSON.parse(config) : {};
        }(),
        CACHE_SUBFIX = ".cah.js";

    lib.awp = {
        /**
         * 1 ： 已经cache并evil
         * -1 ： 不需要cache
         * 0 ： 等待下载
         * @param url
         * @returns {*}
         */
        read: function (url) {
            if (!endsWith(url, CACHE_SUBFIX)) {
                return -1;
            }
            var source = localStorage.getItem(url);
            if (source) {
                if (evalSource(source, url)) {
                    return 1;
                }
            } else {
                //TODO
                var fN = fileName(url);
                if (config[fN] && config[fN] != url) {
                    console.log("remove chache " + config[fN]);
                    localStorage.removeItem(config[fN]);
                }
                config[fN] = url;
                updateConfig();
            }
            return 0;
        },

        cache: function (fileName, source) {
//            var fileName = json.name,
//                source = json.source;
            if (config[fileName]) {
                console.log("add chache " + config[fileName]);
                localStorage.setItem(config[fileName], strSource(source));
            }
            evalSource(source, fileName);
        }
    }

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function fileName(url) {
        var arr = url.split("/");
        return arr[arr.length - 1].split("?")[0];
    }

    function strSource(source) {
        if (typeof source === "function") {
            var entire = source.toString(),
                body = entire.substring(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
            return body;
        }
        return source;
    }

    function appendCss(source) {
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = source;
        document.body.appendChild(css);
    }

    function evalSource(source, url) {
        if (endsWith(url, ".js" + CACHE_SUBFIX)) {
            console.log("eval js source start " + url);
            var start = Date.now();
            if (typeof source === "function") {
                source();
            } else {
//                new Function(source)();
                eval(source);
            }
            console.log("eval js source end " + url + "||" + (Date.now() - start));
            return true;
        } else if (endsWith(url, ".css" + CACHE_SUBFIX)) {
            appendCss(source);
            console.log("append css source " + url);
            return true;
        }
    }

    var timeOut;

    function updateConfig() {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(function () {
            console.log("update cache config:", config);
            localStorage.setItem("cacheConfig", JSON.stringify(config));
        }, 1000);
    }

})(window['lib'] || (window['lib'] = {}));
