(function () {
    function getComboPart(url) {
        if (url.indexOf("http://") !== 0) {
            return url;
        }
        var prefix = app.config.resourceBase;
        if (url.indexOf(prefix) === 0) {
            return url.replace(prefix, '');
        }
    }

    app.config.resourceCombo = function (urls) {
        var comboArr = [], result = [],cacheLength = 0;
        function updateComboArr(){
            if(comboArr.length){
				if(comboArr.length===1){
					result.push(app.config.resourceBase + comboArr[0]);
				}else{
					result.push(app.config.resourceBase + "??" + comboArr.join(','));
				}
            }
            comboArr = [];
        }
        function addUrl(url){
            updateComboArr();
            result.push(url);
        }
        urls.forEach(function (url) {
            //TODO
            if(result.length == cacheLength){
                var cacheResult = window.lib.awp.read(url);
                if(cacheResult == 0){
                    cacheLength++;
                }else if(cacheResult == 1){
                    return;
                }
            }
            //是相对地址
            if (url.indexOf("./") === 0 || url.indexOf("/../") == 0) {
                var location = window.location.pathname;
                location = location.substr(0, location.lastIndexOf("/")) + url;
                addUrl(window.location.protocol + "//" + window.location.hostname + location);
            } else {
                var combopart = getComboPart(url);
                if (combopart) {
                    comboArr.push(combopart);
                } else {
                    addUrl(url);
                }
            }
        });
        updateComboArr();
        return result;
    }
})();