!function(a){if(void 0==window.define){var b={},c=b.exports={};a(null,c,b),window.floatNotify=window.notification=b.exports}else define(a)}(function(a,b,c){function d(a){this._options=f.extend({mode:"msg",text:"网页提示",useTap:!1},a||{}),this._init()}var e,f=a?a("zepto"):window.$,g=f(window),h=['<div class="c-float-popWrap msgMode hide">','<div class="c-float-modePop">','<div class="warnMsg"></div>','<div class="content"></div>','<div class="doBtn">','<button class="ok">确定</button>','<button class="cancel">取消</button>',"</div>","</div>","</div>"].join(""),i=f(h),j=i.find(".warnMsg"),k=i.find(".content"),l=i.find(".doBtn .ok"),m=i.find(".doBtn .cancel"),n=!1,o="body";f.extend(d.prototype,{_init:function(){var a=this,b=a._options,c=b.mode,d=b.text,e=b.content,h=b.callback,p=b.background,q=b.useTap?"tap":"click",r=b.usedInWangWang,s=i.attr("class");s=s.replace(/(msg|alert|confirm)Mode/i,c+"Mode"),i.attr("class",s),p&&i.css("background",p),d&&j.html(d),e&&k.html(e),l.off(q).on(q,function(b){h.call(a,b,!0)}),m.off(q).on(q,function(b){h.call(a,b,!1)}),n||(n=!0,f(o).append(i),r||g.on("resize",function(){setTimeout(function(){a._pos()},500)}))},_pos:function(){var a,b,c,d,e,f,g=this,h=document,j=h.documentElement,k=h.body;g.isHide()||(a=k.scrollTop,b=k.scrollLeft,c=j.clientWidth,d=j.clientHeight,e=i.width(),f=i.height(),i.css({top:a+(d-f)/2,left:b+(c-e)/2}))},isShow:function(){return i.hasClass("show")},isHide:function(){return i.hasClass("hide")},_cbShow:function(){var a=this,b=a._options,c=b.onShow;i.css("opacity","1").addClass("show"),c&&c.call(a)},show:function(){var a=this;e&&(clearTimeout(e),e=void 0),a.isShow()?a._cbShow():(i.css("opacity","0").removeClass("hide"),a._pos(),setTimeout(function(){a._cbShow()},300),setTimeout(function(){i.animate({opacity:"1"},300,"linear")},1))},_cbHide:function(){var a=this,b=a._options,c=b.onHide;i.css("opacity","0").addClass("hide"),c&&c.call(a)},hide:function(){var a=this;a.isHide()?a._cbHide():(i.css("opacity","1").removeClass("show"),setTimeout(function(){a._cbHide()},300),setTimeout(function(){i.animate({opacity:"0"},300,"linear")},1))},flash:function(a){var b=this;opt=b._options,opt.onShow=function(){e=setTimeout(function(){e&&b.hide()},a)},b.show()}}),c.exports=new function(){this.simple=function(a,b,c){2==arguments.length&&"number"==typeof arguments[1]&&(c=arguments[1],b=void 0);var e=new d({mode:"msg",text:a,background:b});return e.flash(c||2e3),e},this.msg=function(a,b){return new d(f.extend({mode:"msg",text:a},b||{}))},this.alert=function(a,b,c){return new d(f.extend({mode:"alert",text:a,callback:b},c||{}))},this.confirm=function(a,b,c,e){return new d(f.extend({mode:"confirm",text:a,content:b,callback:c},e||{}))},this.pop=function(a){return new d(a)}}}),function(a){if(void 0==window.define){var b={},c=b.exports={};a(null,c,b),window=window.message=b.exports}else define(a)}(function(a,b){var c='<div style="padding-top: 10px"><div class="c-msg"><section class="c-msg-img ${type}"></section><section class="c-msg-info"><p>${msg}</p><p class="opt">${opt}</p></section></div></div>';b.render=function(a){return c.replace("${type}",a.type).replace("${msg}",a.msg).replace("${opt}",a.opt||"")}});