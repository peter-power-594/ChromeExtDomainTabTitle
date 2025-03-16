(function( _w, _d ) {

	let _h = ( _w.location ? _w.location.host || '' : '' ).split( '.' );
	if ( ! _h.length ) {
		return;
	}
	// Check Domain Name Extension Suffix
	if ( _h.length > 1 && /com/.test( _h[ _h.length - 1 ] ) ) {
		_h.pop();
	}
	else {
		for ( let i = 1; i < 3; i++ ) {
			if ( _h[ _h.length - i ] && _h[ _h.length - i ].length < 5 ) {
				_h[ _h.length - i ] = _h[ _h.length - i ].toUpperCase();
			}			
		}
	}
	// Check Subdomain Prefix
	if ( _h[ 0 ] === 'www' ) {
		_h.shift();
	}
	// Capitalize Keywords by Default
	for ( let i = 0; i < _h.length; i++ ) {
		if ( _h[ i ].length > 3 ) {
			_h[ i ] = _h[ i ].toLowerCase().replace( /(^\S|[-|\s]\S)/g, function( a ) {
				return a.replace( /[^\w]/, '' ).toUpperCase();
			});
		}
	}
	var _t = _h.join( ' ' ),
		_s = ''; 
	_d.title = _t + ' | ' + _d.title;
	_s = _d.title; 

	new MutationObserver(function() {
		if ( _d.title !== _s ) {
			_s = _t + ' | ' + _d.title;
			_d.title = _s;
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
