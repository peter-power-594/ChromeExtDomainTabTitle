(function( _w, _d ) {

	var _t,
		_h = ( _w.location.host || '' ).split( '.' );
	// Check Domain Name Extension Suffix
	if ( _h.length > 1 && /com/.test( _h[ _h.length - 1 ] ) ) {
		_h.pop();
	}
	else {
		if ( _h[ _h.length - 1 ] && _h[ _h.length - 1 ].length < 5 ) {
			_h[ _h.length - 1 ] = _h[ _h.length - 1 ].toUpperCase();
		}
		if ( _h[ _h.length - 2 ] && _h[ _h.length - 2 ].length < 5 ) {
			_h[ _h.length - 2 ] = _h[ _h.length - 2 ].toUpperCase();
		}
	}
	// Check Subdomain Prefix
	if ( _h[ 0 ] === 'www' ) {
		_h.shift();
	}
	// Capitalize Keywords by Default
	for ( let i = 0; i < _h.length; i++ ) {
		if ( _h[ i ].length > 4 ) {
			_h[ i ] = _h[ i ].toLowerCase().replace( /(^\S|[-|\s]\S)/g, function( a ) {
				return a.replace( /[^\w]/, '' ).toUpperCase();
			});
		}
	}
	_t = _h.join( ' ' ); 
	_d.title = _t;

	new MutationObserver(function() {
		if ( _d.title !== _t ) {
			_d.title = _t;
		}
	}).observe(
		_d.body, {
			attributes:	false,
			childList: true,
			subtree: true,
			characterData: false
		}
	);

})( window, document );
