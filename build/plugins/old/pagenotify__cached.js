;(function(){window.lib.awp.cache({
    source : "!function(a,b){b.plugin.pagenotify={fragment:null,notify:function(a,c){var d=b.module.Page.get(a);d&&(d._pagenotify=c,this.fragment=a)},onNavigationSwitchEnd:function(){if(this.fragment){var a=b.module.Page.get(this.fragment);a&&a.subscribe&&a._pagenotify&&a.subscribe(a._pagenotify),this.fragment=null,a._pagenotify=null}},onPageStartup:function(a){console.log(\"page startup\"),a._pagenotify=null}}}(window,window.app);",
    name : "build/plugins/old/pagenotify.js"
})})();