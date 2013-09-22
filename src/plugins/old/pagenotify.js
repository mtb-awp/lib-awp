(function(win, app){

    app.plugin.pagenotify = {

        fragment: null,

        notify: function(fragment, data) {
            var page = app.module.Page.get(fragment);
            if(page){
                page._pagenotify = data;
                this.fragment = fragment;
            }
        },

        onNavigationSwitchEnd: function() {
            if(!this.fragment){return};
            var page = app.module.Page.get(this.fragment);
            page && page.subscribe && page._pagenotify && page.subscribe(page._pagenotify);
            this.fragment = null;
            page._pagenotify = null;
        },

        onPageStartup : function(page, options) {
            console.log("page startup");
            page._pagenotify = null;
        }

    }
})(window, window['app']);