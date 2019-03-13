
(function(){
    var url  = '//api.map.baidu.com/api?v=2.0&ak=CWoyBdGOdv7wavHj5iufrGvT';
    if(location.protocol == 'https:'){
        url += '&s=1';
    }
    document.write('<script type="text/javascript" src="'+url+'"></script>');
})()