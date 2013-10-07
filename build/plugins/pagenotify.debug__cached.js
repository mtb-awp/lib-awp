;(function(){window.lib.awp.cache({
    source : "/**;* @author wuzhong@taobao.com;* @since mixsln 4.3+;* @version 4.3;*/;(function(win, app){;;app.plugin.pagenotify = {;;/**;* 通知其他page;* @param fragment;* @param data  具体需要传递的数据，通过 page['notifyMessage'] 获取;*/;notify: function(fragment, data) {;var page = app.module.Page.get(fragment);;if(page){;page['notifyMessage'] = data;;};},;;onPageHide : function(page, options) {;page['notifyMessage'] && (delete page['notifyMessage']);;};;};})(window, window['app']);",
    name : "build/plugins/pagenotify.debug.js"
})})();