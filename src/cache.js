/**
 * Created by wuzhong on 13-9-29.
 */

(function (lib) {

    var config = {};

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function fileName(url) {
        var arr = url.split("/");
        return arr[arr.length - 1];
    }

    function appendCss(source) {
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = source;
        document.body.appendChild(css);
    }

    function evalSource(source, url) {
        if (endsWith(url, ".js")) {
            eval(source);
            console.log("eval js:" + source);
            return true;
        } else if (endsWith(url, ".css")) {
            appendCss(source);
            console.log("append css:" + source);
            return true;
        }
    }

    lib.awp = {
        read: function (url) {
            var source = localStorage.getItem(url);
            try {
                if (source) {
                    return evalSource(source, url);
                } else {
                    config[fileName(url)] = url;
                }
            } catch (e) {
            }
            return false;
        },

        cache: function (json) {
            var fileName = json.name,
                source = json.source;
            if (config[fileName]) {
                localStorage.setItem(config[fileName], source);
            }
            evalSource(source, fileName);
        }
    }

})(window['lib'] || (window['lib'] = {}));
