/**
 * @class global
 * @module global
 * @namespace window
 * @static
 * @extensionfor window
 */
(function () {

    var isOnline = window.location.host && window.location.host.match('.*\\m\\.(taobao|tmall)\\.com.*');

    if(window['namespace']){
        console.warn("namespace aleady exist");
        return;
    }
    /**
     *    存储获取读取
     * @method namespace
     * @public
     * @static
     * @param {String} key 变量的命名空间
     */
    window['namespace'] = function (key, value) {
        // set value
        if (2 === arguments.length) {
            var nsArray = key.split('.'),
                tmp = window,
                i = 0, nsKey;
            for (; i < nsArray.length; i++) {
                nsKey = nsArray[i];
                if (i === (nsArray.length - 1)) {
                    if (tmp[ nsKey]) {
                        console.error("namespace aleady exist :" + key );
                        if(isOnline){
                            console.warn("forse replacement");
                            tmp[ nsKey] = value;
                        }
                    } else {
                        tmp[ nsKey] = value;
                    }
                    break;
                }
                tmp[nsKey] || (tmp[nsKey] = {});
                tmp = tmp[nsKey];
            }
            return tmp;
        }
        //get value
        if (1 === arguments.length) {
            try {
                var arr = key.split('.'),
                    context = window;
                while (arr.length && context) {
                    context = context[arr.shift()];
                }
                return context;
            } catch (e) {
                return undefined;
            }
        }
    };
    /**
     * 定义基础组件，兼容seajs
     * @method _define
     * @public
     * @static
     * @deprecated
     * @param {String} key 变量的命名空间
     */
    window['_define'] = function (moduleName, factory) {
        var module = {},
            exports = module.exports = {};
        namespace(moduleName, (factory(null, exports, module) || module.exports));
    };

    namespace("lib.define",function(moduleName, factory){
       namespace(moduleName,factory());
    });
})();