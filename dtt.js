(function( _w, _d ) {

    var _t
      , _h = ( _w.location.host || '' ).split( '.' );
    if ( _h.length > 1 && /com/.test( _h[ _h.length - 1 ] ) ) {
        _h.pop();
    }
    if ( _h[ 0 ] === 'www' ) {
        _h.shift();
    }
    _t = _h.join( ' ' ).replace( /(?:^|\s)\S/g, function( a ) {
        return a.toUpperCase();
    });
    _d.title = _t;

    new MutationObserver(function() {
        if ( _d.title != _t ) {
            _d.title = _t;
        }
    }).observe(
        document.body
      , {
            attributes:    false
          , childList:     true
          , characterData: false
        }
    );

})( window, document );
