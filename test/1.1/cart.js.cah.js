;(function(){ window.lib.awp.cache("cart.js.cah.js",function(){
    !function(){var a=window.location.host&&window.location.host.match(".*\\m\\.(taobao|tmall)\\.com.*");return window.namespace?(console.warn("namespace aleady exist"),void 0):(window.namespace=function(b,c){if(2===arguments.length){for(var d,e=b.split("."),f=window,g=0;g<e.length;g++){if(d=e[g],g===e.length-1){f[d]?(console.error("namespace aleady exist :"+b),a&&(console.warn("forse replacement"),f[d]=c)):f[d]=c;break}f[d]||(f[d]={}),f=f[d]}return f}if(1===arguments.length)try{for(var h=b.split("."),i=window;h.length&&i;)i=i[h.shift()];return i}catch(j){return void 0}},window._define=function(a,b){var c={},d=c.exports={};namespace(a,b(null,d,c)||c.exports)},namespace("lib.define",function(a,b){namespace(a,b())}),void 0)}();!function(a){if(void 0==window.define){var b={},c=b.exports={};a(null,c,b),window.floatNotify=window.notification=b.exports}else define(a)}(function(a,b,c){function d(a){this._options=f.extend({mode:"msg",text:"网页提示",useTap:!1},a||{}),this._init()}var e,f=a?a("zepto"):window.$,g=f(window),h=['<div class="c-float-popWrap msgMode hide">','<div class="c-float-modePop">','<div class="warnMsg"></div>','<div class="content"></div>','<div class="doBtn">','<button class="ok">确定</button>','<button class="cancel">取消</button>',"</div>","</div>","</div>"].join(""),i=f(h),j=i.find(".warnMsg"),k=i.find(".content"),l=i.find(".doBtn .ok"),m=i.find(".doBtn .cancel"),n=!1,o="body";f.extend(d.prototype,{_init:function(){var a=this,b=a._options,c=b.mode,d=b.text,e=b.content,h=b.callback,p=b.background,q=b.useTap?"tap":"click",r=b.usedInWangWang,s=i.attr("class");s=s.replace(/(msg|alert|confirm)Mode/i,c+"Mode"),i.attr("class",s),p&&i.css("background",p),d&&j.html(d),e&&k.html(e),l.off(q).on(q,function(b){h.call(a,b,!0)}),m.off(q).on(q,function(b){h.call(a,b,!1)}),n||(n=!0,f(o).append(i),r||g.on("resize",function(){setTimeout(function(){a._pos()},500)}))},_pos:function(){var a,b,c,d,e,f,g=this,h=document,j=h.documentElement,k=h.body;g.isHide()||(a=k.scrollTop,b=k.scrollLeft,c=j.clientWidth,d=j.clientHeight,e=i.width(),f=i.height(),i.css({top:a+(d-f)/2,left:b+(c-e)/2}))},isShow:function(){return i.hasClass("show")},isHide:function(){return i.hasClass("hide")},_cbShow:function(){var a=this,b=a._options,c=b.onShow;i.css("opacity","1").addClass("show"),c&&c.call(a)},show:function(){var a=this;e&&(clearTimeout(e),e=void 0),a.isShow()?a._cbShow():(i.css("opacity","0").removeClass("hide"),a._pos(),setTimeout(function(){a._cbShow()},300),setTimeout(function(){i.animate({opacity:"1"},300,"linear")},1))},_cbHide:function(){var a=this,b=a._options,c=b.onHide;i.css("opacity","0").addClass("hide"),c&&c.call(a)},hide:function(){var a=this;a.isHide()?a._cbHide():(i.css("opacity","1").removeClass("show"),setTimeout(function(){a._cbHide()},300),setTimeout(function(){i.animate({opacity:"0"},300,"linear")},1))},flash:function(a){var b=this;opt=b._options,opt.onShow=function(){e=setTimeout(function(){e&&b.hide()},a)},b.show()}}),c.exports=new function(){this.simple=function(a,b,c){2==arguments.length&&"number"==typeof arguments[1]&&(c=arguments[1],b=void 0);var e=new d({mode:"msg",text:a,background:b});return e.flash(c||2e3),e},this.msg=function(a,b){return new d(f.extend({mode:"msg",text:a},b||{}))},this.alert=function(a,b,c){return new d(f.extend({mode:"alert",text:a,callback:b},c||{}))},this.confirm=function(a,b,c,e){return new d(f.extend({mode:"confirm",text:a,content:b,callback:c},e||{}))},this.pop=function(a){return new d(a)}}}),function(a){if(void 0==window.define){var b={},c=b.exports={};a(null,c,b),window=window.message=b.exports}else define(a)}(function(a,b){var c='<div style="padding-top: 10px"><div class="c-msg"><section class="c-msg-img ${type}"></section><section class="c-msg-info"><p>${msg}</p><p class="opt">${opt}</p></section></div></div>';b.render=function(a){return c.replace("${type}",a.type).replace("${msg}",a.msg).replace("${opt}",a.opt||"")}});!function(a){var b=function(a){for(var b=Array.prototype.slice.call(arguments,1),c=0,d=b.length;d>c;c++)for(var e in b[c])a[e]=b[c][e];return a};a.storage||(a.storage={}),a.storage.storage={set:function(a,b){if(this.isSuppLocalStorage()){"string"!=typeof b&&(b=JSON.stringify(b));try{return window.localStorage.setItem(a,b),!0}catch(c){}}return!1},add:function(a,c){if(this.isSuppLocalStorage()){if("string"==typeof c)c=JSON.parse(c);else{try{b(c,JSON.parse(this.get(a)))}catch(d){}c=JSON.stringify(c)}return window.localStorage.setItem(a,c),!0}return!1},get:function(a){return this.isSuppLocalStorage()?window.localStorage.getItem(a):null},removeValue:function(a){return this.isSuppLocalStorage()?window.localStorage.removeItem(a):void 0},clearAll:function(){return this.isSuppLocalStorage()?window.localStorage.clear():void 0},isSuppLocalStorage:function(){try{if("undefined"===window.localStorage)return!1;var a="testSupportKey";window.localStorage.setItem(a,"1");var b=window.localStorage.getItem(a);return window.localStorage.removeItem(a),"1"===b}catch(c){}return!1}}}(window.lib||(window.lib={})),function(a){var b=function(a){return"taobao"+a+"db"},c=function(a,c,d,e){a=b(a||"default");var f=window.openDatabase(a,c,d,e);return f},d=function(){return!0},e=function(a){return a},f=function(a,b){console.log("success",a,b)},g=function(a,b){console.log("fail",a,b)};a.storage||(a.storage={}),a.storage.database={curDb:null,dbName:null,supportDb:!1,init:function(a){if(!d())return this.supportDb=!1,null;var f=c(a.databasename,a.version,a.description,a.size);return this.curDb=f,this.dbName=b(a.databasename),f&&(this.supportDb=!0),e(this.supportDb),f},executeSql:function(a,b,c,d){if(!a||!b||!this.supportDb)return!1;var e=this.curDb;e.transaction(function(e){console.log("[sql]",a,b),e.executeSql(a,b,c||f,d||g)})},createTable:function(a,b,c){a&&this.supportDb&&this.executeSql(a,[],b||f,c||g)},executeSelect:function(a,b,c,d){if(a&&this.supportDb){var e=this.curDb;e.readTransaction(function(e){console.log("[sql]",a,b),e.executeSql(a,b,c||f,d||g)})}}}}(window.lib||(window.lib={})),function(a){var b=a.storage.database,c=a.storage.storage,d="db_cart_count",e="supportDb",f="CREATE TABLE IF NOT EXISTS cart(params TEXT UNIQUE,quantity INTEGER)",g="INSERT INTO cart (params,quantity) VALUES(?,?)",h="SELECT * FROM cart ",i="SELECT COUNT(*) FROM cart ",j="SELECT * FROM cart WHERE params=?",k="UPDATE cart SET quantity=? WHERE params=?",l="DELETE  FROM  cart",m=20,n=function(){return c.get(e)===!1?!1:!0},o=function(a){c.set(e,a)},p=function(){var a={databasename:"localcart",version:"1.0",description:"本地购物车",size:204800},c=b.init(a);c?b.createTable(f):o(!1)},q=function(a,c,d,e){var f=[a,c],h=function(a,b){d&&d(a,b),s(a,b)};b.executeSql(g,f,h,e)},r=function(a,c,d){var e=function(a,b){c&&c(a,b)},f=[a];return b.executeSelect(j,f,e,d)},s=function(){var a=function(a,b){1===b.rows.length&&z(b.rows.item(0)["COUNT(*)"])};return b.executeSelect(i,[],a)},t=function(a,c){var d=function(b,c){var d=c.rows?c.rows.length:0,e=[];if(d>0)for(var f=0;d>f;f++){var g=c.rows.item(f),h=JSON.parse(g.params);h.quantity=g.quantity,e[f]=h}a&&a(e),s(d)};return b.executeSelect(h,[],d,c)},u=function(a,c,d,e){var f=[c,a],g=function(a,b){d&&d(a,b)};b.executeSql(k,f,g,e)},v=function(a,c){var d=[],e=function(b,c){a&&a(b,c),s(b,c)};b.executeSql(l,d,e,c)},w=function(a){if(a&&a.itemNumId){var b={};return a.itemNumId&&(b.itemNumId=a.itemNumId),a.skuId&&(b.skuId=a.skuId),a.divisionId&&(b.divisionId=a.divisionId),a.serviceId&&(b.serviceId=a.serviceId),a.campaignId&&(b.campaignId=a.campaignId),a.sellerId&&(b.sellerId=a.sellerId),a.pid&&(b.pid=a.pid),a.strPid&&(b.strPid=a.strPid),a.unionId&&(b.unionId=a.unionId),a.cartType&&(b.cartType=a.cartType),JSON.stringify(b)}return null},x=function(){return c.get(d)},y=function(){return"0"===c.get(d)?!1:!0},z=function(a){c.set(d,a)};a.cart||(a.cart={}),a.cart.cartDb={init:function(){n()&&!this.isSupportDb()&&p()},hasDatas:function(){return y()},isSupportDb:function(){return b.supportDb},isFull:function(){return x()>=m},addCart:function(a,b,c){var d=this;if(d.isSupportDb){var e=w(a);if(e){var f=function(f,g){var h,i=g.rows.length;if(i>0&&(h=g.rows.item(0)),h){var j=(Number(h.quantity)||1)+(Number(a.quantity)||1);u(e,j,b,c)}else if(d.isFull())c();else{var k=a.quantity||1;q(e,k,b,c)}};r(e,f,c)}}else c()},getAllFromCart:function(a,b){var c=this;c.isSupportDb&&t(a,b)},removeAll:function(a,b){var c=this;c.isSupportDb&&v(a,b)}}}(window.lib);window.lib.define("app.cart.mtop",function(){var a=window.lib.mtop,b=window.notification,c={},d=c.getData=function(b,c,d,e){a.loginedRequest({api:b,data:c,v:"1.0"},{succ:function(a){d&&d(a.data)},fail:function(a){e&&e({fail:a.errcode,errMsg:a.message})}})},e=function(){b.simple("服务器异常，请稍后再试！")};return c.batchAddBag=function(a,b,c){d("mtop.trade.batchAddBag",a,b,c||e)},c.addBag=function(a,b,c){d("mtop.trade.addBag",a,b,c||e)},c.queryBagList=function(a,b,c){d("mtop.trade.queryBagList",a,b,c||e)},c.bagToFavor=function(a,b,c){d("mtop.trade.bagToFavor",a,b,c||e)},c.updateBagCount=function(a,b,c){d("mtop.trade.updateBagCount",a,b,c||e)},c.batchDelBag=function(a,b,c){d("mtop.trade.batchDelBag",a,b,c||e)},c.deleteBag=function(a,b,c){d("mtop.trade.deleteBag",a,b,c||e)},c.buildOrder=function(a,b,c){a.buyNow=!1,d("mtop.trade.buildOrder",a,b,c||e)},c.createOrder=function(a,b,c){a.buyNow=!1,d("mtop.trade.createOrder",a,b,c||e)},c}),window.lib.define("app.cart.myCart",function(){var a=window.lib.cart.cartDb,b=window.app.cart.mtop,c=window.lib.uri.getUrl,d=window.notification,e=function(a){a&&$.ajax({type:"GET",dataType:"json",url:c({subdomain:"s",path:"search_turn_page_iphone.htm",data:{nid:a}})+"&callback=?",success:function(a){var b="";a.result&&"true"===a.result&&a.listItem&&a.listItem.forEach(function(a){b+=a.name+";"}),b&&d.simple("以下商品加入购物车失败:<br/>"+b,3e3)},error:function(){}})},f=function(a){var b="";a&&a[0]&&(a.forEach(function(a){b+=a.itemNumId+","}),e(b))},g=function(c,d,e){if(a.hasDatas()){a.init();var g=function(c){c&&c[0]&&b.batchAddBag({addList:JSON.stringify(c)},function(b){f(b.failedAddList),b.failedAddList&&b.failedAddList.length===c.length||h({},d,e),a.removeAll()},function(){f(c),a.removeAll()})};a.getAllFromCart(g)}},h=function(a,c,d){b.queryBagList(a,function(a){a.t=(new Date).getTime(),a.fail?(a.errMsg="服务器繁忙，请稍后再试！",d(a)):c(a)},d)};return{getCartList:function(a,b,c){h(a,b,c),g(a,b,c)}}}),window.lib.define("app.cart.CartUtils",function(){var a=window.lib.storage.cookie,b={ERROR:"操作失败",LINEERR:"连接失败，请检查网络",SUCCESS:"操作成功",DELONE:"确定删除此宝贝？",DELALL:"确定删除所有失败宝贝？",INVENTOTY:"超过宝贝库存数量",NUMBER:"请输入合理的数字"},c={},d=function(){return"true"===a.getCookie("supportWebp")},e=function(a){return a&&-1!==a.indexOf("taobaocdn")&&-1===a.indexOf("_.webp")&&d()?"_.webp":""};return c.MSG=b,c.getImg=function(a,b,c){var d="_"+(b||80)+"x"+(c||80)+".jpg",f=d+e(a);return a?a+f:"http://a.tbcdn.cn/mw/s/common/icons/nopic/nopic-"+b+".png"},c}),function(a){var b=namespace("notification");a.extendView({name:"pricebar",el:"div.totalprice",template:'<p>合计(不含运费): <em class="h price">￥0</em></p><button class="c-btn-orange c-btn-sub" type="submit">结算(<em class="num">0</em>)</button><input class="cartids" type="hidden" name="cart_ids" />',events:[["click",".totalprice button","_confirmOrder"]],orderLimit:20,plugins:{domevent:!0},_confirmOrder:function(c){c.preventDefault();var d=this.$el.find(".cartids").val();if(d){var e=this.$el.find(".num").text(),f=this.orderLimit;if(Number(e)>f)return b.simple("请选择计算的商品数小于"+f+"种"),void 0;a.navigation.push("!/awp/core/buy.htm",{type:"GET",data:{cartIds:d}})}else b.simple("请选择需要结算的商品")},render:function(){var a=this.template();this.$el.html(a)},setOrderLimit:function(a){this.orderLimit=a},setValues:function(a,b,c){this.$el.find(".price").html("￥"+a.toFixed(2)),this.$el.find(".num").text(b),this.$el.find(".cartids").val(c)},hide:function(){this.$el.hide()},show:function(){this.$el.show()},destory:function(){}})}(window.app),window.lib.define("app.cart.list.CartView",function(){var a=namespace("$"),b=namespace("app"),c=namespace("app.cart.CartUtils"),d=window.lib.config,e=namespace("message"),f=namespace("lib.notification"),g=window.lib.uri.getUrl,h=namespace("app.cart.mtop"),i=c.MSG,j=d.sysType,k=function(a){a.hide||(a.hide=!1),b.navigation.setButton(a)},l={contId:"#J_plugin_cart .bcont",cartIds:".toolbar .cartids",totalprice:".toolbar .totalprice",delt:"J_cart_del",checkall:"J_cart_selall",pricebar:null,temp:{winVal:null,listNum:0,startX:null,startY:null,dlist:null,lastclick:0},isThisInvokedIn:function(a){var b=(new Date).getTime(),c=this.temp.lastclick||0,d=b-c>a;return d&&(this.temp.lastclick=b),!d},selectShopAction:function(b){var c=this;if(!c.isThisInvokedIn(500)){var d=a(b.target),e=d.parents(".order").eq(0),f=e.find(".itemlist .icb"),g=d.hasClass("scb")?d:d.find(".scb"),h=g[0].checked,i=!h;g[0].checked=i,i?c.choose(f,!0):c.choose(f,!1)}},selectItemAction:function(b){var c=this;if(!c.isThisInvokedIn(500)){var d=a(b.target),e=d.parents(".order").eq(0),f=d.hasClass("icb")?d:d.find(".icb"),g=f[0].checked,h=!g;f[0].checked=h,h?c.onechoose(e):c.onedeselect(e),c.cal()}},focusItemAction:function(c){var d=this,e=a(c.target),f=e.val();b.scroll&&b.scroll.scrollToElement(e.parents("li")[0]),b.plugin.lazyload&&b.plugin.lazyload.check(),d.temp.winVal=f},changeItemAction:function(b){var c=this,d=c.temp.winVal,e=a(b.target),g=e.parents(".order").attr("groupid"),h=e.parents("li"),j=e.parents("ul").find("li"),k=h.attr("cartid"),l=[],m=Number(e.val()),n=Number(e.attr("max")),o=Number(e.attr("min"));if(!m||o>m||!/^[1-9]\d{0,5}$/.test(m))return e.val(d),f.simple(i.NUMBER),!1;if(m>n)return f.simple(i.INVENTOTY),e.val(d),!1;for(var p=j.length-1;p>=0;p--){var q=a(j[p]).attr("cartid");l.push(q)}c.updateBagCount(g,k,m,l)},clearInvalidItemAction:function(b){var c=this,d=a(b.target),e=d.parents("li").eq(0),g=e.attr("cartid"),h=[{groupId:"0",cartId:g,relatedCartIds:g}],j=f.confirm(i.DELONE,"",function(b){var d=a(b.target);d.hasClass("ok")&&c.delajax(h),this.hide()});j.show()},clearAllInvalidAction:function(b){var c=this,d=a(b.target),e=d.parents("ul").find("li"),g=[],h=f.confirm(i.DELALL,"",function(b){var d=a(b.target);if(d.hasClass("ok")){for(var f=0;f<e.length-1;f++){var h=a(e[f]).attr("cartid"),i={groupId:"0",cartId:h,relatedCartIds:h};g.push(i)}c.delajax(g)}this.hide()});h.show()},touchstartAction:function(a){var b=this,c=b.page(a,"touches").x,d=b.page(a,"touches").y;b.temp.startX=c,b.temp.startY=d},touchendAction:function(b){var c=this,d=a(b.target);"li"!==b.target.tagName&&(d=d.parents("li"));var e=c.page(b,"changedTouches").x,g=c.page(b,"changedTouches").y,h=Math.abs(c.temp.startX-e),j=Math.abs(c.temp.startY-g);if(h>50&&10>j){var k=d.find(".shade");k.length>0?k.show():d.append('<div class="shade"></div>');var l=d.attr("cartid"),m=d.parents(".order").eq(0),n=m.attr("groupid"),o=d.find(".qt").val(),p=f.confirm(i.DELONE,"",function(b){var e=a(b.target);if(e.hasClass("ok")){for(var f=d.parent("ul").find("li"),g=[],h=[],i=f.length-1;i>=0;i--){var j=a(f[i]),m=j.attr("cartid");g.push(m)}h=[{groupId:n,cartId:l,quantity:o,relatedCartIds:g.join(",")}],c.delajax(h),k.hide()}else d.find(".shade").hide();this.hide()});p.show()}},delAllAction:function(b){var c=this,d=c.temp.listNum,e=a(b.target);if(!e.hasClass("off")){if(!d)return f.simple("请选择要删除的商品"),void 0;var g=f.confirm("确认删除这"+d+"种商品？","",function(b){var d=a(b.target);d.hasClass("ok")&&c.delajax(c.temp.dlist),this.hide()});g.show()}},checkAllAction:function(b){var c=this,d=a(b.target),e=d.hasClass("off");e?c.checkAll(!1):c.checkAll(!0),c.cal()},page:function(a,b){var c=a[b][0];return{x:c.pageX,y:c.pageY}},choose:function(a,b){for(var c=this,d=0;d<a.length;d++)a[d].checked=b;c.cal()},onechoose:function(a){for(var b=a.find(".itemlist .icb"),c=a.find(".shop .scb"),d=!0,e=0;e<b.length;e++)b[e].checked===!1&&(d=!1);c[0].checked=d?!0:!1},onedeselect:function(a){var b=a.find(".shop .scb");b[0].checked=!1},cal:function(){for(var b=this,c=a(b.contId).find(".itemlist .icb"),d=0,e=0,f=!1,g=[],h="",i={},j=[],l=0;l<c.length;l++){var m=a(c[l]),n=m.parents(".itemlist").find("li"),o=m.attr("checked"),p=m.parents(".order").attr("groupid"),q=m.parents("li").attr("cartid");if(o){var r=m.parents("li").find(".subtotal"),s=parseFloat(r.attr("tprice"))||0,t=m.parents("li").eq(0).find(".qt").val(),u=m.parents("li").find(".shtotal");if(u[0])for(var v=0;v<u.length;v++)d+=parseFloat(a(u[v]).attr("tprice"))||0;d+=s,e++,f=!0;for(var w=[],x=n.length-1;x>=0;x--){var y=a(n[x]),z=y.attr("cartid");w.push(z)}i={cartId:q,groupId:p,quantity:t,relatedCartIds:w.join(",")},g.push(i),h=p,j.push(q)}}b.temp.dlist=g,e===l?(k({id:b.delt,"class":"on"}),k({id:b.checkall,"class":"off",text:"全不选"})):l>e&&e>0?(k({id:b.delt,"class":"on"}),k({id:b.checkall,"class":"on",text:"全选"})):0===e&&(k({id:b.delt,"class":"off"}),k({id:b.checkall,"class":"on",text:"全选"})),0===c.length&&b.hideOper(),b.pricebar.setValues(d,e,j),b.temp.listNum=e},checkAll:function(b){for(var c=a(this.contId).find(".c-f-checkbox"),d=0;d<c.length;d++)c[d].checked=b},updateBagCount:function(a,b,c,d){var e=this,g={groupId:a,cartId:b,quantity:c,relatedCartIds:d.join(",")};h.updateBagCount(g,function(a){var b=a.relatedGroup&&a.relatedGroup.itemList;b?e.quantityApp(b):f.simple(i.ERROR)})},delajax:function(c){var d=this,e={delList:c};h.batchDelBag(e,function(e){for(var f=e.relatedGroupList,g=c.length-1;g>=0;g--){var h,i=c[g],j=i.groupId,k=a(d.contId).find(".g"+j),l=i.cartId,m=a(d.contId).find(".c"+l),n=i.relatedCartIds,o=n.indexOf(",");"0"===j?(h=m.parent("ul").find("li").length,2===h?a(d.contId).find(".g0").remove():m.remove()):0>o?k.remove():(h=m.parent("ul").find("li").length,1===h?k.remove():m.remove())}if(f.length>0)for(var p=f.length-1;p>=0;p--){var q=f[p],r=a(d.contId).find(".c"+q.cartId),s=r.find(".subtotal"),t=q.tprice;s.text(t)}d.cal();var u=a(d.contId).find(".order").length;0>=u&&d.emptyCart(),setTimeout(function(){b.scroll&&b.scroll.refresh(),b.plugin.lazyload&&b.plugin.lazyload.check()},500)})},renderValidHtml:function(a){var b="";if(a&&a.length>0)for(var d=0;d<a.length;d++){var e=a[d],f=e.groupInfo,g=f.groupDesc,h=f.groupId,i=f.groupTitle||"",j=e.itemList;b+='<section class="order g'+h+'" groupid="'+h+'">',b+='<div class="shop">',b+='<div class="myscb"><input type="checkbox" class="c-f-checkbox green scb"',b+="></div>",b+='<div class="title">',b+="<h3>"+i+"("+j.length+")</h3>",b+="<p>";for(var k=0;k<g.length;k++)0!==k&&(b+=","),b+=g[k];b+="</p>",b+="</div>",b+=" </div>",b+='<ul class="itemlist">';for(var l=j.length-1;l>=0;l--){var m=j[l],n=m.itemDisplayPart,o=c.getImg(n.pic,120,120),p=n.quantity,q=n&&n.skuInfo||"",r=n.title,s=m.itemHiddenPart,t=s.cartId,u=s.itemId,v=s.maxQuantity,w=m.price,x=w.originalPrice,y=w.tprice,z=w.unitPrice,A=m.additionalDisplayPart["售后服务"];if(b+='<li class="c'+t+'" cartid="'+t+'" >',b+='<div class="myicb"><input type="checkbox" class="c-f-checkbox icb"></div>',b+='<div class="item">',b+='<a href="#" data-fragment="!/awp/core/detail.htm" data-itemid="'+u+'" class="pic fragment">',b+='<img class="lazy" data-src="'+o+'" src="http://a.tbcdn.cn/mw/s/common/icons/nopic/no-80.png">',b+="</a>",b+='<div class="desc">',b+='<a href="#" data-fragment="!/awp/core/detail.htm" data-itemid="'+u+'" class="fragment"><h4>'+r+"</h4></a>",b+='<p class="props">'+q+"</p>",b+='<div class="price">',b+='<del class="grey">',x!==z&&(b+="￥"+x),b+="</del>",b+='<div class="quantity">',b+='<span class="h">￥</span><em class="h subtotal" tprice="'+y+'" >'+z+"</em> x ",b+='<span class="txt"><input class="c-f-text qt" type="number" value="'+p+'" min="1" max="'+Number(v)+'">',b+="</span>",b+="</div>",b+="</div>",A)for(var B=A.split(","),C=0;C<B.length;C++){var D=B[C].split("："),E=D[0],F=D[1],G=Number(F);b+='<div class="price sub">',b+='<span class="grey">'+E+"</span>",b+='<div class="quantity">',b+='<span class="h">￥</span><em class="h shtotal" tprice="'+G*p+'" >'+F+'</em> x <span class="shNum">'+p+"</span>",b+="</div>",b+="</div>"}b+="</div>",b+="</div>",b+="</li>"}b+="</ul>",b+="</section>"}return b},renderInvalidHtml:function(a){var b="";if(a){var d=a.groupInfo.groupTitle,e=a.itemList;b+='<section class="order g0">',b+='<div class="shop">',b+='<div class="title">',b+="<h3>"+d+"</h3>",b+="</div>",b+=" </div>",b+='<ul class="itemlist">';for(var f=e.length-1;f>=0;f--){var g=e[f],h=g.itemDisplayPart,i=h.title,j=c.getImg(h.pic,120,120),k=g.itemHiddenPart.cartId,l=g.itemHiddenPart.itemId;b+='<li class="c'+k+'" cartid="'+k+'">',b+='<div class="item">',b+='<a href="#" data-fragment="!/awp/core/detail.htm" data-itemid="'+l+'" class="pic fragment">',b+='<img class="lazy" data-src="'+j+'" src="http://a.tbcdn.cn/mw/s/common/icons/nopic/no-80.png">',b+="</a>",b+='<div class="desc">',b+='<a href="#" data-fragment="!/awp/core/detail.htm" data-itemid="'+l+' " class="fragment"><h4>'+i+"</h4></a>",b+='<p class="props">宝贝失效，点击查看最新情况<span class="trash"></span></p>',b+="</div>",b+="</div>",b+="</li>"}b+='<li class="lose">',b+='<div class="c-btn btn-100 clearAll">清空全部失效宝贝</div>',b+="</li>",b+="</ul>",b+="</section>"}return b},bagListApp:function(b){var c=this,d=b&&b.validGroupList,e=b&&b.invalidGroup,f="";return!e&&d.length<=0?(c.emptyCart(),!1):(f+=c.renderValidHtml(d),f+=c.renderInvalidHtml(e),c.pricebar.setOrderLimit(b.orderLimit),a(c.contId).html(f),d.length<=0?c.hideOper():(k({id:c.delt,"class":"off"}),k({id:c.checkall,hide:!1})),void 0)},quantityApp:function(b){for(var c=this,d=b.length-1;d>=0;d--){for(var e=b[d],f=e.cartId,g=e.originalPrice,h=Number(e.tprice),i=e.unitPrice,j=a(c.contId).find(".c"+f),k=j.find("del"),l=j.find(".subtotal"),m=j.find(".shNum"),n=Number(j.find(".qt").val())||0,o=j.find(".shtotal"),p=0;p<o.length;p++){var q=a(o[p]),r=parseFloat(q.text())||0;q.attr("tprice",r*n)}m.text(n),l.attr("tprice",h),l.text(i),g!==i?k.text(g):k.text("")}c.cal()},hideOper:function(){var a=this;a.pricebar.hide(),k({id:a.delt,hide:!0}),k({id:a.checkall,hide:!0})},emptyCart:function(){var b=g({host:j+".taobao.com",path:""}),c=g({subdomain:"h5",path:"fav/index.htm"})+"#!goods/queryColGood-1",d=this,e=['<div class="empty-cart">','<div class="cart-logo">',"</div>",'<p class="message">你的购物车里没有宝贝</p>','<ul class="list">','<li><a href="'+b+'">去购物</a><span class="arrow right"></span></li>','<li><a href="'+c+'">查看我的收藏夹</a><span class="arrow right"></span></li>',"</div>"].join("");a(d.contId).html(e),d.hideOper()},errorTemp:function(){var b=g({host:j+".taobao.com",path:""}),c=this,d=e.render({type:"warn",msg:"请求异常，请稍后重试",opt:'<a href="'+b+'" style="color: #005A98;">点此去首页</a>'});a(c.contId).html(d)}};return l}),function(a){var b=window.app.cart,c=b.list.CartView,d=a.getView("pricebar"),e=b.CartUtils,f=window.notification,g=b.myCart,h=e.MSG;a.extendView({name:"cart",el:"div",template:'<div class="bcont"></div>',views:{pricebar:d},plugins:{domevent:!0},events:[["click","a[data-fragment].fragment","_clickHandler"],["tap",".shop .myscb","_selectShop"],["tap",".itemlist .myicb","_selectItem"],["click",".shop .scb",function(a){a.preventDefault()}],["click",".itemlist .icb",function(a){a.preventDefault()}],["focus",".qt","_focusItem"],["change",".qt","_changeItem"],["click",".trash","_clearInvalidItem"],["click",".clearAll","_clearAllInvalid"],["touchstart","li","_touchstart"],["touchend","li","_touchend"]],_clickHandler:function(b){b.preventDefault();var c=b.currentTarget,d=c.getAttribute("data-fragment");0===d.indexOf("!/awp/core/detail.htm")?a.navigation.push(d,{type:"GET",data:{id:c.getAttribute("data-itemid")}}):a.navigation.push(d)},_selectShop:function(a){a.preventDefault(),c.selectShopAction(a)},_selectItem:function(a){a.preventDefault(),c.selectItemAction(a)},_focusItem:function(a){c.focusItemAction(a)},_changeItem:function(a){c.changeItemAction(a)},_clearInvalidItem:function(a){c.clearInvalidItemAction(a)},_clearAllInvalid:function(a){c.clearAllInvalidAction(a)},_touchstart:function(a){c.touchstartAction(a)},_touchend:function(a){c.touchendAction(a)},render:function(){this._renderContent()},_renderContent:function(){var b=this.template();this.$el.attr("id","J_plugin_cart"),this.$el.html(b),this.bagList(),a.scroll&&a.scroll.scrollTo(0)},teardown:function(){this.views.pricebar.destory()},bagList:function(){var b={filterCItem:"false"},e=a.plugin.loading.show(),i=function(b){var g=b.bagList;g?(a.navigation.setButton({id:"J_cart_del",type:"func",text:"删除",hide:!0,handler:function(a){c.delAllAction(a)}}),a.navigation.setButton({id:"J_cart_selall",type:"func",text:"全选",hide:!0,handler:function(a){c.checkAllAction(a)}}),a.navigation.setToolbar({el:d.el}),d.render(),c.pricebar=d,c.bagListApp(g),setTimeout(function(){d.show()},500)):(c.errorTemp(),f.simple(h.ERROR)),a.plugin.loading.hide(e),setTimeout(function(){a.plugin.lazyload&&a.plugin.lazyload.check()},500)},j=function(b){f.simple(b.errMsg||h.ERROR),c.errorTemp(),a.plugin.loading.hide(e)};g.getCartList(b,i,j)}})}(window.app);!function(a){a.definePage({name:"awp-base-cart-htm",title:"购物车",route:"!\\/awp\\/base\\/cart\\.htm",resources:{js:["http://a.tbcdn.cn/g/mtb/lib-container/namespace.js","http://a.tbcdn.cn/g/mtb/lib-container/component.js","http://a.tbcdn.cn/g/mtb/lib-cart/0.0.1/cartDb.js","app-cart/0.0.10/cart.js"],css:["http://a.tbcdn.cn/g/mtb/lib-container/h5component.css","app-cart/0.0.10/cart.css"]},plugins:{smartbanner:!0,pagenotify:!0,dynamic:!0,lazyload:!0,scrollpos:!0},toolbar:{height:40},startup:function(){var b=this.view=a.getView("cart"),c=this;c.$el.append(b.$el),b.render()},show:function(){this._pagenotify&&this.startup()},teardown:function(){this.view&&this.view.teardown&&this.view.teardown()}})}(window.app);
})})();