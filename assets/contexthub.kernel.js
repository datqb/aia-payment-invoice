window.ContextHubKernelConfig = {
    "debug": true,
    "initializationTimeout": 2000,
    "stores": {}
    };
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2013 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

window.ContextHubJQ = window.jQuery.noConflict(true);
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint no-extend-native: 0, new-cap: 0 */

/**
 * globals
 * -------
 *
 * {@see Function.prototype.bind}
 */

(function() {
    'use strict';

    if (!Function.prototype.bind) {
        /**
         * Polyfill for Function.prototype.bind()
         *
         * @param {Function} that
         * @returns {Function}
         */
        Function.prototype.bind = function bind(that) {
            var target = this;
            var args = [].slice.call(arguments, 1);

            var bound = function() {
                var func;

                if (this instanceof bound) {
                    var emptyFunction = function() {};
                    emptyFunction.prototype = target.prototype;

                    var self = new emptyFunction();
                    var result = target.apply(self, args.concat([].slice.call(arguments)));

                    func = (Object(result) === result) ? result : self;
                } else {
                    func = target.apply(that, args.concat([].slice.call(arguments)));
                }

                return func;
            };

            return bound;
        };
    }

}());

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.debug}
 * {@see ContextHub.console.log}
 * {@see ContextHub.console.warn}
 * {@see ContextHub.console.info}
 * {@see ContextHub.console.error}
 * {@see ContextHub.console.debug}
 * {@see ContextHub.console.time}
 * {@see ContextHub.console.timeEnd}
 * {@see ContextHub.console.timeStamp}
 */

(function(window) {
    'use strict';

    window.ContextHub = window.ContextHub || {};

    /**
     * Returns func if ContextHub's debugger is turned on, empty function otherwise.
     *
     * @private
     * @param {Function} func - function
     * @param {Boolean} [alwaysReturn] - return function even if debug is turned off
     * @returns {Function}
     */
    var returnFunction = function(func, alwaysReturn) {
        return ((window.ContextHubKernelConfig.debug || alwaysReturn) && func) ? Function.prototype.bind.call(func, window.console) : function() {};
    };

    /**
     * Initializes ContextHub's logger at specific level ('info' by default).
     *
     * @private
     * @param {String} [requestedLevel] - one of logging levels: 'info' (default), 'debug' or 'all'
     */
    var overrideConsole = function(requestedLevel) {
        var original = window.console || {};
        var nothing = function() {};

        /* level 'all' provides: .log(), .warn(), .debug(), .info() */
        ContextHub.console = {
            log: returnFunction(original.log),
            warn: returnFunction(original.warn),
            info: returnFunction(original.info),
            error: returnFunction(original.error, true),
            debug: returnFunction(original.debug),
            time: returnFunction(original.time),
            timeEnd: returnFunction(original.timeEnd),
            timeStamp: returnFunction(original.timeStamp)
        };

        /* turn off specific loggers basing on selected level */
        var debugLevel = requestedLevel || 'info';

        /* level 'info' provides: .log(), .warn(), so disable other loggers */
        if (debugLevel === 'info') {
            ContextHub.console.info = nothing;
            ContextHub.console.debug = nothing;
        }

        /* level 'debug' provides: .debug(), .info(), so disable other loggers */
        if (debugLevel === 'debug') {
            ContextHub.console.log = nothing;
            ContextHub.console.warn = nothing;
        }
    };

    /**
     * Enables/disables ContextHub's logger if param is provided, otherwise just returns the current debug state.
     *
     * @param {Boolean} [enable] - if provided, enables/disables the logger
     * @param {String} [level] - one of logging levels: 'info' (default), 'debug' or 'all'
     */
    function debugToggle(enable, level) {
        /* change the debug state if argument is provided */
        if (typeof enable !== 'undefined') {
            window.ContextHubKernelConfig.debug = enable === true;
            overrideConsole(level);
        }

        /* return current debug state */
        return !!window.ContextHubKernelConfig.debug;
    }

    /* initialize ContextHub.console for the first time and export debug() method */
    overrideConsole();
    ContextHub.debug = debugToggle;

}(window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint no-eval: 0, no-use-before-define: 0 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Utils.JSON.stringify}
 * {@see ContextHub.Utils.JSON.parse}
 */

(function($, window) {
    'use strict';

    window.ContextHub = window.ContextHub || {};
    window.ContextHub.Utils = window.ContextHub.Utils || {};
    window.ContextHub.Utils.JSON = window.ContextHub.Utils.JSON || {};

    /**
     * Converts character to a unicode format.
     *
     * @private
     * @param {String} character - single character
     * @return {String} - character in unicode
     */
    var returnUnicode = function(character) {
        return '\\u' + ('0000' + character.charCodeAt(0).toString(16)).slice(-4);
    };

    /**
     * Quotes sensitive characters.
     *
     * @private
     * @param {String} str - string to quote
     * @return {String} - quoted string
     */
    var quoteString = function(str) {
        var sensitiveCharacters = /["\\\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var replacementMapping = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' };

        var escapeCharacter = function(character) {
            var mapped = replacementMapping[character];
            return mapped ? mapped : returnUnicode(character);
        };

        return '"' + str.replace(sensitiveCharacters, escapeCharacter) + '"';
    };

    /**
     * Converts date object to a string representation.
     *
     * @private
     * @param {Date} date - date object
     * @return {String} - serialized date
     */
    var serializeDate = function(date) {
        var year = date.getUTCFullYear();
        var month = ContextHub.Shared.pad(date.getUTCMonth() + 1);
        var day = ContextHub.Shared.pad(date.getUTCDate());
        var hours = ContextHub.Shared.pad(date.getUTCHours());
        var minutes = ContextHub.Shared.pad(date.getUTCMinutes());
        var seconds = ContextHub.Shared.pad(date.getUTCSeconds());
        var milliseconds = ContextHub.Shared.pad(date.getUTCMilliseconds(), 3);

        return '"' + year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds + 'Z"';
    };

    /**
     * Converts array to a string representation.
     *
     * @private
     * @param {Array} array - array input
     * @return {String} - serialized array
     */
    var serializeArray = function(array) {
        var result = [];

        for (var idx = 0; idx < array.length; idx++) {
            result.push(stringify(array[idx]) || 'null');
        }

        return '[' + result.join(',') + ']';
    };

    /**
     * Converts object to a string representation.
     *
     * @private
     * @param {Object} object - object
     * @return {String} - serialized object
     */
    var serializeObject = function(object) {
        var result = [];

        for (var item in object) {
            if (Object.prototype.hasOwnProperty.call(object, item)) {
                var type = typeof item;

                if (type !== 'number' && type !== 'string') {
                    continue;
                }

                var value = object[item];
                type = typeof value;

                if (type !== 'function' && type !== 'undefined') {
                    result.push(quoteString(item) + ':' + stringify(value));
                }
            }
        }

        return '{' + result.join(',') + '}';
    };

    /**
     * Polyfill for JSON.stringify()
     *
     * @param {Object} data - object
     * @return {String|undefined} - serialized object
     */
    var stringify = function(data) {
        var type = $.type(data);

        /* set proper type for arrays */
        if (type === 'object' && $.isArray(data)) {
            type = 'array';
        }

        /* serialize data using different methods basing on the type */
        switch (type) {
            case 'null':
            case 'boolean':
                return String(data);

            case 'undefined':
                return undefined;

            case 'array':
                return serializeArray(data);

            case 'number':
                return String(isFinite(data) ? data : 'null');

            case 'string':
                return quoteString(data);

            case 'date':
                return serializeDate(data);

            case 'regexp':
                /* not supported */
                return '{}';

            case 'function':
                /* not supported */
                return undefined;

            /* rest of the cases */
            case 'object':
            default:
                return serializeObject(data);
        }
    };

    /**
     * Polyfill for JSON.parse()
     *
     * @param {String} data - serialized object
     * @return {Object} - object
     */
    var parse = function(data) {
        /* sanitize malicious input */
        var unicodeExceptions = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        data = String(data).replace(unicodeExceptions, returnUnicode);

        /* quick matching to check if provided string is a serialized JSON object */
        var filtered = data
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        return (/^[\],:{}\s]*$/.test(filtered)) ? eval('(' + data + ')') : {};
    };

    /* check if JSON is natively supported by a browser */
    var nativeJSONSupported = window.JSON && JSON.stringify && JSON.parse;

    /**
     * JSON.stringify polyfill.
     *
     * @param {Object} data - json object
     * @return {String} - serialized object
     */
    ContextHub.Utils.JSON.stringify = nativeJSONSupported ? JSON.stringify : stringify;

    /**
     * JSON.parse polyfill.
     *
     * @type {JSON.parse}
     * @param {String} data - serialized json object
     * @return {Object} - parsed json object
     */
    ContextHub.Utils.JSON.parse = function(data) {
        var json;

        try {
            json = (nativeJSONSupported ? JSON.parse : parse)(data);
        } catch (e) {
            /* provided input data is not a json */
            json = {};
        }

        return json;
    };

}(ContextHubJQ, window));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* WARNING: Do not add your code to this file - it should stay as simple as possible */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Constants.EVENT_NAMESPACE}
 * {@see ContextHub.Constants.EVENT_ALL_STORES_READY}
 * {@see ContextHub.Constants.EVENT_STORES_PARTIALLY_READY}
 * {@see ContextHub.Constants.EVENT_STORE_REGISTERED}
 * {@see ContextHub.Constants.EVENT_STORE_READY}
 * {@see ContextHub.Constants.EVENT_STORE_UPDATED}
 * {@see ContextHub.Constants.PERSISTENCE_CONTAINER_NAME}
 * {@see ContextHub.Constants.SERVICE_RAW_RESPONSE_KEY}
 * {@see ContextHub.Constants.SERVICE_RESPONSE_TIME_KEY}
 * {@see ContextHub.Constants.SERVICE_LAST_URL_KEY}
 * {@see ContextHub.Constants.IS_CONTAINER_EXPANDED}
 */

ContextHub.console.log('[loading] contexthub.constants - ContextHub.constants.js');

(function($) {
    'use strict';

    /**
     * Declaration of ContextHub's constants ({@see ContextHub.Constants}).
     *
     * @class ContextHub.Constants
     */
    var constants = {
        /**
         * ContextHub's event namespace.
         *
         * @constant
         * @type {String}
         */
        EVENT_NAMESPACE: 'ch',

        /**
         * Indicates that all required stores are registered, initialized and ready to be consumed.
         *
         * @constant
         * @type {String}
         */
        EVENT_ALL_STORES_READY: 'all-stores-ready',

        /**
         * Indicates that not all stores were initialized within a given timeout.
         *
         * @constant
         * @type {String}
         */
        EVENT_STORES_PARTIALLY_READY: 'stores-partially-ready',

        /**
         * Fired when a store is registered.
         *
         * @constant
         * @type {String}
         */
        EVENT_STORE_REGISTERED: 'store-registered',

        /**
         * Indicates that stores is ready to work (is triggered immediately after registration, except JSONP stores - it's fired when data is fetched).
         *
         * @constant
         * @type {String}
         */
        EVENT_STORE_READY: 'store-ready',

        /**
         * Fired with every time store updates its persistence.
         *
         * @constant
         * @type {String}
         */
        EVENT_STORE_UPDATED: 'store-updated',

        /**
         * Persistence container name.
         *
         * @constant
         * @type {String}
         */
        PERSISTENCE_CONTAINER_NAME: 'ContextHubPersistence',

        /**
         * Store specific persistence key name where raw JSON result is stored.
         *
         * @constant
         * @type {String}
         */
        SERVICE_RAW_RESPONSE_KEY: '/_/raw-response',

        /**
         * Store specific timestamp indicating when JSON data was fetched.
         *
         * @constant
         * @type {String}
         */
        SERVICE_RESPONSE_TIME_KEY: '/_/response-time',

        /**
         * Store specific url of JSON service used during last call.
         *
         * @constant
         * @type {String}
         */
        SERVICE_LAST_URL_KEY: '/_/url',

        /**
         * Indicates whether ContextHub's UI is expanded.
         *
         * @constant
         * @type {String}
         */
        IS_CONTAINER_EXPANDED: '/_/container-expanded'
    };

    /* extend ContextHub.Constants as contexthub component itself can also add some keys during initialization */
    ContextHub.Constants = $.extend(true, ContextHub.Constants, constants);

    /* timestamp to check time required to parse ContextHub's code - timers check can be found in ContextHub.finalization.js */
    ContextHub.console.time('contexthub.js');
    ContextHub.console.timeStamp('contexthub.start');

}(ContextHubJQ));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* WARNING: Do not add your code to this file - it should stay as simple as possible */
/* WARNING: Constants defined here *are* deprecated. Those aliases can be removed at anytime. */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Constants.EVENT_INITIALIZED}
 * {@see ContextHub.Constants.EVENT_REGISTER}
 * {@see ContextHub.Constants.EVENT_DATA_UPDATE}
 * {@see ContextHub.Constants.CONTAINER_VISIBLE}
 * {@see ContextHub.Constants.EVENT_CONFIG_LOADED}
 */

ContextHub.console.log('[loading] contexthub.constants - ContextHub.constants.deprecated.js');

(function($) {
    'use strict';

    window.ContextHub = window.ContextHub || {};

    /* creating aliases for backwards compatibility */
    var constants = {
        /**
         * Indicates that all required stores are registered, initialized and ready to be consumed.
         *
         * @constant
         * @deprecated
         * @type {String}
         */
        EVENT_INITIALIZED: ContextHub.Constants.EVENT_ALL_STORES_READY,

        /**
         * Fired when a store is registered.
         *
         * @constant
         * @deprecated
         * @type {String}
         */
        EVENT_REGISTER: ContextHub.Constants.EVENT_STORE_REGISTERED,

        /**
         * Fired with every time store updates its persistence.
         *
         * @constant
         * @deprecated
         * @type {String}
         */
        EVENT_DATA_UPDATE: ContextHub.Constants.EVENT_STORE_UPDATED,

        /**
         * Indicates whether ContextHub's UI is expanded.
         *
         * @constant
         * @deprecated
         * @type {String}
         */
        CONTAINER_VISIBLE: ContextHub.Constants.IS_CONTAINER_EXPANDED,

        /**
         * Unused event name. Was indicating that config was loaded.
         *
         * @constant
         * @deprecated
         * @type {String}
         */
        EVENT_CONFIG_LOADED: ''
    };

    /* extending the definition of constants */
    ContextHub.Constants = $.extend(true, ContextHub.Constants, constants);

}(ContextHubJQ));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013-2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Shared.pad}
 * {@see ContextHub.Shared.timers.start}
 * {@see ContextHub.Shared.timers.finish}
 * {@see ContextHub.Shared.timestamp}
 * {@see ContextHub.Shared.uuid}
 */

(function($, window) {
    'use strict';

    window.ContextHub.Shared = window.ContextHub.Shared || {};

    /**
     * Prefixes given number with zeros to match requested length.
     *
     * @param {Number} number - given number
     * @param {Number} [length] - number of left hand side leading zeros
     * @return {String} - prefixed number
     */
    ContextHub.Shared.pad = function(number, length) {
        var requested = length || 2;
        var result = String(number);
        var diff = requested - result.length;

        if (diff > 0) {
            var padding = Math.pow(10, Math.min(diff, 20));
            result = String(padding).slice(1) + result;
        }

        return result;
    };

    /* time measurement helper */
    var timestamps = {};

    /**
     * Simple helper offering time duration measurement.
     *
     * @namespace ContextHub.Shared.timers
     */
    ContextHub.Shared.timers = {
        /* logs timestamp for a specified id */
        start: function(id) {
            var timerId = id || 'id' + Math.random();
            timestamps[timerId] = new Date().getTime();
            return timerId;
        },

        /* returns duration of a specified id */
        finish: function(id) {
            var past = timestamps[id];
            return past ? (new Date().getTime() - past) : 0;
        }
    };

    /**
     * Returns formatted (YYYY-mm-dd HH:MM:SS.sss) timestamp.
     *
     * @return {String} - timestamp
     */
    ContextHub.Shared.timestamp = function() {
        var date = new Date();
        var year = date.getYear() + 1900;
        var month = ContextHub.Shared.pad(date.getMonth() + 1);
        var day = ContextHub.Shared.pad(date.getDate());
        var hours = ContextHub.Shared.pad(date.getHours());
        var minutes = ContextHub.Shared.pad(date.getMinutes());
        var seconds = ContextHub.Shared.pad(date.getSeconds());
        var milliseconds = ContextHub.Shared.pad(date.getMilliseconds(), 3);

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    };

    /**
     * Generates pseudo-random uuid.
     *
     * @return {String} - uuid
     */
    ContextHub.Shared.uuid = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    /* logger needs to be here due to ContextHub.Shared.timestamp usage */
    ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.shared - ContextHub.Shared.js');

}(ContextHubJQ, window));

/* eslint new-cap: 0 */

/* log DOM ready event */
ContextHubJQ(function() {
    'use strict';

    ContextHub.console.log(ContextHub.Shared.timestamp(), '[event] DOM ready');
});

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2016 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Shared.CookieContainer.setItem}
 * {@see ContextHub.Shared.CookieContainer.getItem}
 * {@see ContextHub.Shared.CookieContainer.removeItem}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.shared - ContextHub.Shared.CookieContainer.js');

(function($, window) {
    'use strict';

    window.ContextHub.Shared = window.ContextHub.Shared || {};
    window.ContextHub.Shared.CookieContainer = {};

    /* namespace */
    var ns = window.ContextHub.Shared.CookieContainer;

    /**
     * Returns key/value hash.
     *
     * @private
     * @param {String} container - container name
     * @returns {Object} - key/value hash
     */
    var getKeyValues = function(container) {
        var content = ContextHub.Utils.Cookie.getItem(container.trim()) || '';
        var chunksArray = content.split(/\|/);
        var result = {};

        $.each(chunksArray, function(id, chunk) {
            var pair = chunk.match(/(^.*?):=(.*)/);

            if (pair && (pair.length === 3)) {
                pair.shift();

                var key = pair.shift();
                var value = pair.shift();

                result[key] = decodeURIComponent(value);
            }
        });

        return result;
    };

    /**
     * Sets or overrides given key/value pair inside of given container.
     *
     * @param {String} container - container name
     * @param {String} key - key name
     * @param {String|Number|null} value - value
     */
    ns.setItem = function(container, key, value) {
        var name = container.trim();
        var content = getKeyValues(name);
        var cookie = [];

        if (name.length <= 0) {
            return;
        }

        /* set/remove */
        if ((value === null) || (typeof value === 'undefined')) {
            delete content[key];
        } else {
            content[key] = value;
        }

        /* create a cookie value: encodeURIComponent(VAR1:=encodeURIComponent(VAL1)|VAR2:=encodeURIComponent(VAL2)|... */
        $.each(content, function(contentKey, contentValue) {
            cookie.push(contentKey + ':=' + encodeURIComponent(contentValue));
        });

        /* set cookie container */
        ContextHub.Utils.Cookie.setItem(name, cookie.join('|'));
    };

    /**
     * Returns a value of provided key stored inside of given container.
     *
     * @param {String} container - container name
     * @param {String} key - key name
     * @returns {String|undefined} - value
     */
    ns.getItem = function(container, key) {
        var content = getKeyValues(container);

        return content[key];
    };

    /**
     * Removes given key from provided container.
     *
     * @param {String} container - container name
     * @param {String} key - key name
     */
    ns.removeItem = function(container, key) {
        ns.setItem(container, key, null);
    };

}(ContextHubJQ, window));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.cookie.js');

(function($, window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    /* default cookie settings */
    var defaults = {
        path: '/',
        expires: undefined,
        domain: undefined,
        secure: false,
        trimUndefined: true
    };

    /**
     * Returns raw cookies.
     *
     * @private
     * @return {Array}
     */
    var getRawCookies = function() {
        return window.document.cookie ? window.document.cookie.split(/;/) : [];
    };

    /**
     * Parses input to get a cookie name.
     *
     * @private
     * @param {String} text
     * @return {String}
     */
    var parseCookieName = function(text) {
        return decodeURIComponent((text.split(/\=/)[0]).trim());
    };

    /**
     * Parses input to get a cookie value.
     *
     * @private
     * @param {String} text
     * @return {String}
     */
    var parseCookieValue = function(text) {
        return decodeURIComponent((text.split(/\=/).slice(1).join('=')).trim());
    };

    /**
     * Checks if item matches to a filter.
     *
     * @private
     * @param {String} item
     * @param {String|Array|Function|RegExp} filter
     * @return {Boolean}
     */
    var matchesFilter = function(item, filter) {
        var type = $.type(filter);

        if (type === 'object' && $.isArray(filter)) {
            type = 'array';
        }

        switch (type) {
            case 'regexp':
                return filter.test(item);

            case 'string':
                return item === filter;

            case 'function':
                return filter(item) === true;

            case 'array':
                var inArray = false;

                $(filter).each(function(idx, condition) {
                    inArray = matchesFilter(item, condition);
                    return !inArray;
                });

                return inArray;

            default:
                return false;
        }
    };

    /**
     * Returns array containing names of all cookies matching to a filter. Filter is optional.
     *
     * @param {String|Array|Function|RegExp} [filter]
     */
    var getKeys = function(filter) {
        var addAllKeys = typeof filter === 'undefined';
        var cookies = getRawCookies();
        var keys = [];

        $(cookies).each(function(idx, item) {
            var name = parseCookieName(item);

            if (name.length && ($.inArray(name, keys) === -1) && (addAllKeys || matchesFilter(name, filter))) {
                keys.push(name);
            }
        });

        return keys.sort();
    };

    /**
     * Sets cookie (key = value) using provided options or using {@see defaults}.
     *
     * @param {String} key
     * @param {String} value
     * @param {Object} [settings]
     * @return {Boolean|String}
     */
    var setItem = function(key, value, settings) {
        if (typeof key === 'undefined') {
            return false;
        }

        var type = $.type(value);
        var options = $.extend(true, {}, defaults, settings);
        var cookieValue = (options.trimUndefined && (type === 'undefined' || type === 'null')) ? '' : value;

        /* if expires is number (of days) - create a date object */
        switch ($.type(options.expires)) {
            case 'date':
                break;

            case 'number':
                var expires = new Date();
                expires.setDate(expires.getDate() + options.expires);
                options.expires = expires;
                break;

            default:
                options.expires = undefined;
        }

        /* create and set cookie */
        var cookie = [
            encodeURIComponent(key), '=', encodeURIComponent(cookieValue),
            options.expires ? ('; expires=' + options.expires.toUTCString()) : '',
            options.domain ? ('; domain=' + options.domain) : '',
            options.path ? ('; path=' + options.path) : '',
            options.secure ? '; secure' : ''
        ].join('');

        window.document.cookie = cookie;

        return cookie;
    };

    /**
     * Returns cookie value.
     *
     * @param {String} key
     * @return {String}
     */
    var getItem = function(key) {
        var cookies = getRawCookies();
        var result = null;

        /* iterates over cookie to find the requested one */
        $(cookies).each(function(idx, item) {
            var value = parseCookieValue(item);
            var element = parseCookieName(item);

            if (element === key) {
                result = value;
            }

            /* continue loop until result is null */
            return result === null;
        });

        return result;
    };

    /**
     * Returns all cookies matching to a filter. Filter can be a single string (cookie name), regular expression,
     * function or array with combined previously mentioned values. Filter is optional.
     *
     * @param {String|RegExp|Array|Function} [filter]
     * @return {Object}
     */
    var getAllItems = function(filter) {
        var cookies = {};

        $(getKeys(filter)).each(function(idx, key) {
            var value = getItem(key);
            var type = $.type(value);

            if (type !== 'undefined' && type !== 'null') {
                cookies[key] = value;
            }
        });

        return cookies;
    };

    /**
     * Returns {@code true} if requested cookie exists.
     *
     * @param {String} key
     * @return {Boolean}
     */
    var exists = function(key) {
        return getItem(key) !== null;
    };

    /**
     * Removes a cookie.
     *
     * @param {String} key
     * @param {Object} [options]
     */
    var removeItem = function(key, options) {
        setItem(key, '', $.extend({}, options, { expires: -1 }));
    };

    /**
     * Removes all cookies matching to a filter.
     *
     * @param {String|Array|Function|RegExp} filter
     * @param {Object} [options]
     */
    var vanish = function(filter, options) {
        $(getKeys(filter)).each(function(idx, key) {
            removeItem(key, options);
        });
    };

    /**
     * Public interface for a ContextHub.Utils.Cookie module.
     *
     * @namespace ContextHub.Utils.Cookie
     */
    ContextHub.Utils.Cookie = {
        setItem: setItem,
        getItem: getItem,
        getAllItems: getAllItems,
        getKeys: getKeys,
        exists: exists,
        removeItem: removeItem,
        vanish: vanish
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint no-use-before-define: 0 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Utils.JSON.tree.sanitizeKey}
 * {@see ContextHub.Utils.JSON.tree.setItem}
 * {@see ContextHub.Utils.JSON.tree.getItem}
 * {@see ContextHub.Utils.JSON.tree.removeItem}
 * {@see ContextHub.Utils.JSON.tree.getKeys}
 * {@see ContextHub.Utils.JSON.tree.cleanup}
 * {@see ContextHub.Utils.JSON.tree.addAllItems}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.json.js');

(function($, window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    /**
     * Sanitizes provided key (trims all leading blank characters, replaces several '/' to one '/')
     *
     * @private
     * @param {String} key
     * @return {Array|null}
     */
    var sanitizeKey = function(key) {
        var result = null;

        /* accept only string */
        if (typeof key === 'string') {
            result = key.split(/(?:\s*\/+\s*)+/);

            if (result[0] === '') {
                result.shift();
            }

            if (result.length && (result[result.length - 1] === '')) {
                result.pop();
            }
        }

        return result;
    };

    /**
     * Adds a pair key/value to a tree. Original tree is not modified, only returned tree contains new key/value.
     *
     * @param {Object} tree
     * @param {String} key
     * @param {Object} value
     * @param {Boolean} [copyTree]
     * @return {Object}
     */
    var setItem = function(tree, key, value, copyTree) {
        key = sanitizeKey(key);

        if (copyTree) {
            tree = $.extend(true, {}, tree);
        }

        /* add a key/value if key isn't empty */
        if (key) {
            var traverse = tree;
            var node = {};

            /* find requested branch in the tree */
            $.each(key, function(idx, item) {
                node = traverse;
                var type = $.type(traverse[item]);

                if (type !== 'object' && type !== 'array') {
                    traverse[item] = {};
                }

                traverse = traverse[item];
            });

            /* set value */
            node[key.slice(-1)] = value;
        }

        return tree;
    };

    /**
     * Returns a value (or null) of requested key in provided tree.
     *
     * @param {Object} tree
     * @param {String} key
     * @return {Object|null}
     */
    var getItem = function(tree, key) {
        var value = null;
        key = sanitizeKey(key);

        if (key) {
            value = tree;

            /* traverse the tree to find a value */
            for (var x = 0; x < key.length; x++) {
                value = value[key[x]];

                if ((value === null) || (typeof value === 'undefined')) {
                    value = null;
                    break;
                }
            }
        }

        return value;
    };

    /**
     * Removes requested key (or branch) from a tree. Original tree is not modified, only returned tree is updated.
     *
     * @param {Object} tree
     * @param {String} key
     * @param {Boolean} [copyTree]
     * @return {Object}
     */
    var removeItem = function(tree, key, copyTree) {
        key = sanitizeKey(key);

        if (copyTree) {
            tree = $.extend(true, {}, tree);
        }

        if (key) {
            var validTypes = { object: true, array: true };
            var traverse = tree;
            var branches = [ tree ];

            /* traverse the tree to find a branch which is requested */
            $.each(key.slice(0, -1), function(idx, item) {
                traverse = traverse[item];
                branches.push(traverse);
                return validTypes[$.type(traverse)] === true;
            });

            /* if branch exists, remove it and cleanup the remaining tree */
            if (traverse) {
                delete traverse[key.slice(-1)];

                /* check if given branch became empty and can be removed as well */
                key.pop();
                branches.pop();

                /* traverse to the root of the tree and check branches on the way */
                while (branches && key && (branches.length > 0) && (key.length > 0)) {
                    var needle = key.pop();
                    traverse = branches.pop();

                    /* check given value */
                    var value = traverse[needle];
                    var type = $.type(value);

                    /* remove branch if it's empty */
                    if (((type === 'object') || (type === 'array')) && $.isEmptyObject(value)) {
                        delete traverse[needle];
                    } else {
                        /* stop traversing if given branch is not empty as its parent won't be empty anyways */
                        break;
                    }
                }
            }
        }

        return tree;
    };

    /**
     * Checks if element is considered as invalid (and should not be parsed).
     *
     * @param {Object} element - element
     * @returns {Boolean} - true if given element is invalid
     */
    var forbiddenElement = /^\[object (DIV|DOM|CSS|HTML|NamedNode|Node|Window)/;

    var isInvalidElement = function(element) {
        if (element) {
            if (element instanceof window.Node) {
                return true;
            }

            if ((element instanceof $) || (typeof element.css === 'function')) {
                return true;
            }

            if ((typeof element.toString === 'function') && forbiddenElement.test(element.toString())) {
                return true;
            }
        }

        return false;
    };

    /**
     * Returns all keys of a provided tree. Parameters 'parent' and 'order' are optional.
     *
     * @param {Object} tree - tree
     * @param {String} [parent] - generated key prefix
     * @param {Function} [order] - custom comparison function
     * @param {Boolean} [skipEmpty] - skips empty nodes
     * @param {Number} [level] - current tree depth level
     */
    var getKeys = function(tree, parent, order, skipEmpty, level) {
        parent = parent || '/';
        level = level || 0;
        var result;
        var keys = [];
        var type = $.type(tree);

        if ((type === 'object') && isInvalidElement(tree)) {
            type = 'invalid';
        }

        if ((type === 'object') || (type === 'array')) {
            if (skipEmpty) {
                tree = ContextHub.Utils.JSON.tree.cleanup(tree);
            }

            /* iterate over tree items */
            for (var key in tree) {
                if (!tree.hasOwnProperty(key)) {
                    continue;
                }

                var value = tree[key];
                var leaf = parent + key;
                var valueType = $.type(value);

                keys.push(leaf);

                /* make sure that invalid elements (like: dom, $, window, etc) won't be parsed */
                if ((valueType === 'object') && isInvalidElement(value)) {
                    valueType = 'invalid';
                }

                /* if item is object or array, perform recursive call to get it's keys as well */
                if ((valueType === 'object') || (valueType === 'array')) {
                    $.merge(keys, getKeys(value, leaf + '/', null, skipEmpty, level + 1));
                }
            }
        }

        /* sort keys only once - at the last call of getKeys */
        if (level === 0) {
            result = (typeof order === 'function') ? keys.sort(order) : keys.sort();
        } else {
            result = keys;
        }

        return result;
    };

    /**
     * Cleanups provided tree. Original tree is not modified, only returned tree is updated.
     * This method checks values of each branch and removes ones holding only empty objects ([], {}, null, undefined).
     *
     * @param {Object} tree
     * @param {Boolean} [copyTree]
     * @return {Object}
     */
    var cleanup = function(tree, copyTree) {
        if (copyTree) {
            tree = $.extend(true, {}, tree);
        }

        /* get all keys (from the innermost to the most shallow: /a/b/c, /a/b, /a) */
        var keys = getKeys(tree, null, function(a, b) {
            var aa = a.split(/\//).length;
            var bb = b.split(/\//).length;

            if (aa !== bb) {
                return (aa > bb) ? -1 : 1;
            }

            return (a === b) ? 0 : ((a > b) ? 1 : -1);
        });

        /* iterate over array of keys, and remove ones holding only empty objects */
        $.each(keys, function(idx, item) {
            var value = getItem(tree, item);
            var type = $.type(value);

            /* remove empty objects */
            if ((type === 'object' || type === 'array') && $.isEmptyObject(value)) {
                tree = removeItem(tree, item);
            }
        });

        return tree;
    };

    /**
     * Adds to trees. Original tree is not modified, only returned tree is updated.
     *
     * @param {Object} tree
     * @param {Object} secondTree
     * @return {Object}
     */
    var addAllItems = function(tree, secondTree) {
        return $.extend(true, {}, tree, secondTree);
    };

    /**
     * Public interface of ContextHub.Utils.JSON
     *
     * @namespace ContextHub.Utils.JSON
     */
    $.extend(ContextHub.Utils.JSON, {
        tree: {
            sanitizeKey: sanitizeKey,
            setItem: setItem,
            getItem: getItem,
            removeItem: removeItem,
            getKeys: getKeys,
            cleanup: cleanup,
            addAllItems: addAllItems
        }
    });

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint no-use-before-define: 0, no-unused-vars: 0 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.eventing.js');

(function($, window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    /* scheduling a job */
    var scheduleJob = (function() {
        var method = $.grep([
                window.requestAnimationFrame,
                window.msRequestAnimationFrame,
                window.mozRequestAnimationFrame,
                window.webkitRequestAnimationFrame,
                window.oRequestAnimationFrame
            ], $.isFunction)
            .shift();

        if (!method) {
            var lastExecution = 0;

            method = function(callback) {
                var currentTime = new Date().getTime();
                var defer = Math.max(0, 16 - (currentTime - lastExecution));
                var job = window.setTimeout(function() {
                        callback(currentTime + defer);
                    }, defer);

                lastExecution = currentTime + defer;

                return job;
            };
        }

        return method;
    })();

    /* cancelling the job */
    var unscheduleJob = (function() {
        var method = $.grep([
                window.cancelAnimationFrame,
                window.cancelRequestAnimationFrame,
                window.msCancelRequestAnimationFrame,
                window.mozCancelRequestAnimationFrame,
                window.webkitCancelRequestAnimationFrame,
                window.oCancelRequestAnimationFrame
            ], $.isFunction)
            .shift();

        if (!method) {
            method = function(job) {
                window.clearTimeout(job);
            };
        }

        return method;
    })();

    /* Keeps a list of event names triggered in past */
    var eventHistory = {};

    /* List of currently handled events */
    var handledEvents = {};

    /**
     * Adds event 'channel' to it's queue. Object 'data' should contain element 'key' to distinguish unique events.
     *
     * @param {String} channel
     * @param {Object} data
     * @param {Object} options
     */
    var trigger = function(channel, data, options) {
        channel = (channel || '').replace(/^ *| *$/g, '');

        if (channel.length) {
            /* create a new event */
            options = options || {};

            if (!options.hasOwnProperty('defer')) {
                options.defer = this.config.defer;
            }

            addToQueue.call(this, this.config.namespace, {
                channel: channel,
                data: data,
                defer: options.defer,
                _: options._ || {}
            });
        }
    };

    /**
     * Internal method to add event to a queue and update it's execution time if necessary.
     *
     * @private
     * @param {String} namespace
     * @param {Object} userEvent
     */
    var addToQueue = function(namespace, userEvent) {
        /* get current value */
        var key = '/' + namespace + '/' + userEvent.channel;
        var channelEvents = ContextHub.Utils.JSON.tree.getItem(this.queue, key) || {};

        /* initial values */
        if (!channelEvents.hasOwnProperty('executeAt')) {
            channelEvents.executeAt = null;
        }

        if (!channelEvents.hasOwnProperty('data')) {
            channelEvents.data = [];
        }

        for (var item in userEvent._) {
            if (userEvent._.hasOwnProperty(item) && (typeof channelEvents[item] === 'undefined')) {
                channelEvents[item] = userEvent._[item];
            }
        }

        /* update channel - change execution time if given event should be executed immediately or earlier than it was previously scheduled */
        var executeAt = new Date().getTime() + userEvent.defer;

        if (!channelEvents.executeAt || (userEvent.defer === 0) || (channelEvents.executeAt > executeAt)) {
            channelEvents.executeAt = executeAt;
        }

        if (!$.isEmptyObject(userEvent.data)) {
            channelEvents.data.push(userEvent.data);
        }

        /* save */
        this.queue = ContextHub.Utils.JSON.tree.setItem(this.queue, key, channelEvents);
        this.eventingCounter = userEvent.defer ? this.eventingCounter : 0;

        /* check if queue was empty and start eventing monitor if needed */
        var startEventingMonitor = this.queueIsEmpty === true;
        this.queueIsEmpty = false;

        if (startEventingMonitor) {
            this.eventingMonitor();
        }
    };

    /**
     * Returns event queue.
     *
     * @this ContextHub.Utils.Eventing
     * @return {Object}
     */
    var getQueue = function() {
        return this.queue;
    };

    /**
     * Adds given item to an array.
     *
     * @private
     * @param {Object} where
     * @param {Object} item
     */
    var addItemTo = function(where, item) {
        where.list.push(item.key);
        where.hash[item.key] = item;
    };

    /**
     * Optimizes event removing redundant actions (like indirect values of the same key).
     *
     * @private
     * @param {Object} event
     * @return {Object}
     */
    var optimizeEvent = function(event) {
        var optimized = $.extend(true, {}, event, { data: [] });
        var data = {};

        var updateData = function(entry, idx1, idx2) {
            var entryKey = entry.key || ('temp' + Math.random());
            var previous = data[entryKey];
            var old = (previous || {}).old || null;

            /* update data */
            data[entryKey] = $.extend(true, {}, entry);
            data[entryKey]._idx = parseFloat(idx1 + '.' + (idx2 || 0));

            /* update old value if we are overwriting previously processed data */
            if (previous) {
                data[entryKey].old = old;
            }
        };

        /* reduce unnecessary actions */
        for (var idx = 0; idx < event.data.length; idx++) {
            var item = event.data[idx];

            /* multiple updates? */
            var oldKeys = ContextHub.Utils.JSON.tree.getKeys(item.old);
            var newKeys = ContextHub.Utils.JSON.tree.getKeys(item.value);

            if (oldKeys.length || newKeys.length) {
                var keyPrefix = (item.key === '/') ? '' : item.key;
                var counter = 1;
                var x;
                var key;

                /* old elements */
                for (x = 0; x < oldKeys.length; x++, counter++) {
                    key = oldKeys[x];

                    updateData({
                        key: keyPrefix + key,
                        value: null,
                        old: ContextHub.Utils.JSON.tree.getItem(item.old, key),
                        action: 'remove'
                    }, idx, counter);
                }

                /* new elements */
                for (x = 0; x < newKeys.length; x++, counter++) {
                    key = newKeys[x];

                    updateData({
                        key: keyPrefix + key,
                        value: ContextHub.Utils.JSON.tree.getItem(item.value, key),
                        old: ContextHub.Utils.JSON.tree.getItem(item.old || {}, key),
                        action: 'set'
                    }, idx, counter);
                }
            } else {
                /* indicates if a given item can be optimized (contains key that is not internal "_" and action is set) */
                var canBeOptimized = !!(item.key && item.action) && !/^\/_\//.test(item.key);
                var previousOccurrence = data[item.key] || {};

                /* check if previous occurrence in the queue has the same value as current one */
                if (canBeOptimized && (previousOccurrence.old === item.value)) {
                    delete data[item.key];
                } else {
                    updateData(item, idx);
                }
            }
        }

        /* sort the result to maintain the original order */
        data = $.map(data, function(entry) { return entry; })
            .sort(function(a, b) {
                return a._idx - b._idx;
            });

        /* prepare a list of modified keys for easier data manipulation (list - good for iteration, hash - good for O(1) access) */
        var keys = {
            set: { list: [], hash: {} },
            removed: { list: [], hash: {} },
            all: { list: [], hash: {} }
        };

        /* iterate over data set and create data.keys object (with properties: all, set, removed) */
        $.each(data, function(nr, entry) {
            /* remove sorting index */
            delete entry._idx;

            /* items with key and action are added to a "keys" property (to sort out items by action: removed, set, all) */
            if (entry.key && entry.action) {
                addItemTo(this.keys.all, entry);

                if (entry.action === 'set') {
                    addItemTo(this.keys.set, entry);
                }

                if (entry.action === 'remove') {
                    addItemTo(this.keys.removed, entry);
                }
            }
        }.bind({ keys: keys }));

        /* overwrite data property and set information regarding keys */
        optimized.data = data;
        optimized.keys = keys;

        return optimized;
    };

    /**
     * Returns true if specified event was triggered in past. Useful when one want to check if event was triggered before
     * .on() trap was set. Allows to avoid endless waiting if specified event is triggered only once.
     *
     * @param {String} eventName - event name
     * @return {boolean} true if specified event was already triggered
     */
    var alreadyTriggered = function(eventName) {
        var key = eventName;

        /* add the namespace if needed */
        if (key.indexOf(this.config.namespace + '-') !== 0) {
            key = this.config.namespace + '-' + key;
        }

        /* drop the selector if present */
        if (key.indexOf('.') !== -1) {
            key = key.split(/\./).shift();
        }

        return eventHistory[key] === true;
    };

    /**
     * Returns the top window to broadcast to
     * @returns {null}
     */
    var getTopWindowBroadcast = function() {
        if (!this.windowBroadcast.initialized) {
            var w = window;
            var parent = window.parent;
            try {
                while (w.location.origin === parent.location.origin) {
                    w = parent;
                    parent = parent.parent;
                    if ( w === window.top) {
                        break;
                    }
                }
            } catch (e) {
                // ignore SecurityError
            }
            try {
                this.windowBroadcast.top = (this.config.broadcast === w) ? null : w;
            } catch(e) {
                // ignore SecurityError
            }
            this.windowBroadcast.initialized = true;
        }
        return this.windowBroadcast.top;
    };

    /**
     * Fires event (if channel is "namespace:one:two" three events will get fired: "namespace:one:two", "namespace:one"
     * and "namespace" to allow listeners decide to which namespace they should bind their handlers).
     *
     * @private
     * @param {String} channelName
     * @param {Object} event
     */
    var fireEvent = function(channelName, event) {
        var name = this.config.namespace + '-' + channelName;
        var duration = event.duration ? '(' + event.duration + ') ' : '';
        var debugEnabled = ContextHub.debug();
        var eventBroadcast = $(this.config.broadcast);
        var topWindowBroadcast = getTopWindowBroadcast.call(this);

        /* optimize event's data and set a name */
        event = optimizeEvent(event);
        event.event = name;

        /* overlay event data if needed */
        if (event.overlay) {
            event = $.extend(true, event, event.overlay);
        }

        /* remove event from the queue */
        delete (this.queue[this.config.namespace] || {})[channelName];
        this.queueIsEmpty = $.isEmptyObject(this.queue[this.config.namespace]);

        /* should we trigger event if data is empty? */
        if (!event.muteWhenNoData || (event.muteWhenNoData && (event.data.length > 0))) {
            /* trigger event (several events will get triggered - see method's description) */
            for (var namespace = name.split(/:/), currentChannel = channelName.split(/:/), chunk = namespace.length; chunk > 0; chunk--) {
                event.channel = currentChannel.slice(0, chunk).join(':');

                /* fire event */
                var group = namespace.slice(0, chunk).join(':');
                eventBroadcast.trigger(group, event);

                /* broadcast to window.top if ContextHub is using different broadcast */
                if (topWindowBroadcast && topWindowBroadcast.document) {
                    /* externalEvent handler can reach data by accessing: event.originalEvent.data */
                    var externalEvent = topWindowBroadcast.document.createEvent('Event');
                    externalEvent.initEvent(group, true, true);
                    externalEvent.data = event;
                    topWindowBroadcast.dispatchEvent(externalEvent);
                }

                /* low level debug (debugEnabled used to avoid redundant call in case debug is disabled) */
                if (debugEnabled) {
                    ContextHub.console.debug(ContextHub.Shared.timestamp(), group, '-', event);
                }

                /* memorize, that it was executed already */
                eventHistory[group] = true;
            }

            ContextHub.console.log(ContextHub.Shared.timestamp(), '[event]', name, duration + '-', event);
        }
    };

    /**
     * Eventing loop, it's called every 16ms (with skipping to avoid throttling on heavy loaded computers) to
     * make website highly responsive (60fps). It fires events at scheduled time. Eventing can be paused and later resumed.
     * If queue is empty, eventing monitor gets suspended and initialized again when new event arrives.
     *
     * @this ContextHub.Utils.Eventing
     * @private
     */
    var eventingMonitor = function() {
        if (!this.running || this.queueIsEmpty) {
            return;
        }

        /* event throttling - execute monitor's routines at every n-th call (n * 16 ms) */
        if ((this.eventingCounter++ % this.periodicity) === 0) {
            $.each(this.queue[this.config.namespace] || {}, function(name, channel) {
                if (!channel.paused && new Date().getTime() > channel.executeAt) {
                    fireEvent.call(this, name, channel);
                }
            }.bind(this));
        }

        scheduleJob(this.eventingMonitor);
    };

    /**
     * Enables eventing (while eventing is disabled, events are queued).
     *
     * @this ContextHub.Utils.Eventing
     */
    var enableEventing = function() {
        this.running = true;
        this.eventingMonitor();
    };

    /**
     * Disabled eventing (new events will be queued).
     *
     * @this ContextHub.Utils.Eventing
     */
    var disableEventing = function() {
        this.running = false;
    };

    /**
     * Checks if eventing is running.
     *
     * @this ContextHub.Utils.Eventing
     */
    var isRunning = function() {
        return this.running;
    };

    /**
     * Clears eventing queue.
     *
     * @this ContextHub.Utils.Eventing
     */
    var clearQueue = function() {
        this.queue = {};
    };

    /**
     * Sets attribute/value pair for a given channel.
     *
     * @private
     * @this ContextHub.Utils.Eventing
     */
    var setAttribute = function(channel, attribute, value) {
        this.queue = ContextHub.Utils.JSON.tree.setItem(this.queue, '/' + this.config.namespace + '/' + channel + '/' + attribute, value);
    };

    /**
     * Returns attribute of a given channel.
     *
     * @private
     * @this ContextHub.Utils.Eventing
     */
    var getAttribute = function(channel, attribute) {
        return ContextHub.Utils.JSON.tree.getItem(this.queue, '/' + this.config.namespace + '/' + channel + '/' + attribute);
    };

    /**
     * Flushes all events of a given channel.
     *
     * @this ContextHub.Utils.Eventing
     */
    var flush = function(channel) {
        setAttribute.call(this, channel, 'executeAt', 0);
    };

    /**
     * Pauses eventing of a given channel.
     *
     * @this ContextHub.Utils.Eventing
     */
    var pause = function(channel) {
        setAttribute.call(this, channel, 'paused', true);
    };

    /**
     * Resumes eventing of a given channel.
     *
     * @this ContextHub.Utils.Eventing
     */
    var resume = function(channel) {
        setAttribute.call(this, channel, 'paused', undefined);
    };

    /**
     * Checks if eventing is paused for a given channel.
     *
     * @this ContextHub.Utils.Eventing
     */
    var isPaused = function(channel) {
        return getAttribute.call(this, channel, 'paused') === true;
    };

    /**
     * Splits name by space characters and adds specified namespace to each element if necessary. Returns back string
     * with space-separated elements (prefixed with namespace).
     *
     * @private
     * @param {String|Array} name - single event name or a list
     * @param {String} namespace - namespace
     * @param {String} selector - selector
     * @return {String}
     */
    var addNamespace = function(name, namespace, selector) {
        var eventNameSuffix = selector ? ('.' + selector) : '';
        var events = (typeof name === 'string') ? name.split(/ /) : name;

        for (var x = 0; x < events.length; x++) {
            var item = events[x];

            /* add a namespace if needed */
            if (item.indexOf(namespace + '-') !== 0) {
                events[x] = namespace + '-' + item + eventNameSuffix;
            }
        }

        return events.join(' ');
    };

    /**
     * Binds handler for a specific event name (containing eventing namespace).
     *
     * @this ContextHub.Utils.Eventing
     * @param {String|Array} name - event name
     * @param {Function} handler - event handler
     * @param {String} [selector] - selector
     * @param {Boolean} [triggerForPastEvents] - if handler should be called also if a given even was triggered in the past
     */
    var on = function(name, handler, selector, triggerForPastEvents) {
        name = addNamespace(name, this.config.namespace, selector);

        /* bind event handler */
        $(this.config.broadcast).on(name, handler);
        handledEvents[name] = true;

        /* execute handler if event was already triggered in past */
        if (triggerForPastEvents) {
            var executeHandler = false;
            var context = this;

            $.each(name.split(/ /), function(idx, group) {
                executeHandler = alreadyTriggered.call(context, group);
                return executeHandler !== true;
            });

            if (executeHandler) {
                handler();
            }
        }
    };

    /**
     * Binds handler for a specific event name (containing eventing namespace) for one time execution.
     *
     * @this ContextHub.Utils.Eventing
     * @param {String|Array} name - event name
     * @param {Function} handler - event handler
     * @param {String} [selector] - selector
     * @param {Boolean} [triggerForPastEvents] - if handler should be called also if a given even was triggered in the past
     */
    var once = function(name, handler, selector, triggerForPastEvents) {
        var executeHandler = false;
        name = addNamespace(name, this.config.namespace, selector);

        /* execute handler if event was already triggered in past */
        if (triggerForPastEvents) {
            var context = this;

            $.each(name.split(/ /), function(idx, group) {
                executeHandler = alreadyTriggered.call(context, group);
                return executeHandler !== true;
            });
        }

        if (executeHandler) {
            handler();
        } else {
            /* bind event handler for one time execution */
            $(this.config.broadcast).one(name, handler);
            handledEvents[name] = true;
        }
    };

    /**
     * Unbinds handler for a specific event name (containing eventing namespace).
     *
     * @this ContextHub.Utils.Eventing
     * @param {String|Array} name - event name
     * @param {String} selector - selector
     */
    var off = function(name, selector) {
        name = addNamespace(name, this.config.namespace, selector);

        /* unbind event handler */
        $(this.config.broadcast).off(name);
        delete handledEvents[name];
    };

    /**
     * Unbinds all event handlers.
     */
    var unbindAllHandlers = function() {
        for (var eventName in handledEvents) {
            if (handledEvents.hasOwnProperty(eventName)) {
                ContextHub.eventing.off(eventName);
            }
        }

        handledEvents = {};
    };

    /**
     * Constructs a ContextHub.Utils.Eventing.
     *
     * @this ContextHub.Utils.Eventing
     * @namespace ContextHub.Utils.Eventing
     * @param {Object} config
     * @return {Object}
     * @constructor
     */
    ContextHub.Utils.Eventing = function(config) {
        this.config = $.extend(true, {}, ContextHub.Utils.Eventing.defaultConfig, config);
        this.eventingCounter = 0;
        this.periodicity = Math.floor(Math.max(16, this.config.periodicity) / 16);
        this.eventingMonitor = eventingMonitor.bind(this);

        this.windowBroadcast = {
            top: null,
            initialized: false
        };

        /* clear eventing queue */
        clearQueue.call(this);

        /* enable eventing if autoStart is set */
        if (this.config.autoStart) {
            enableEventing.call(this);
        } else {
            disableEventing.call(this);
        }

        /* public interface */
        return {
            log: this.log,
            trigger: trigger.bind(this),
            getQueue: getQueue.bind(this),
            isRunning: isRunning.bind(this),
            enableEventing: enableEventing.bind(this),
            disableEventing: disableEventing.bind(this),
            alreadyTriggered: alreadyTriggered.bind(this),
            clearQueue: clearQueue.bind(this),
            flush: flush.bind(this),
            pause: pause.bind(this),
            resume: resume.bind(this),
            isPaused: isPaused.bind(this),
            once: once.bind(this),
            on: on.bind(this),
            off: off.bind(this),
            unbindAllHandlers: unbindAllHandlers.bind(this),
            namespace: this.config.namespace,
            broadcast: this.config.broadcast,
            handledEvents: handledEvents
        };
    };

    /**
     * Default configuration of ContextHub.Utils.Eventing
     *
     * @namespace ContextHub.Utils.Eventing.defaultConfig
     */
    ContextHub.Utils.Eventing.defaultConfig = {
        autoStart: true,
        defer: 100,
        periodicity: 16 * 12,
        namespace: ContextHub.Constants.EVENT_NAMESPACE,
        broadcast: window
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Utils.Persistence}
 * {@see ContextHub.Utils.Persistence.prototype.PersistenceMode}
 * {@see ContextHub.Utils.Persistence.prototype.PersistenceMode.prototype.setItem}
 * {@see ContextHub.Utils.Persistence.prototype.PersistenceMode.prototype.getItem}
 * {@see ContextHub.Utils.Persistence.prototype.PersistenceMode.prototype.removeItem}
 * {@see ContextHub.Utils.Persistence.Modes}
 * {@see ContextHub.Utils.Persistence.Modes.LOCAL}
 * {@see ContextHub.Utils.Persistence.Modes.SESSION}
 * {@see ContextHub.Utils.Persistence.Modes.COOKIE}
 * {@see ContextHub.Utils.Persistence.Modes.WINDOW}
 * {@see ContextHub.Utils.Persistence.defaultConfig}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.persistence.js');

(function($, window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    /* helpers */
    var USER_SPACE_REGEXP = new RegExp('^/*store($|/)');
    var OPT_OUT_EXCEPTION_REGEXP = new RegExp('^/*store/(emulators|surferinfo|segmentation)($|/)');

    /**
     * Constructs new persistence mode.
     *
     * @param {String} name - persistence name
     * @param {Function} implementation - function which needs to return getTree() and saveTree() methods
     * @param {Function} [isSupported] - function which returns true if given persistence is supported by the browser
     * @return {Object} - returns persistence object
     * @constructor
     */
    function PersistenceMode(name, implementation, isSupported) {
        this.cachedTree = null;

        return $.extend(true, {}, {
            /* persistence name */
            name: name,

            /* call isSupported() if it's provided, otherwise return true */
            isSupported: isSupported || function() { return true; },

            /* public interface */
            getInterface: function(context) {
                var logic = implementation.call(this, context);

                return {
                    name: name,
                    getItem: logic.getItem,
                    setItem: logic.setItem,
                    removeItem: logic.removeItem,
                    getKeys: logic.getKeys,
                    getTree: logic.getTree
                };
            },

            /* reference to this instance */
            _self: this
        });
    }

    /**
     * Sets key/value pair using provided saveTree/getTree implementations.
     *
     * @param {Function} saveTree - method for storing the whole data tree
     * @param {Function} getTree - method returning the whole data tree (used to fetch the data where new key/value will be added)
     * @param {String} key - key
     * @param {Object} value - value
     * @return {Boolean} true if data was persisted
     */
    PersistenceMode.prototype.setItem = function(saveTree, getTree, key, value) {
        /* do nothing if opt-out cookie is set */
        var userSpace = (key || '').match(USER_SPACE_REGEXP) && !(key || '').match(OPT_OUT_EXCEPTION_REGEXP);

        if (userSpace && ContextHub.isOptedOut()) {
            return false;
        }

        /* get tree and set new item */
        var data = this.cachedTree || getTree();

        data = ContextHub.Utils.JSON.tree.setItem(data, key, value);
        saveTree(data);
        this.cachedTree = data;

        return true;
    };

    /**
     * Returns value of the key using provided getTree implementation.
     *
     * @param {Function} getTree - method returning the whole data tree
     * @param {String} key - key
     * @return {Object} value - value
     */
    PersistenceMode.prototype.getItem = function(getTree, key) {
        /* get tree and return requested item */
        var data = this.cachedTree || getTree();
        this.cachedTree = data;

        return ContextHub.Utils.JSON.tree.getItem(data, key);
    };

    /**
     * Removes requested key using provided saveTree/getTree implementations.
     *
     * @param {Function} saveTree - method for storing the whole data tree
     * @param {Function} getTree - method returning the whole data tree (used to fetch the data from which given key will be removed)
     * @param {String} key - key
     * @return {Boolean} true if data was removed
     */
    PersistenceMode.prototype.removeItem = function(saveTree, getTree, key) {
        /* do nothing if opt-out cookie is set */
        var userSpace = (key || '').match(USER_SPACE_REGEXP) && !(key || '').match(OPT_OUT_EXCEPTION_REGEXP);

        if (userSpace && ContextHub.isOptedOut()) {
            return false;
        }

        /* get tree, remove requested item and persist changes */
        var data = this.cachedTree || getTree();

        data = ContextHub.Utils.JSON.tree.removeItem(data, key);
        saveTree(data);
        this.cachedTree = null;

        return true;
    };

    /* dummy persistence mode */
    var MODE_NULL = new PersistenceMode(
        'null',
        function() {
            return {
                setItem: function() { return false; },
                getItem: function() { return {}; },
                removeItem: function() {},
                getKeys: function() { return []; },
                getTree: function() { return {}; }
            };
        }
    );

    /**
     * Checks if requested storage is supported. If it's not supported, it checks proposed 'fallback' storage(s).
     *
     * @private
     * @return {Boolean} - true if storage got initialized
     */
    var setupStorage = function() {
        var initialized = false;

        /* check if proposed storage is supported, if not - check a fallback list */
        $($.merge([this.config.mode], this.config.fallback || [])).each(function(idx, mode) {
            if (mode && mode.isSupported()) {
                initialized = true;
                this.config.mode = mode;
            }

            return !initialized;
        }.bind(this));

        /* if storage wasn't initialized - use a dummy storage */
        if (!initialized) {
            this.config.mode = MODE_NULL;
        }

        return initialized;
    };

    /**
     * Constructs a ContextHub.Utils.Persistence
     *
     * @param {Object} [config] - persistence configuration
     * @return {Object} - persistence instance
     * @constructor
     */
    ContextHub.Utils.Persistence = function(config) {
        this.config = $.extend(true, {}, ContextHub.Utils.Persistence.defaultConfig, config);

        /* initialize */
        var preferredMode = this.config.mode;
        var initialized = setupStorage.call(this);

        var publicInterface = {
            initialized: initialized,
            usingFallback: (this.config.mode !== preferredMode),
            window: this.config.window,
            container: this.config.container
        };

        /* add public methods of the selected storage */
        $.extend(publicInterface, this.config.mode.getInterface.call(this.config.mode._self, this.config));

        return publicInterface;
    };

    /* provide PersistenceMode to allow creating custom storage */
    ContextHub.Utils.Persistence.prototype.PersistenceMode = PersistenceMode;

    /* default persistence modes */
    ContextHub.Utils.Persistence.Modes = {};

    /**
     * @typedef {Object} PersistencePublicAPI
     * @property {Function} setItem
     * @property {Function} getItem
     * @property {Function} removeItem
     * @property {Function} getKeys
     * @property {Function} getTree
     */

    /**
     * Returns set of methods which are public api to the instantiated storage.
     *
     * @private
     * @param {Function} saveTree - implementation of data storing
     * @param {Function} getTree - implementation of data receiving
     * @returns {PersistencePublicAPI}
     */
    var generatePersistenceMethods = function(saveTree, getTree) {
        var setItem = PersistenceMode.prototype.setItem.bind(this, saveTree, getTree);
        var getItem = PersistenceMode.prototype.getItem.bind(this, getTree);
        var removeItem = PersistenceMode.prototype.removeItem.bind(this, saveTree, getTree);

        var getKeys = function() {
            var data = getTree();
            return ContextHub.Utils.JSON.tree.getKeys(data);
        };

        /* return public persistence api */
        return {
            setItem: setItem,
            getItem: getItem,
            removeItem: removeItem,
            getKeys: getKeys,
            getTree: getTree
        };
    };

    /* localStorage */
    ContextHub.Utils.Persistence.Modes.LOCAL =
        new PersistenceMode(
            /* persistence name */
            'local',

            /**
             * Persistence implementation.
             *
             * @param {Object} config
             * @returns {PersistencePublicAPI}
             */
            function implementation(config) {
                /* applying settings */
                var container = config.container;
                var storage = config.window.localStorage;

                /* returns everything stored in specific storage container */
                var getTree = function() {
                    var data = null;

                    /* preventing: Uncaught SecurityError: Failed to execute 'getItem' on 'Storage': access is denied for this document. */
                    try {
                        data = storage.getItem(container);
                    } catch (e) {
                        data = null;
                    }

                    data = ContextHub.Utils.JSON.parse(data);
                    return ($.type(data) === 'object') ? data : {};
                };

                /* saves entire tree in specific storage container */
                var saveTree = function(tree) {
                    var data = ContextHub.Utils.JSON.stringify(tree);
                    storage.setItem(container, data);
                };

                return generatePersistenceMethods.call(this, saveTree, getTree);
            },

            /* persistence compatibility check */
            function isSupported() {
                var identifier = 'contexthub.test.' + this.name;
                var supported;

                try {
                    var storage = window.localStorage;
                    storage.setItem(identifier, identifier);
                    supported = storage.getItem(identifier) === identifier;
                    storage.removeItem(identifier);
                } catch (e) {
                    supported = false;
                }

                return supported;
            }
        );

    /* sessionStorage */
    ContextHub.Utils.Persistence.Modes.SESSION =
        new PersistenceMode(
            /* persistence name */
            'session',

            /**
             * Persistence implementation.
             *
             * @param {Object} config
             * @returns {PersistencePublicAPI}
             */
            function implementation(config) {
                /* applying settings */
                var container = config.container;
                var storage = config.window.sessionStorage;

                /* returns everything stored in specific storage container */
                var getTree = function() {
                    var data = storage.getItem(container);
                    data = ContextHub.Utils.JSON.parse(data);
                    return ($.type(data) === 'object') ? data : {};
                };

                /* saves entire tree in specific storage container */
                var saveTree = function(tree) {
                    var data = ContextHub.Utils.JSON.stringify(tree);
                    storage.setItem(container, data);
                };

                return generatePersistenceMethods.call(this, saveTree, getTree);
            },

            /* persistence compatibility check */
            function isSupported() {
                var identifier = 'contexthub.test.' + this.name;
                var supported;

                try {
                    var storage = window.sessionStorage;
                    storage.setItem(identifier, identifier);
                    supported = storage.getItem(identifier) === identifier;
                    storage.removeItem(identifier);
                } catch (e) {
                    supported = false;
                }

                return supported;
            }
        );

    /* cookie */
    ContextHub.Utils.Persistence.Modes.COOKIE =
        new PersistenceMode(
            /* persistence name */
            'cookie',

            /**
             * Persistence implementation.
             *
             * @param {Object} config
             * @returns {PersistencePublicAPI}
             */
            function implementation(config) {
                /* applying settings */
                var container = config.container;
                var storage = ContextHub.Utils.Cookie;

                /* returns everything stored in specific storage container */
                var getTree = function() {
                    var data = storage.getItem(container);
                    data = ContextHub.Utils.JSON.parse(data);
                    return ($.type(data) === 'object') ? data : {};
                };

                /* saves entire tree in specific storage container */
                var saveTree = function(tree) {
                    var data = ContextHub.Utils.JSON.stringify(tree);
                    storage.setItem(container, data);
                };

                return generatePersistenceMethods.call(this, saveTree, getTree);
            },

            /* persistence compatibility check */
            function isSupported() {
                var identifier = 'contexthub.test.' + this.name;

                window.document.cookie = identifier + '=1';
                var supported = window.document.cookie.indexOf(identifier) !== -1;
                window.document.cookie = identifier + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT';

                return supported;
            }
        );

    /* window.name */
    ContextHub.Utils.Persistence.Modes.WINDOW =
        new PersistenceMode(
            /* persistence name */
            'window',

            /**
             * Persistence implementation.
             *
             * @param {Object} config
             * @returns {PersistencePublicAPI}
             */
            function implementation(config) {
                /* applying settings */
                var container = config.container;
                var storage = config.window;

                /* returns everything stored in specific storage container */
                var getTree = function() {
                    var data = ContextHub.Utils.JSON.parse(storage.name)[container];
                    return ($.type(data) === 'object') ? data : {};
                };

                /* saves entire tree in specific storage container */
                var saveTree = function(tree) {
                    var data = ContextHub.Utils.JSON.parse(storage.name);
                    data[container] = tree;
                    storage.name = ContextHub.Utils.JSON.stringify(data);
                };

                return generatePersistenceMethods.call(this, saveTree, getTree);
            }
        );

    /* default configuration of ContextHub.Utils.Persistence */
    ContextHub.Utils.Persistence.defaultConfig = {
        container: ContextHub.Constants.PERSISTENCE_CONTAINER_NAME,

        window: window,

        mode: ContextHub.Utils.Persistence.Modes.LOCAL,

        fallback: [
            ContextHub.Utils.Persistence.Modes.SESSION,
            ContextHub.Utils.Persistence.Modes.WINDOW
        ]
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.storeCandidates.js');

(function($, window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    /**
     * Map contains a priority-sorted list of candidates for a specific store type.
     *
     * @private
     * @type {Object}
     */
    var data = {};

    /**
     * Always returns true.
     *
     * @constant
     * @private
     * @returns {Boolean} - Always returns true.
     */
    var CANDIDATE_APPLIES = function() { return true; };

    /**
     * Registers a store candidate.
     *
     * @param {Object} store - The store instance, for instance a ContextHub.Helpers.SurferInfo object.
     * @param {String} storeType - Store type, for instance 'contexthub.profile'.
     * @param {Number} priority - The priority of the store. A value of '0' is recommended for built-in stores, to allow custom stores to override the default implementations by specifying a higher value.
     * @param {Function} [applies=CANDIDATE_APPLIES] - A function to invoke then a store candidate is evaluated. Should return true if the store is applicable to the current environment. If parameter not provided - CANDIDATE_APPLIES (returning true) is used.
     */
    var registerStoreCandidate = function(store, storeType, priority, applies) {
        var candidates;
        var entry = {
            store: store,
            priority: priority,
            applies: applies || CANDIDATE_APPLIES
        };

        data[storeType] = data[storeType] || [];
        candidates = data[storeType];
        candidates.push(entry);
        candidates.sort(function(a, b) { return b.priority - a.priority; });
    };

    /**
     * @typedef {Object} StoreDefinition
     * @property {String} type
     * @property {Boolean} required
     */

    /**
     * Returns a store from the registered candidates.
     *
     * <p>If multiple store candidates exist for the same store name, the one with the highest priority will be returned.</p>
     *
     * @param {StoreDefinition} storeDefinition - store definition
     * @return {ContextHub.Store.Core|ContextHub.Store.JSONPStore|ContextHub.Store.PersistedJSONPStore|ContextHub.Store.PersistedStore|ContextHub.Store.SessionStore} - store instance
     */
    var getStoreFromCandidates = function(storeDefinition) {
        var candidates = data[storeDefinition.type] || [];
        var idx;
        var entry;

        /* search for matching candidate */
        for (idx = 0; idx < candidates.length; idx++) {
            entry = candidates[idx];

            if (entry.applies(entry.store, entry.priority)) {
                return entry.store;
            }
        }

        /* if no matching candidate was found and store is required to initialize - throw error message */
        if (storeDefinition.required === true) {
            ContextHub.console.error('No suitable store implementation found for type: "' + storeDefinition.type + '".');
        }
    };

    /**
     * Returns mapping containing registered store candidates (for specific store type - if storeType is provided, or for all known store types).
     *
     * @param {String} [storeType] - Store type.
     * @returns {Object} - Map with registered candidates.
     */
    var getRegisteredCandidates = function(storeType) {
        var mapping = data;

        if (storeType) {
            mapping = mapping[storeType] || [];
        }

        return mapping;
    };

    /**
     * Returns a list of store types that have at least one store candidate registered.
     *
     * @returns {Array} - List of supported store types.
     */
    var getSupportedStoreTypes = function() {
        var result = [];

        $.each(data, function(storeType) {
            result.push(storeType);
        });

        return result.sort();
    };

    ContextHub.Utils.storeCandidates = {
        registerStoreCandidate: registerStoreCandidate,
        getStoreFromCandidates: getStoreFromCandidates,
        getRegisteredCandidates: getRegisteredCandidates,
        getSupportedStoreTypes: getSupportedStoreTypes
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint no-proto: 0, new-cap: 0 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Utils.inheritance.inherit}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.utils - ContextHub.Utils.inheritance.js');

(function(window) {
    'use strict';

    window.ContextHub.Utils = window.ContextHub.Utils || {};

    ContextHub.Utils.inheritance = {
        /**
         * Extends child object by parent object.
         *
         * @param {Object} child - child object
         * @param {Function} parent - parent object
         * @returns {Object} - extended object
         */
        inherit: function(child, parent) {
            child.prototype = new parent();
            child.prototype.constructor = parent;

            var depth = {};
            var previouslyExecuted;

            /* calls 'name' method of inherited object */
            child.prototype.uber = function(name) {
                depth[name] = depth[name] || 0;

                var func;
                var result;
                var here;
                var skip = depth[name];

                /* skip already called methods */
                if (skip) {
                    here = parent.prototype;

                    while (skip) {
                        here = here.constructor.prototype;
                        skip--;
                    }

                    if (here && (here[name] === previouslyExecuted)) {
                        here = here.constructor.prototype || {};
                    }

                    func = here[name];
                } else {
                    /* 'name' was called on one of inherited objects (and not this instance itself) - we need to find implementation */
                    here = this;

                    while (here && !here.hasOwnProperty(name)) {
                        here = here.__proto__ || here.constructor.prototype;
                    }

                    func = here[name];

                    if (func === this[name]) {
                        func = (here.__proto__ || here.constructor.prototype)[name];
                    }
                }

                depth[name]++;
                previouslyExecuted = func;

                if (typeof func === 'function') {
                    result = func.apply(this, Array.prototype.slice.apply(arguments, [1]));
                }

                previouslyExecuted = null;
                depth[name]--;

                return result;
            };

            return child;
        },

        /**
         * Creates new instance of a given Class by calling the constructor with a given arguments.
         *
         * @param {Object} Class - class
         * @param {Object} args - arguments that will be passed to the constructor
         */
        newInstance: function(Class, args) {
            return new (Class.bind.apply(Class, [null].concat([].slice.call(args))))();
        }
    };

}(window));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/*
 * This is a placeholder for ContextHub's kernel config overrides.
 *
 * However customers should define their overrides in their codebase
 * (and not in /libs/granite/contexthub) in 'contexthub.config.override' clientlib.
 */
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.persistence}
 * {@see ContextHub.eventing}
 * {@see ContextHub.registerStore}
 * {@see ContextHub.getAllStores}
 * {@see ContextHub.getStore}
 * {@see ContextHub.set}
 * {@see ContextHub.get}
 * {@see ContextHub.getItem}
 * {@see ContextHub.setItem}
 * {@see ContextHub.removeItem}
 * {@see ContextHub.cleanAllStores}
 * {@see ContextHub.resetAllStores}
 * {@see ContextHub.sync}
 * {@see ContextHub.bind}
 * {@see ContextHub.isOptedOut}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.kernel - ContextHub.js');

(function($, window) {
    'use strict';

    if (typeof window.ContextHubKernelConfig === 'undefined') {
        ContextHub.console.error('[-] ContextHub configuration is not set!');
    }

    /**
     * @namespace ContextHub
     */
    window.ContextHub = $.extend({
        version: '0.4.28-20220311-1228'
    }, window.ContextHub);

    /* contains list of registered stores */
    var stores = {};

    /* array containing tasks added by sync() and bind() */
    var syncRequests = [];
    var bindRequests = [];

    /* initialization of ContextHub's persistence */
    var persistence = new ContextHub.Utils.Persistence();

    /* initialization of ContextHub's eventing */
    var eventing = new ContextHub.Utils.Eventing(window.ContextHubKernelConfig.eventing);

    /* indicates whether ContextHub functionality (persistence, segmentation engine) should be disabled due to user request */
    var optedOut = null;

    /**
     * Registers specified store in ContextHub and triggers 'register' event.
     *
     * If store is SessionStore or PersistedStore a 'ready' event is triggered immediately, assuming that all data
     * is prepared before registering store in ContextHub.
     *
     * If store is JSONPStore or PersistedJSONPStore a 'ready' event is triggered each time after calling {@code queryService()}.
     *
     * @this ContextHub
     * @param {String} storeName - store name
     * @param {ContextHub.Store.Core|ContextHub.Store.JSONPStore|ContextHub.Store.PersistedJSONPStore|ContextHub.Store.PersistedStore|ContextHub.Store.SessionStore} store - store instance
     */
    var registerStore = function(storeName, store) {
        if ($.type(store) === 'object') {
            stores = stores || {};

            /* don't register same store twice */
            if (!stores[storeName]) {
                stores[storeName] = store;

                /* add time stamp */
                ContextHub.console.timeStamp('registering "' + storeName + '"');

                /* get store keys (since it's store registration phase, those keys are either persisted or from initialValues) */
                var storeKeys = store.getKeys();
                var overlay = { keys: { all: { hash: {}, list: storeKeys } } };

                $.each(storeKeys, function(idx, key) {
                    overlay.keys.all.hash[key] = true;
                });

                /* trigger event */
                this.eventing.trigger(ContextHub.Constants.EVENT_STORE_REGISTERED + ':' + storeName, {}, {
                    defer: 0,
                    _: {
                        action: 'store-registered',
                        store: storeName,
                        registeredAt: new Date().getTime(),
                        overlay: overlay
                    }
                });

                /* if store is not JSONPStore or PersistedJSONPStore also trigger 'ready' event immediately */
                if (!store.queryService) {
                    store.announceReadiness();
                }
            }
        }
    };

    /**
     * Returns all registered stores.
     *
     * @return {Object} stores
     */
    var getAllStores = function() {
        return stores;
    };

    /**
     * Returns store of specified name or null if store wasn't found.
     *
     * @param {String} name store name
     * @return {ContextHub.Store.SessionStore|ContextHub.Store.PersistedStore|ContextHub.Store.JSONPStore|ContextHub.Store.PersistedJSONPStore|null} store
     */
    var getStore = function(name) {
        return (($.type(name) === 'string') && name.length) ? ContextHub.Utils.JSON.tree.getItem(stores, name) : null;
    };

    /**
     * Returns value of specified key (prefixing it by '/store/'). See {@see getItem}.
     *
     * @this ContextHub
     * @param {String} key - key name
     * @return {Object|null} - value
     */
    var get = function(key) {
        return this.getItem('/store/' + key);
    };

    /**
     * Sets key/value pair. Key is prefixed by '/store/'. See {@see setItem}.
     *
     * @this ContextHub
     * @param {String} key - key name
     * @param {Object} value - value
     */
    var set = function(key, value) {
        this.setItem('/store/' + key, value);
    };

    /**
     * Since stores can use a custom persistence mode, we can't assume it's always ContextHub's default persistence.
     * This method returns persistence used by a store holding a given key (format: /store/foobar/key-name).
     *
     * @private
     * @param {String} key - key name
     * @returns {Object} storage and key name
     */
    var getStorageByProperty = function(key) {
        /* by default use ContextHub's persistence */
        var storage = ContextHub.persistence;

        /* split key into chunks */
        var storeProperty = key;
        var keyChunks = ContextHub.Utils.JSON.tree.sanitizeKey(storeProperty);

        if (keyChunks) {
            /* save store name */
            var storeName = keyChunks.shift();

            /* in case key contained '/store' prefix - skip it */
            if (storeName === 'store') {
                storeName = keyChunks.shift();
            }

            /* get the store */
            var store = ContextHub.getStore(storeName);

            /* if it's registered, use its persistence */
            if (store) {
                storage = store;
                storeProperty = '/' + keyChunks.join('/');
            }
        }

        return { storage: storage, storeProperty: storeProperty };
    };

    /**
     * Returns value of specified key. As call is global (ContextHub.getItem()), key has to specify which store have
     * to be queried (for example: "/store/foobar/key-name").
     *
     * @this ContextHub
     * @param {String} key - key name
     * @return {Object|null} - value
     */
    var getItem = function(key) {
        var data = getStorageByProperty(key);

        /* return value of a given key */
        return data.storage.getItem(data.storeProperty);
    };

    /**
     * Sets key/value pair. As the call is global (ContextHub.setItem()), key has to specify which store have to be
     * updated (for example: "/store/foobar/key-name").
     *
     * @param {String} key - key name
     * @param {Object} value - value
     */
    var setItem = function(key, value) {
        var data = getStorageByProperty(key);

        /* store given value */
        data.storage.setItem(data.storeProperty, value);
    };

    /**
     * Removes specified key from the persistence. As the call is global (ContextHub.removeItem()), key has to specify
     * which store have to be updated (for example: "/store/foobar/key-name").
     *
     * @param {String} key - key name
     */
    var removeItem = function(key) {
        var data = getStorageByProperty(key);

        /* remove given key */
        data.storage.removeItem(data.storeProperty);
    };

    /**
     * Returns object containing key/value pairs of specified properties.
     *
     * @private
     * @param {Array} properties
     * @return {Object}
     */
    var getAllItems = function(properties) {
        var result = {};
        var count = 0;
        var keysList = [];

        /* iterate over property names */
        $.each(properties, function(idx, key) {
            if (key) {
                var path = ContextHub.Utils.JSON.tree.sanitizeKey(key);

                /* if key contains '/store/' - remove it from result key name */
                if (path[0] === 'store') {
                    key = '/' + path.slice(1).join('/');
                } else {
                    /* but path needs to have '/store/' prefix */
                    path.unshift('store');
                }

                /* get value */
                path = '/' + path.join('/');
                var value = ContextHub.getItem(path);

                /* and add it to the result set */
                if (value !== null) {
                    count++;
                    result = ContextHub.Utils.JSON.tree.setItem(result, key, value);
                    keysList.push(key);
                }
            }
        });

        result._length = count;
        result._keys = keysList;
        return result;
    };

    /**
     * Executes successAction with values of provided properties if they are available within timeout, otherwise
     * defaultAction is called with as much properties as possible (available at that time).
     *
     * @param {String|Array} properties
     * @param {Function} successAction
     * @param {Function} defaultAction
     * @param {Number} timeout
     */
    var sync = function(properties, successAction, defaultAction, timeout) {
        /* create one element array if string was provided */
        if ($.type(properties) === 'string') {
            properties = [ properties ];
        }

        /* sanitize names in properties array */
        var sanitizedProperties = [];

        $.each(properties, function(id, item) {
            var sanitizedItem = '/' + ContextHub.Utils.JSON.tree.sanitizeKey(item).join('/');
            sanitizedProperties.push(sanitizedItem);
        });

        properties = sanitizedProperties;

        /* use empty function if handlers were not provided */
        successAction = successAction || function() {};
        defaultAction = defaultAction || function() {};

        /* get properties that are matching the request and are already set */
        var availableProperties = getAllItems(properties);

        /* call successAction if all properties are set already */
        if (availableProperties._length === properties.length) {
            successAction(availableProperties);
            return;
        }

        /* otherwise call defaultAction after reaching timeout */
        var failureHandlerId = 0;
        var taskCompleted = false;

        /* task will be called when timeout is reached or with every 'data' event */
        var task = function(taskId) {
            /* just return if task is completed */
            if (taskCompleted) {
                return true;
            }

            /* get properties that are matching the request and are already set */
            var values = getAllItems(properties);
            var handler = null;

            /* timeout reached - select default action */
            if ($.type(taskId) === 'undefined') {
                handler = defaultAction;
            }

            /* all properties are ready, so cancel timeout handler - select success action */
            if (values._length === properties.length) {
                handler = successAction;
                window.clearTimeout(failureHandlerId);
            }

            /* execute handler and mark task as completed */
            if (handler) {
                taskCompleted = true;
                handler(values);
            }

            return taskCompleted;
        };

        /* create timeout handler and add task to sync() requests list */
        failureHandlerId = window.setTimeout(task, timeout);
        syncRequests.push(task);
    };

    /**
     * Cleans persistence of all configured stores.
     */
    var cleanAllStores = function() {
        var wasPaused = eventing.isPaused();
        this.eventing.pause();

        $.each(getAllStores(), function(idx, store) {
            store.clean();
        });

        if (!wasPaused) {
            this.eventing.resume();
        }
    };

    /**
     * Resets persistence of all configured stores. If keepRemainingData is true, all key/value pairs which are not
     * initial data will not get removed from the persistence. This function is called when "reset" button is clicked in ContextHub UI.
     *
     * @param {Boolean} keepRemainingData
     */
    var resetAllStores = function(keepRemainingData) {
        var wasPaused = eventing.isPaused();

        /* invalidate cache and re-check for opt-out cookie */
        ContextHub.isOptedOut(true);

        /* pause eventing and reset stores */
        ContextHub.eventing.pause();

        $.each(getAllStores(), function(idx, store) {
            store.reset(keepRemainingData);
        });

        if (!wasPaused) {
            ContextHub.eventing.resume();
        }
    };

    /**
     * Similar function to {@link #sync()}, but the requested synchronization can be executed several times when
     * requested properties are getting modified.
     *
     * @param {String|Array} properties
     * @param {Function} successAction
     * @param {Function} defaultAction
     * @param {Number} timeout
     */
    var bind = function(properties, successAction, defaultAction, timeout) {
        /* create one element array if string was provided */
        if ($.type(properties) === 'string') {
            properties = [ properties ];
        }

        /* sanitize names in properties array */
        var sanitizedProperties = [];

        $.each(properties, function(id, item) {
            var sanitizedItem = '/' + ContextHub.Utils.JSON.tree.sanitizeKey(item).join('/');
            sanitizedProperties.push(sanitizedItem);
        });

        properties = sanitizedProperties;

        /* use empty function if handlers were not provided */
        successAction = successAction || function() {};
        defaultAction = defaultAction || function() {};

        /* get properties that are matching the request and are already set */
        var availableProperties = getAllItems(properties);

        /* call successAction if all properties are set already */
        var createTimeoutHandler = true;

        if (availableProperties._length === properties.length) {
            createTimeoutHandler = false;
            successAction(availableProperties);
        }

        /* otherwise call defaultAction after reaching timeout */
        var failureHandlerId = 0;

        /* task will be called when timeout is reached or with every 'data' event */
        var task = function(taskId, modifiedItems) {
            if (modifiedItems) {
                var lookup = {};
                var skip = true;

                /* create a lookup - thanks to that we can react on "/a/b" (if it's being watched) even if "/a/b/c/d" was modified */
                $.each(modifiedItems, function(item) {
                    lookup = ContextHub.Utils.JSON.tree.setItem(lookup, item, true);
                });

                /* check if at least one property was modified */
                for (var x = 0; x < properties.length; x++) {
                    if (ContextHub.Utils.JSON.tree.getItem(lookup, properties[x])) {
                        skip = false;
                        break;
                    }
                }

                /* none of required properties were modified */
                if (skip) {
                    return;
                }
            }

            /* get current values */
            var values = getAllItems(properties);
            var handler = defaultAction;

            /* all properties are ready, so cancel timeout handler - select success action */
            if (values._length === properties.length) {
                handler = successAction;
                window.clearTimeout(failureHandlerId);
            }

            /* execute handler */
            handler(values);
        };

        /* create timeout handler and add task to bind() requests list */
        if (createTimeoutHandler) {
            failureHandlerId = window.setTimeout(task, timeout);
        }

        bindRequests.push(task);
    };

    /**
     * Checks whether "cq-opt-out" cookie is present.
     *
     * @param {Boolean} [invalidateCache] - invalidate cache
     * @return {Boolean} true if ContextHub functionality (persistence, segmentation engine) should be disabled
     */
    var isOptedOut = function(invalidateCache) {
        /* clears cache to re-check */
        if (invalidateCache) {
            optedOut = null;
        }

        /* check if opt-out cookie is set (remember result, so intensive calls will not affect performance) */
        if (optedOut === null) {
            optedOut = ContextHub.Utils.Cookie.getItem('cq-opt-out') !== null;
        }

        return optedOut;
    };

    /* set ContextHub's public interface */
    $.extend(ContextHub, {
        persistence: persistence,
        eventing: eventing,
        registerStore: registerStore,
        getAllStores: getAllStores,
        getStore: getStore,
        set: set,
        get: get,
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem,
        cleanAllStores: cleanAllStores,
        resetAllStores: resetAllStores,
        sync: sync,
        bind: bind,
        isOptedOut: isOptedOut
    });

    /* "store-updated" listener used by sync() and bind() */
    ContextHub.eventing.on(ContextHub.Constants.EVENT_STORE_UPDATED, function(event, data) {
        /* iterate over pending sync() requests */
        $.each(syncRequests || [], function(id, handler) {
            /* execute task and remove it from the list if it's completed */
            if (handler && handler(id)) {
                delete syncRequests[id];
                syncRequests = $.grep(syncRequests, $.isFunction);
            }
        });

        /* are there any binds registered? */
        if ((bindRequests || []).length) {
            /* create a list of properties which were modified during this update */
            var modifiedItems = {};

            if (data.keys) {
                $.each(data.keys.all.list, function(idx, item) {
                    modifiedItems['/' + data.store + item] = true;
                });
            }

            /* iterate over bind() requests and execute them */
            $.each(bindRequests || [], function(id, handler) {
                if (handler) {
                    handler(id, modifiedItems);
                }
            });
        }
    }, 'sync-bind');

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.kernel - task.stores-initialization-watcher.js');

(function($, window) {
    'use strict';

    /* event selector */
    var selector = 'initialization-watcher';

    /* triggering 'stores-partially-ready' event in case not all stores were initialized within timeout */
    var readyStores = {};

    var timeoutHandler = window.setTimeout(function() {
        var storesNotReady = {};

        $.each(window.ContextHubKernelConfig.stores, function(name) {
            if (!readyStores[name]) {
                storesNotReady[name] = true;
            }
        });

        /* announce which stores are initialized and ready */
        ContextHub.eventing.trigger(ContextHub.Constants.EVENT_STORES_PARTIALLY_READY, {}, {
            defer: 0,
            _: {
                wasReadyAt: new Date().getTime(),
                storesReady: readyStores,
                storesNotReady: storesNotReady
            }
        });

        /* do not listen to 'store-ready' events anymore */
        ContextHub.eventing.off(ContextHub.Constants.EVENT_STORE_READY, selector);
    }, window.ContextHubKernelConfig.initializationTimeout);

    /* 'store-ready' listener that triggers 'all-stores-ready' event once all of them are initialized */
    ContextHub.eventing.on(ContextHub.Constants.EVENT_STORE_READY, function(event, data) {
        /* mark given store as ready */
        readyStores[data.store] = true;

        /* check if all required stores are ready now */
        var storesReady = true;

        $.each(window.ContextHubKernelConfig.stores, function(name, definition) {
            if (!readyStores[name] && definition.required) {
                storesReady = false;
            }
        });

        /* trigger event indicating that all stores are ready */
        if (storesReady) {
            /* cancel timeout handler and announce readiness */
            window.clearTimeout(timeoutHandler);
            ContextHub.console.timeStamp('contexthub initialized');

            /* turn off 'store-ready' handler as it's not required anymore */
            ContextHub.eventing.off(event.type, selector);

            /* announce that all stores are initialized and ready */
            ContextHub.eventing.trigger(ContextHub.Constants.EVENT_ALL_STORES_READY, {}, {
                defer: 0,
                _: {
                    wasReadyAt: new Date().getTime(),
                    stores: readyStores
                }
            });
        }
    }, selector);

}(ContextHubJQ, window));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Store.Core}
 * {@see ContextHub.Store.Core.defaultConfig}
 * {@see ContextHub.Store.Core.prototype.init}
 * {@see ContextHub.Store.Core.prototype.clean}
 * {@see ContextHub.Store.Core.prototype.reset}
 * {@see ContextHub.Store.Core.prototype.setItem}
 * {@see ContextHub.Store.Core.prototype.getItem}
 * {@see ContextHub.Store.Core.prototype.removeItem}
 * {@see ContextHub.Store.Core.prototype.getKeys}
 * {@see ContextHub.Store.Core.prototype.getTree}
 * {@see ContextHub.Store.Core.prototype.addAllItems}
 * {@see ContextHub.Store.Core.prototype.addReference}
 * {@see ContextHub.Store.Core.prototype.removeReference}
 * {@see ContextHub.Store.Core.prototype.getReferences}
 * {@see ContextHub.Store.Core.prototype.resolveReference}
 * {@see ContextHub.Store.Core.prototype.pauseEventing}
 * {@see ContextHub.Store.Core.prototype.resumeEventing}
 * {@see ContextHub.Store.Core.prototype.isEventingPaused}
 * {@see ContextHub.Store.Core.prototype.announceReadiness}
 * {@see ContextHub.Store.Core.prototype.onUpdate}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.generic-stores - ContextHub.Store.Core.js');

(function($, window) {
    'use strict';

    window.ContextHub.Store = window.ContextHub.Store || {};

    /**
     * In-memory persistence implementation.
     *
     * @private
     * @constant
     * @type {PersistenceMode}
     */
    var inMemoryPersistence =
        new ContextHub.Utils.Persistence.prototype.PersistenceMode(
            /* persistence name */
            'memory',

            /**
             * Persistence implementation.
             *
             * @param {Object} config
             * @returns {PersistencePublicAPI}
             */
            function implementation(config) {
                /* applying settings */
                var container = config.container;
                var storage = config.storage;

                /* returns everything stored in specific storage container */
                var getTree = function() {
                    var tree = (($.type(storage) === 'object') ? storage : {})[container];
                    return ($.type(tree) === 'object') ? tree : {};
                };

                /* saves entire tree in specific storage container */
                var saveTree = function(tree) {
                    storage = ($.type(storage) === 'object') ? storage : {};
                    storage[container] = tree;
                };

                /* returns public interface */
                var prototype = ContextHub.Utils.Persistence.prototype.PersistenceMode.prototype;

                return {
                    setItem: prototype.setItem.bind(this, saveTree, getTree),
                    getItem: prototype.getItem.bind(this, getTree),
                    removeItem: prototype.removeItem.bind(this, saveTree, getTree),
                    getKeys: function() {
                        return ContextHub.Utils.JSON.tree.getKeys(getTree());
                    },
                    getTree: getTree
                };
            }
        );

    /**
     * Constructs a ContextHub.Store.Core store.
     *
     * @constructor
     */
    ContextHub.Store.Core = function() {};

    /**
     * Initialize this store.
     *
     * @param {String} name - store name
     * @param {Object} config - configuration
     */
    ContextHub.Store.Core.prototype.init = function(name, config) {
        this.config = $.extend(true, {}, ContextHub.Store.Core.defaultConfig, config);
        this.name = name;
        this.eventChannel = ContextHub.Constants.EVENT_STORE_UPDATED + ':' + this.name;
        this.storeDataKey = '/store/' + this.name;
        this.data = {};
        this.references = {};

        /* if persistence wasn't set, use in-memory persistence */
        if (!this.config.persistence) {
            this.config.persistence = new ContextHub.Utils.Persistence({
                container: 'data',
                mode: inMemoryPersistence,
                storage: this.data
            });
        }

        /* if eventing wasn't set, use dummy one */
        if (!this.config.eventing) {
            var nothing = function() {};

            this.config.eventing = {
                trigger: nothing,
                isPaused: nothing,
                pause: nothing,
                resume: nothing
            };
        }

        /* return public interface */
        this.persistence = this.config.persistence;
        this.eventing = this.config.eventing;

        /* set initial values (existing keys will not be overwritten) */
        var wasPaused = this.isEventingPaused();
        this.pauseEventing();

        $.each(this.config.initialValues || {}, function(key, value) {
            if (!this.getItem(key)) {
                this.setItem(key, value);
            }
        }.bind(this));

        if (!wasPaused) {
            this.resumeEventing();
        }
    };

    /**
     * Default configuration of ContextHub.Store.Core
     *
     * @namespace ContextHub.Store.Core.defaultConfig
     */
    ContextHub.Store.Core.defaultConfig = {
        eventDeferring: 16 * 2,
        eventing: ContextHub.eventing,
        persistence: ContextHub.persistence
    };

    /**
     * Cleans store's persistence.
     *
     * @this ContextHub.Store.Core
     */
    ContextHub.Store.Core.prototype.clean = function() {
        this.removeItem('/');
    };

    /**
     * Resets store's persistence. If keepRemainingData is true, all key/value pairs which are not
     * initial data will not get removed from the persistence.
     *
     * @this ContextHub.Store.Core
     * @param {Boolean} [keepRemainingData] - if true, store won't be cleared before reapplying initial data
     */
    ContextHub.Store.Core.prototype.reset = function(keepRemainingData) {
        var wasPaused = this.isEventingPaused();
        this.pauseEventing();

        if (!keepRemainingData) {
            this.clean();
        }

        this.addAllItems(this.config.initialValues || {});

        if (!wasPaused) {
            this.resumeEventing();
        }
    };

    /**
     * Stores key/value pair in the persistence. Event 'data' is triggered if current value is different than old value
     * of specified key. Additionally optional parameter options can override default eventing configuration.
     * Triggered event contains following information: store name, key, old value, new value, action type ("set").
     * To skip event triggering, options.silent have to be set to true.
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @param {Object} value - value
     * @param {Object} [options] - options
     * @return {Boolean} - true if item was stored, false if old value is the same
     */
    ContextHub.Store.Core.prototype.setItem = function(key, value, options) {
        /* checks if key is just a reference to another key */
        var resolvedKey = this.resolveReference(key);

        /* value setting logic */
        var old = this.getItem(resolvedKey);
        var persistenceNeedsUpdate = true;
        var type = typeof value;

        /* determine if old value is different than new value */
        if (typeof old === type) {
            var isPrimitive = (type === 'string' || type === 'number' || type === 'boolean');

            if (isPrimitive) {
                persistenceNeedsUpdate = (old !== value);
            } else {
                var a = ContextHub.Utils.JSON.stringify(old);
                var b = ContextHub.Utils.JSON.stringify(value);

                persistenceNeedsUpdate = (a.length !== b.length) || (a !== b);
            }
        }

        /* update persistence if needed */
        if (persistenceNeedsUpdate) {
            var wasPersisted = this.persistence.setItem(this.storeDataKey + '/' + resolvedKey, value);

            if (wasPersisted && !(options || {}).silent) {
                this.eventing.trigger(this.eventChannel, {
                    key: resolvedKey,
                    value: value,
                    old: old,
                    action: 'set'
                }, $.extend(true, {
                    defer: this.config.eventDeferring,
                    _: {
                        store: this.name,
                        muteWhenNoData: true
                    }
                }, options));
            }
        }

        return persistenceNeedsUpdate;
    };

    /**
     * Returns value of a specified key.
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @return {Object|null} - value
     */
    ContextHub.Store.Core.prototype.getItem = function(key) {
        /* checks if key is just a reference to another key */
        var resolvedKey = this.resolveReference(key);

        /* returns value */
        return this.persistence.getItem(this.storeDataKey + '/' + resolvedKey);
    };

    /**
     * Removes specified key and it's value from the persistence. If key was found a 'data' event is triggered.
     * Triggered event contains following information: store name, key, old value, new value (null), action type ("remove").
     * To skip event triggering, options.silent have to be set to true.
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @param {Object} [options] - options
     * @return {Boolean} true - if item was removed
     */
    ContextHub.Store.Core.prototype.removeItem = function(key, options) {
        /* checks if key is just a reference to another key */
        var resolvedKey = this.resolveReference(key);

        /* value removing logic */
        var status = false;
        var old = this.getItem(resolvedKey);

        /* if key was found, remove it */
        if (old !== null) {
            status = true;
            var wasPersisted = this.persistence.removeItem(this.storeDataKey + '/' + resolvedKey);

            if (wasPersisted && !(options || {}).silent) {
                this.eventing.trigger(this.eventChannel, {
                    key: resolvedKey,
                    value: null,
                    old: old,
                    store: this.name,
                    action: 'remove'
                }, $.extend(true, {
                    defer: this.config.eventDeferring,
                    _: {
                        store: this.name,
                        muteWhenNoData: true
                    }
                }, options));
            }
        }

        return status;
    };

    /**
     * Returns array of keys of store's persistence. When includeInternals is false, element '_' will be skipped.
     *
     * @this ContextHub.Store.Core
     * @param {Boolean} [includeInternals] - if true, '_' item will be also returned (used by JSONP stores)
     * @return {Array} - store's keys
     */
    ContextHub.Store.Core.prototype.getKeys = function(includeInternals) {
        var tree = this.persistence.getTree();
        tree = ContextHub.Utils.JSON.tree.getItem(tree, this.storeDataKey) || {};

        if (!includeInternals) {
            delete tree._;
        }

        return ContextHub.Utils.JSON.tree.getKeys(tree);
    };

    /**
     * Returns store's persistence tree. When includeInternals is false, element '_' will be skipped.
     *
     * @this ContextHub.Store.Core
     * @param {Boolean} [includeInternals] - if true, '_' item will be also returned (used by JSONP stores)
     * @return {Object|{}} - store's data
     */
    ContextHub.Store.Core.prototype.getTree = function(includeInternals) {
        var tree = this.persistence.getItem(this.storeDataKey) || {};

        if (!includeInternals) {
            delete tree._;
        }

        return tree;
    };

    /**
     * Merges passed tree with store's persistence.
     *
     * @this ContextHub.Store.Core
     * @param {Object} tree - json data object
     * @param {Object} [options] - options
     * @return {Boolean} - true if value was stored, false if old value is the same
     */
    ContextHub.Store.Core.prototype.addAllItems = function(tree, options) {
        var type = $.type(tree);
        var self = this;
        var persistenceModified = false;

        /* accept only object or array */
        if (type === 'object' || type === 'array') {
            $.each(tree, function(key, value) {
                var status = self.setItem(key, value, options);
                persistenceModified = persistenceModified || status;
            });
        }

        return persistenceModified;
    };

    /**
     * Creates a reference to another key ("foo" -> "bar").
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @param {String} anotherKey - another key name
     * @return {Boolean} true - if reference was added
     */
    ContextHub.Store.Core.prototype.addReference = function(key, anotherKey) {
        var keyChunks = ContextHub.Utils.JSON.tree.sanitizeKey(key);
        var anotherKeyChunks = ContextHub.Utils.JSON.tree.sanitizeKey(anotherKey);
        var status = false;

        /* add reference if both keys are valid */
        if (keyChunks && anotherKeyChunks) {
            var referenceSourceKey = '/' + keyChunks.join('/');
            var referenceDestinationKey = '/' + anotherKeyChunks.join('/');

            if (referenceSourceKey !== referenceDestinationKey) {
                status = true;
                this.references[referenceSourceKey] = referenceDestinationKey;
            }
        }

        return status;
    };

    /**
     * Removes a reference.
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @return {Boolean} true - if reference was removed
     */
    ContextHub.Store.Core.prototype.removeReference = function(key) {
        var keyChunks = ContextHub.Utils.JSON.tree.sanitizeKey(key);
        var status = false;

        if (keyChunks) {
            status = true;
            var referenceSourceKey = '/' + keyChunks.join('/');
            delete this.references[referenceSourceKey];
        }

        return status;
    };

    /**
     * Returns all references.
     *
     * @this ContextHub.Store.Core
     * @return {Object} - list of references
     */
    ContextHub.Store.Core.prototype.getReferences = function() {
        return this.references;
    };

    /**
     * Tries to resolve a reference in n-iterations (5 by default).
     *
     * @this ContextHub.Store.Core
     * @param {String} key - key name
     * @param {Number} [retry] -  number of retries
     * @return {String|null} - reference destination key name
     */
    ContextHub.Store.Core.prototype.resolveReference = function(key, retry) {
        /* sanitize the key */
        var keyChunks = ContextHub.Utils.JSON.tree.sanitizeKey(key);
        var traverse = '/' + keyChunks.join('/');

        /* search for reference */
        if (!$.isEmptyObject(this.references) && key) {
            var remainingRetries = retry || 5;
            var anotherKey = traverse;

            while ((remainingRetries > 0) && anotherKey) {
                remainingRetries--;

                /* find best matching reference */
                var chunks = ContextHub.Utils.JSON.tree.sanitizeKey(traverse);
                var bestMatch = '';
                var rest = chunks.slice(0);

                for (var idx = 0; idx < chunks.length && !this.references[bestMatch]; idx++) {
                    bestMatch += '/' + chunks[idx];
                    rest.shift();
                }

                /* get the best match */
                anotherKey = this.references[bestMatch];

                if (anotherKey) {
                    /* add leftover and sanitize the key */
                    anotherKey = anotherKey + '/' + rest.join('/');
                    anotherKey = '/' + ContextHub.Utils.JSON.tree.sanitizeKey(anotherKey).join('/');
                }

                traverse = anotherKey || traverse;
            }
        }

        return traverse;
    };

    /**
     * Pauses eventing for this store.
     *
     * @this ContextHub.Store.Core
     */
    ContextHub.Store.Core.prototype.pauseEventing = function() {
        if (this.eventing) {
            this.eventing.pause(this.eventChannel);
        }
    };

    /**
     * Resumes eventing for this store.
     *
     * @this ContextHub.Store.Core
     */
    ContextHub.Store.Core.prototype.resumeEventing = function() {
        if (this.eventing) {
            this.eventing.resume(this.eventChannel);
        }
    };

    /**
     * Checks if eventing is paused for this store.
     *
     * @this ContextHub.Store.Core
     * @return {Boolean} status - true if eventing is paused
     */
    ContextHub.Store.Core.prototype.isEventingPaused = function() {
        return this.eventing && this.eventing.isPaused(this.eventChannel);
    };

    /**
     * Triggers 'ready' event for this store.
     *
     * @this ContextHub.Store.Core
     */
    ContextHub.Store.Core.prototype.announceReadiness = function() {
        var name = this.name;
        var overlay = null;

        /* add time stamp */
        ContextHub.console.timeStamp('"' + name + '" ready');

        /* we need to add overlay, but only for stores inheriting from JSONPStore */
        if (this instanceof ContextHub.Store.JSONPStore) {
            var storeKeys = this.getKeys();

            overlay = { keys: { all: { hash: {}, list: storeKeys } } };

            $.each(storeKeys, function(idx, key) {
                overlay.keys.all.hash[key] = true;
            });
        }

        /* trigger event */
        this.eventing.trigger(ContextHub.Constants.EVENT_STORE_READY + ':' + name, {}, {
            defer: 0,
            _: {
                action: 'ready',
                store: name,
                wasReadyAt: new Date().getTime(),
                duration: this.duration || 0,
                overlay: overlay
            }
        });
    };

    /**
     * Binds/unbinds update handler to a store. If a handler is not provided, a given selector will be used to unbind
     * previously attached handler, for example:
     *
     * var store = ContextHub.getStore('profile');
     * store.onUpdate('my-handler', function() { ... });   // binds handler
     * store.onUpdate('my-handler');                       // unbinds handler
     *
     * @param {String} selector - unique name
     * @param {Function} [handler] - update handler
     */
    ContextHub.Store.Core.prototype.onUpdate = function(selector, handler) {
        var bindHandler = typeof handler === 'function';
        var eventName = this.eventChannel;

        if (bindHandler) {
            ContextHub.eventing.on(eventName, handler.bind(this), selector);
        } else {
            ContextHub.eventing.off(eventName, selector);
        }
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Store.SessionStore} extends {@see ContextHub.Store.Core}
 * {@see ContextHub.Store.SessionStore.defaultConfig}
 * {@see ContextHub.Store.SessionStore.prototype.init}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.generic-stores - ContextHub.Store.SessionStore.js');

(function($, window) {
    'use strict';

    window.ContextHub.Store = window.ContextHub.Store || {};

    /**
     * Constructs a ContextHub.Store.SessionStore store.
     *
     * @extends ContextHub.Store.Core
     * @constructor
     */
    ContextHub.Store.SessionStore = function() {};

    /**
     * Default configuration of ContextHub.Store.SessionStore
     *
     * @namespace ContextHub.Store.SessionStore.defaultConfig
     */
    ContextHub.Store.SessionStore.defaultConfig = {
        eventDeferring: 16 * 2,
        persistence: null,
        eventing: ContextHub.eventing
    };

    /* inherit from ContextHub.Store.Core */
    ContextHub.Utils.inheritance.inherit(ContextHub.Store.SessionStore, ContextHub.Store.Core);

    /**
     * Initialize this store.
     *
     * @param {String} name - name of the store
     * @param {Object} config - configuration
     */
    ContextHub.Store.SessionStore.prototype.init = function(name, config) {
        this.config = $.extend(true, {}, this.config, ContextHub.Store.SessionStore.defaultConfig, config);
        this.uber('init', name, this.config);
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Store.PersistedStore} extends {@see ContextHub.Store.Core}
 * {@see ContextHub.Store.PersistedStore.defaultConfig}
 * {@see ContextHub.Store.PersistedStore.prototype.init}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.generic-stores - ContextHub.Store.PersistedStore.js');

(function($, window) {
    'use strict';

    window.ContextHub.Store = window.ContextHub.Store || {};

    /**
     * Constructs a ContextHub.Store.PersistedStore store.
     *
     * @extends ContextHub.Store.Core
     * @constructor
     */
    ContextHub.Store.PersistedStore = function() {};

    /**
     * Default configuration of ContextHub.Store.PersistedStore
     *
     * @namespace ContextHub.Store.PersistedStore.defaultConfig
     */
    ContextHub.Store.PersistedStore.defaultConfig = {
        eventDeferring: 16 * 2,
        persistence: ContextHub.persistence
    };

    /* inherit from ContextHub.Store.Core */
    ContextHub.Utils.inheritance.inherit(ContextHub.Store.PersistedStore, ContextHub.Store.Core);

    /**
     * Initialize this store.
     *
     * @param {String} name - name of the store
     * @param {Object} config - configuration
     */
    ContextHub.Store.PersistedStore.prototype.init = function(name, config) {
        this.config = $.extend(true, {}, this.config, ContextHub.Store.PersistedStore.defaultConfig, config);
        this.uber('init', name, this.config);
    };

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Store.JSONPStore} extends {@see ContextHub.Store.Core}
 * {@see ContextHub.Store.JSONPStore.prototype.init}
 * {@see ContextHub.Store.JSONPStore.defaultConfig}
 * {@see ContextHub.Store.JSONPStore.prototype.getServiceDetails}
 * {@see ContextHub.Store.JSONPStore.prototype.configureService}
 * {@see ContextHub.Store.JSONPStore.prototype.getServiceURL}
 * {@see ContextHub.Store.JSONPStore.prototype.queryService}
 * {@see ContextHub.Store.JSONPStore.prototype.getRawResponse}
 * {@see ContextHub.Store.JSONPStore.prototype.reset}
 * {@see ContextHub.Store.JSONPStore.prototype.setUpdateInterval}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.generic-stores - ContextHub.Store.JSONPStore.js');

(function($, window) {
    'use strict';

    window.ContextHub.Store = window.ContextHub.Store || {};

    /**
     * Constructs a ContextHub.Store.JSONPStore store.
     *
     * @namespace ContextHub.Store.JSONPStore
     * @extends ContextHub.Store.Core
     * @constructor
     */
    ContextHub.Store.JSONPStore = function() {};

    /* inherit from ContextHub.Store.Core */
    ContextHub.Utils.inheritance.inherit(ContextHub.Store.JSONPStore, ContextHub.Store.Core);

    /**
     * Generates JS valid name of a callback function.
     *
     * @param {String} name - store name
     * @return {String} javascript valid function name
     */
    var generateCallbackName = function(name) {
        var validName = name || '';
        validName = validName.replace(/[^a-zA-Z0-9]/g, '');

        /* generates hash basing on the name */
        var generate = function() {
            var seed = 0;

            for (var y = 0; y < name.length; y++) {
                seed = ~~(((seed << 5) - seed) + name.charCodeAt(y));
            }

            var x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };

        /* extend the name if needed */
        if ((validName.length === 0) || (validName !== name)) {
            validName = 'x' + validName + generate().toString(36).substr(2, 5);
        }

        return validName;
    };

    /**
     * Initialize this store.
     *
     * @param {String} name - name of the store
     * @param {Object} config - configuration
     */
    ContextHub.Store.JSONPStore.prototype.init = function(name, config) {
        this.config = $.extend(true, {}, this.config, ContextHub.Store.JSONPStore.defaultConfig, config);
        this.callbackName = generateCallbackName(name);
        this.uber('init', name, this.config);
        this.setUpdateInterval();
    };

    /**
     * Default configuration of ContextHub.Store.JSONPStore
     *
     * Available config properties:
     * {
     *   eventDeferring: [int],
     *   persistence: [object],
     *   eventing: [object],
     *   service: {
     *     jsonp: [boolean],
     *     script: [boolean],
     *     timeout: [int],
     *     ttl: [int],
     *     secure: [boolean],
     *     host: [string],
     *     port: [int],
     *     path: [string],
     *     params: [object],
     *     synchronous: [boolean]
     *   },
     *   pollInterval: [int]
     * }
     *
     * @namespace ContextHub.Store.JSONPStore.defaultConfig
     */
    ContextHub.Store.JSONPStore.defaultConfig = {
        eventDeferring: 16 * 2,
        persistence: null,
        eventing: ContextHub.eventing,
        service: null
    };

    /**
     * Returns service details.
     *
     * @this ContextHub.Store.JSONPStore
     * @return {Object}
     */
    ContextHub.Store.JSONPStore.prototype.getServiceDetails = function() {
        return this.config.service;
    };

    /**
     * Sets service configuration (updates or overrides the config).
     *
     * @param {Object} serviceConfig - config
     * @param {Boolean} [override] - if true, current config will be overwritten
     * @this ContextHub.Store.JSONPStore
     */
    ContextHub.Store.JSONPStore.prototype.configureService = function(serviceConfig, override) {
        this.config.service = override ? serviceConfig : $.extend(true, {}, this.config.service, serviceConfig);
    };

    /**
     * Resolves given parameter (supported patterns: ${variable:ContextHub.Paths.*} or ${contexthub:/path/to/key} - for
     * example ${contexthub:/store/profile/age} will get replaced with it's value or empty string).
     *
     * @private
     * @param {String} parameter
     * @return {String}
     */
    ContextHub.Store.JSONPStore.prototype.resolveParameter = function(parameter) {
        var parameterValue = ($.type(parameter) === 'boolean') ? String(parameter) : parameter;
        var result = parameterValue || '';
        var allowedPrefix = [
            'ContextHub.Paths.'
        ];

        if ($.type(parameterValue) === 'string') {
            var matches = result.match(/\$\{(contexthub|variable):[^}]+}/g);

            /* replace all matching patterns with values */
            if (matches) {
                $.each(matches, function(idx, item) {
                    /* ${category:key} -> [ 'category', 'key' ] */
                    var chunks = item.slice(2, -1).split(/:/);
                    var category = chunks.shift();
                    var key = chunks.shift();
                    var replacement = null;

                    if (category === 'contexthub') {
                        replacement = ContextHub.persistence.getItem(key);
                    }

                    if ((category === 'variable') && key) {
                        $.each(this.allowedPrefix, function(x, el) {
                            var validPrefix = key.indexOf(el) === 0;

                            if (validPrefix) {
                                replacement = ContextHub.Utils.JSON.tree.getItem(window, key.replace(/\./g, '/'));
                            }

                            return !validPrefix;
                        });
                    }

                    result = result.replace(item, replacement || '');
                }.bind({ allowedPrefix: allowedPrefix }));
            }
        }

        return result;
    };

    /**
     * Returns URL to a service. If {@code resolve} is set to true, all parameters will get resolved too.
     *
     * @this ContextHub.Store.JSONPStore
     * @param {Boolean} resolve - determines whether parameters should be resolved
     * @return {String} - service URL
     */
    ContextHub.Store.JSONPStore.prototype.getServiceURL = function(resolve) {
        var service = this.getServiceDetails();
        var url = [];
        var params = [];
        var resolvedPath;

        if ($.type(service) !== 'object') {
            return null;
        }

        /* if it's JSONP service, set a callback function */
        if (service.jsonp) {
            var jsonCallback;

            if (service.jsonp === true) {
                jsonCallback = 'callback';
            } else {
                jsonCallback = ('' + service.jsonp).replace(/[^a-zA-Z0-9_$]/g, '');
            }

            service.params = service.params || {};
            service.params[jsonCallback] = 'ContextHub.Callbacks.' + this.callbackName;
        }

        /* build url */
        service.port = (service.port && service.port === 80) ? '' : service.port;

        if (service.host) {
            if (typeof service.secure === 'undefined' || service.secure === 'auto') {
                url.push('//');
            } else {
                url.push(service.secure ? 'https://' : 'http://');
            }

            url.push(service.host);
            url.push(service.port ? (':' + service.port) : '');
        } else {
            url.push(window.location.protocol + '//' + window.location.host);
        }

        service.path = service.path || '/';
        resolvedPath = '' + (resolve ? this.resolveParameter(service.path) : service.path);
        url.push(resolvedPath);

        /* encode query parameters */
        $.each(service.params || {}, function(key, value) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(resolve ? this.resolveParameter(value) : value));
        }.bind(this));

        /* add encoded parameters to url */
        if (params.length) {
            /* add character indicating beginning of the query string or "&" if path already contains some parameters */
            url.push((resolvedPath.indexOf('?') === -1) ? '?' : '&');

            /* join all parameters */
            url.push(params.join('&'));
        }

        return url.join('');
    };

    /**
     * Performs a query to remote service. Event 'ready' is triggered once query is finished.
     * Callback is executed with result set as a parameter.
     *
     * @this ContextHub.Store.JSONPStore
     * @param {Boolean} reload
     */
    ContextHub.Store.JSONPStore.prototype.queryService = function(reload) {
        var url = this.getServiceURL(true);

        /* do nothing if service is not configured properly */
        if (!url) {
            return;
        }

        /* vars */
        var isScript = this.config.service.jsonp || this.config.service.script;
        var wasPaused = this.isEventingPaused();
        var self = this;

        /* force reload */
        if (reload) {
            this.removeItem('_', { silent: true });
        }

        /* check last response time and service url */
        var lastResponseTime = this.getItem(ContextHub.Constants.SERVICE_RESPONSE_TIME_KEY) || 0;
        var lastUrl = this.getItem(ContextHub.Constants.SERVICE_LAST_URL_KEY);

        /* if response lifetime is still valid and url didn't change since last query, return cached response */
        if ((lastResponseTime + this.config.service.ttl > new Date().getTime()) && (lastUrl === url)) {
            this.duration = 'cached';
            this.announceReadiness();
            return;
        }

        this.setItem(ContextHub.Constants.SERVICE_LAST_URL_KEY, url);

        /* set up callback handler */
        window.ContextHub.Callbacks = window.ContextHub.Callbacks || {};
        ContextHub.Callbacks[this.callbackName] = this.callbackFunction.bind(this);

        /* ajax request options */
        var options = {
            url: url,
            timeout: this.config.service.timeout,
            async: this.config.service.synchronous ? false : true,
            method: this.config.service.method || 'GET'
        };

        if (isScript) {
            $.extend(options, {
                dataType: 'script',
                cache: true
            });
        }

        /* pause eventing and reset timer */
        this.pauseEventing();
        this.duration = 0;
        ContextHub.Shared.timers.start(this.name);

        /* perform a query */
        var request = $.ajax(options);

        /* attach success handler if a requested resource is not a script */
        if (!isScript) {
            request.done(function(result, status, xhr) {
                var responseJSON = ContextHub.Utils.JSON.parse(xhr.responseText);
                ContextHub.Callbacks[self.callbackName](responseJSON);
            });
        }

        /* attach failure handler */
        request.fail(function(error) {
            self.failureHandler(error);
        });

        /* complete the request - resume eventing and announce readiness */
        request.always(function() {
            if (!wasPaused) {
                self.resumeEventing();
            }

            self.announceReadiness();
        });
    };

    /**
     * Default success handler - returns unmodified data. User should override it to post process the response before
     * it's stored in the persistence.
     *
     * @private
     * @param {Object} response
     * @returns {Object}
     */
    ContextHub.Store.JSONPStore.prototype.successHandler = function(response) {
        return response;
    };

    /**
     * Default failure handler - logs error message in the console. User should override it to handle failure properly.
     *
     * @private
     * @this ContextHub.Store.JSONPStore
     * @param {Object} error
     */
    ContextHub.Store.JSONPStore.prototype.failureHandler = function(error) {
        var config = (this.config || {}).service;

        ContextHub.console.log('There was an error while accessing JSONP service in the store "' + this.name + '", configuration: ', config, ', error: ', error);
    };

    /**
     * Stores in persistence data returned by a service (post-processed by a success handler). Stores duration time
     * used to query the JSONP service.
     *
     * @private
     * @this ContextHub.Store.JSONPStore
     * @param {Object} response
     */
    ContextHub.Store.JSONPStore.prototype.callbackFunction = function(response) {
        this.duration = ContextHub.Shared.timers.finish(this.name) + 'ms';

        this.setItem(ContextHub.Constants.SERVICE_RESPONSE_TIME_KEY, new Date().getTime());

        var processedResponse = this.successHandler(response);
        var responseType = (processedResponse instanceof Array) ? [] : {};
        processedResponse = $.extend(true, responseType, processedResponse);

        this.setItem(ContextHub.Constants.SERVICE_RAW_RESPONSE_KEY, processedResponse);
    };

    /**
     * Returns raw response from a service.
     *
     * @this ContextHub.Store.JSONPStore
     * @return {Object}
     */
    ContextHub.Store.JSONPStore.prototype.getRawResponse = function() {
        return this.getItem(ContextHub.Constants.SERVICE_RAW_RESPONSE_KEY) || {};
    };

    /**
     * Resets store's persistence (if keepRemainingData is not set) and performs a query to external service.
     *
     * @param {Boolean} keepRemainingData - indicates if a current data should stay in the persistence
     */
    ContextHub.Store.JSONPStore.prototype.reset = function(keepRemainingData) {
        this.uber('reset', keepRemainingData);
        this.queryService(false);
    };

    /**
     * Start interval which updates the store every given milliseconds.
     *
     * @param {Number} interval - time in milliseconds to update values. Will override JSONP config.
     */
    ContextHub.Store.JSONPStore.prototype.setUpdateInterval = function(interval) {
        interval = isNaN(interval) ? this.config.pollInterval : interval;

        if (this.intervalHandler){
            window.clearInterval(this.intervalHandler);
            this.intervalHandler = null;
        }

        if (interval > 0) {
            var self = this;

            this.intervalHandler = window.setInterval(function() {
                self.queryService(true);
            }, interval);
        }
    };


}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Store.PersistedJSONPStore} extends {@see ContextHub.Store.JSONPStore}
 * {@see ContextHub.Store.PersistedJSONPStore.defaultConfig}
 * {@see ContextHub.Store.PersistedJSONPStore.prototype.init}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.generic-stores - ContextHub.Store.PersistedJSONPStore.js');

(function($, window) {
    'use strict';

    window.ContextHub.Store = window.ContextHub.Store || {};

    /**
     * Constructs a ContextHub.Store.PersistedJSONPStore store.
     *
     * @extends ContextHub.Store.JSONPStore
     * @constructor
     */
    ContextHub.Store.PersistedJSONPStore = function() {};

    /**
     * Default configuration of {@see ContextHub.Store.PersistedJSONPStore}
     *
     * @namespace ContextHub.Store.PersistedJSONPStore.defaultConfig
     */
    ContextHub.Store.PersistedJSONPStore.defaultConfig = {
        eventDeferring: 16 * 2,
        persistence: ContextHub.persistence
    };

    /* inherit from ContextHub.Store.JSONPStore */
    ContextHub.Utils.inheritance.inherit(ContextHub.Store.PersistedJSONPStore, ContextHub.Store.JSONPStore);

    /**
     * Initialize this store.
     *
     * @param {String} name - name of the store
     * @param {Object} config - configuration
     */
    ContextHub.Store.PersistedJSONPStore.prototype.init = function(name, config) {
        this.config = $.extend(true, {}, this.config, ContextHub.Store.PersistedJSONPStore.defaultConfig, config);
        this.uber('init', name, this.config);
    };

}(ContextHubJQ, window));
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* WARNING: Do not add your code to this file - it should stay as simple as possible */

/**
 * globals
 * -------
 *
 * {@see ContextHub.Constants.EVENT_SEGMENT_REGISTERED}
 * {@see ContextHub.Constants.EVENT_SEGMENT_UNREGISTERED}
 * {@see ContextHub.Constants.EVENT_SEGMENT_UPDATED}
 * {@see ContextHub.Constants.EVENT_SCRIPT_REGISTERED}
 * {@see ContextHub.Constants.EVENT_SCRIPT_UNREGISTERED}
 * {@see ContextHub.Constants.EVENT_SCRIPT_UPDATED}
 * {@see ContextHub.Constants.EVENT_TEASER_REGISTERED}
 * {@see ContextHub.Constants.EVENT_TEASER_UNREGISTERED}
 * {@see ContextHub.Constants.EVENT_TEASER_LOADED}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.Constants.js');

(function($) {
    'use strict';

    var SegmentEngineConstants = {
        /**
         * Fired when a segment gets registered.
         *
         * @constant
         * @type {String}
         */
        EVENT_SEGMENT_REGISTERED: 'segment-engine:segment-registered',

        /**
         * Fired when a segment gets unregistered.
         *
         * @constant
         * @type {String}
         */
        EVENT_SEGMENT_UNREGISTERED: 'segment-engine:segment-unregistered',

        /**
         * Fired when a segment changes state (resolved <-> unresolved).
         *
         * @constant
         * @type {String}
         */
        EVENT_SEGMENT_UPDATED: 'segment-engine:segment-updated',

        /**
         * Fired when a script reference is registered.
         *
         * @constant
         * @type {String}
         */
        EVENT_SCRIPT_REGISTERED: 'segment-engine:script-registered',

        /**
         * Fired when a script reference is unregistered.
         *
         * @constant
         * @type {String}
         */
        EVENT_SCRIPT_UNREGISTERED: 'segment-engine:script-unregistered',

        /**
         * Fired when a script reference returns value different than previous time.
         *
         * @constant
         * @type {String}
         */
        EVENT_SCRIPT_UPDATED: 'segment-engine:script-updated',

        /**
         * Fired when a teaser gets registered.
         *
         * @constant
         * @type {String}
         */
        EVENT_TEASER_REGISTERED: 'segment-engine:teaser-registered',

        /**
         * Fired when a teaser gets unregistered.
         *
         * @constant
         * @type {String}
         */
        EVENT_TEASER_UNREGISTERED: 'segment-engine:teaser-unregistered',

        /**
         * Fired when a teaser is loaded.
         *
         * @constant
         * @type {String}
         */
        EVENT_TEASER_LOADED: 'segment-engine:teaser-loaded'
    };

    /* extend ContextHub's constants */
    $.extend(true, ContextHub.Constants, SegmentEngineConstants);

}(ContextHubJQ));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine}
 * {@see ContextHub.SegmentEngine.getResolvedSegments}
 * {@see ContextHub.SegmentEngine.getSegment}
 * {@see ContextHub.SegmentEngine.getComparisonOperators}
 * {@see ContextHub.SegmentEngine.getObjectValue}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = {
        version: '1.1.14-20201029-1531'
    };

    /**
     * Alias. Returns resolved segments. {@see ContextHub.SegmentEngine.SegmentManager.getResolvedSegments}
     */
    ContextHub.SegmentEngine.getResolvedSegments = function(options) {
        return ContextHub.SegmentEngine.SegmentManager.getResolvedSegments(options);
    };

    /**
     * Alias. Returns requested segment. {@see ContextHub.SegmentEngine.SegmentManager.getSegment}
     */
    ContextHub.SegmentEngine.getSegment = function(segmentPath) {
        return ContextHub.SegmentEngine.SegmentManager.getSegment(segmentPath);
    };

    /**
     * Alias. Returns all registered comparison operators. {@see ContextHub.SegmentEngine.OperatorManager.getAllOperators}
     */
    ContextHub.SegmentEngine.getComparisonOperators = function() {
        return ContextHub.SegmentEngine.OperatorManager.getAllOperators();
    };

    /**
     * Returns value of a given object.
     *
     * @param {ContextHub.SegmentEngine.Operator|ContextHub.SegmentEngine.Property|ContextHub.SegmentEngine.ScriptReference|ContextHub.SegmentEngine.SegmentReference|Object} data - reference object
     * @return {Object|Boolean|null} - value of a given object
     */
    ContextHub.SegmentEngine.getObjectValue = function(data) {
        var value;

        if (data === null || data === undefined) {
            /* no value */
            value = null;
        } else if (data instanceof ContextHub.SegmentEngine.Operator) {
            /* check if operator is resolved */
            value = data.isResolved();
        } else if (data instanceof ContextHub.SegmentEngine.Property) {
            /* get value of a property */
            value = data.getValue();
        } else if (data instanceof ContextHub.SegmentEngine.ScriptReference) {
            /* get function result */
            value = data.execute();
        } else if (data instanceof ContextHub.SegmentEngine.SegmentReference) {
            /* check if referenced segment is resolved */
            value = data.isResolved();
        } else {
            /* object is a value itself */
            value = data;
        }

        return value;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.Property}
 * {@see ContextHub.SegmentEngine.Property.prototype.info}
 * {@see ContextHub.SegmentEngine.Property.prototype.getKey}
 * {@see ContextHub.SegmentEngine.Property.prototype.getStoreName}
 * {@see ContextHub.SegmentEngine.Property.prototype.getItemName}
 * {@see ContextHub.SegmentEngine.Property.prototype.getValue}
 * {@see ContextHub.SegmentEngine.Property.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.Property.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Creates Property object for a specified key name.
     *
     * @constructor
     * @param key - key name (for example: profile/gender)
     */
    ContextHub.SegmentEngine.Property = function(key) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.Property;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* initialize */
        key = ContextHub.Utils.JSON.tree.sanitizeKey(key);
        this.key = '/' + key.join('/');
        this.storeName = key.shift();
        this.itemName = key.join('/');
    };

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.Property.prototype.info = {
        className: 'Property',
        updateEvent: ContextHub.Constants.EVENT_STORE_UPDATED
    };

    /**
     * Returns key name used during property registration.
     *
     * @return {String} - key name (for example: profile/gender)
     */
    ContextHub.SegmentEngine.Property.prototype.getKey = function() {
        return this.key;
    };

    /**
     * Returns store name that persists requested key.
     *
     * @return {String} - store name (for example: profile)
     */
    ContextHub.SegmentEngine.Property.prototype.getStoreName = function() {
        return this.storeName;
    };

    /**
     * Returns item name in a store persistence.
     *
     * @return {String} - item name (for example: gender)
     */
    ContextHub.SegmentEngine.Property.prototype.getItemName = function() {
        return this.itemName;
    };

    /**
     * Returns value of a registered property.
     *
     * @return {Object|null}
     */
    ContextHub.SegmentEngine.Property.prototype.getValue = function() {
        return ContextHub.get(this.key);
    };

    /**
     * Pretty print of the property.
     *
     * @override
     * @returns {String} - human readable Property object representation
     */
    ContextHub.SegmentEngine.Property.prototype.toString = function() {
        return this.info.className + '("' + this.getKey() + '") -> ' + this.getValue();
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.Operator}
 * {@see ContextHub.SegmentEngine.Operator.prototype.getOperatorName}
 * {@see ContextHub.SegmentEngine.Operator.prototype.getOperatorArguments}
 * {@see ContextHub.SegmentEngine.Operator.prototype.isResolved}
 * {@see ContextHub.SegmentEngine.Operator.prototype.traverse}
 * {@see ContextHub.SegmentEngine.Operator.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.Operator.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Creates Operator object. This function takes unlimited number of arguments.
     *
     * @constructor
     * @param {String} operatorName - operator name
     * @param {[ContextHub.SegmentEngine.Property|Object]} [operatorArguments] - one or more object
     */
    ContextHub.SegmentEngine.Operator = function(operatorName, operatorArguments) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.Operator;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* skip first argument, rest is as a list of comparison objects */
        operatorArguments = [].slice.call(arguments, 1);

        /* store the data */
        this.operatorName = operatorName;
        this.operatorArguments = operatorArguments;
    };

    /**
     * Returns operator name.
     *
     * @return {String} - operator name
     */
    ContextHub.SegmentEngine.Operator.prototype.getOperatorName = function() {
        return this.operatorName;
    };

    /**
     * Returns operator arguments.
     *
     * @return {[ContextHub.SegmentEngine.Property|Object]} - operator arguments
     */
    ContextHub.SegmentEngine.Operator.prototype.getOperatorArguments = function() {
        return this.operatorArguments;
    };

    /**
     * Checks if operator resolves to true.
     *
     * @return {Boolean} - returns true if operator condition is true, otherwise false
     */
    ContextHub.SegmentEngine.Operator.prototype.isResolved = function() {
        var result = false;
        var continueEvaluation = true;

        /* operator name */
        var operatorName = this.getOperatorName();
        var isAndOperator = /^and(\.|$)/.test(operatorName);
        var isOrOperator = /^or(\.|$)/.test(operatorName);

        /* get operator arguments */
        var operatorArguments = this.getOperatorArguments();

        /* if the operator is 'and' / 'or' and there is too less arguments (zero or one) - lets fill tha blanks */
        if ((isAndOperator || isOrOperator) && operatorArguments.length < 2) {
            var argumentsCount = operatorArguments.length;

            /* add [null, null] in case there was no arguments at all */
            if (argumentsCount === 0) {
                operatorArguments.push(null);
                operatorArguments.push(null);
            }

            /* if there was only one argument - add the second depending on the operator type */
            if (argumentsCount === 1) {
                operatorArguments.push(isAndOperator ? true : null);
            }
        }

        /* left side */
        var referenceObject = operatorArguments[0];
        var referenceValue = ContextHub.SegmentEngine.getObjectValue(referenceObject);
        var dataType = $.type(referenceValue);

        /* operator handler */
        var comparisonOperator = ContextHub.SegmentEngine.OperatorManager.getOperator(operatorName, dataType);

        /**
         * Checks if a given value and used operator are matching to a special case. If so, the result value is
         * overwritten and further condition resolution is stopped as it's useless.
         *
         * @private
         * @param {Object} value - value
         */
        var checkSpecialCase = function(value) {
            /* since value is false, the whole 'and' condition needs to be false as well */
            if (isAndOperator && value === false) {
                result = false;
                continueEvaluation = false;
            }

            /* the 'or' condition is already satisfied since value is true */
            if (isOrOperator && value === true) {
                result = true;
                continueEvaluation = false;
            }
        };

        /*
         * special case - condition evaluation should be stopped when operator:
         * - 'and' resolved one of arguments to 'false' (as conjunction already failed - no need to check right side)
         * - 'or' resolved one of arguments to 'true' (as condition is already satisfied)
         */
        checkSpecialCase(referenceValue);

        /* get remaining values - it will be overwritten later in continueEvaluation is true */
        var remainingValues = operatorArguments.length ? operatorArguments.slice(1) : [ null ];

        /* comparison */
        if (comparisonOperator && continueEvaluation) {
            /* two arguments should be used (exception for operators: 'and' / 'or' - they take as many arguments as provided) */
            var argumentsToUse = (isAndOperator || isOrOperator) ? operatorArguments.length : 2;

            /* what's the real operator name? ('equal' could be matched to 'equal.string' for example) */
            operatorName = comparisonOperator.operatorName;

            /* right side */
            remainingValues = [];

            for (var loop = 1; (loop < argumentsToUse) && continueEvaluation; loop++) {
                var argument = operatorArguments[loop];
                var argumentValue = ContextHub.SegmentEngine.getObjectValue(argument);

                /* add argument value to a list for further comparison */
                remainingValues.push(argumentValue);

                /* check special case to stop evaluation if needed */
                checkSpecialCase(argumentValue);
            }

            /* do we need to perform another check or resolution is already done? */
            if (continueEvaluation) {
                /* pass all arguments (left and right side) to the operator handler */
                var comparisonValues = [referenceValue].concat([].slice.call(remainingValues));
                result = comparisonOperator.handler.apply(this, comparisonValues);
            }
        }

        /*
         * todo:
         * following debug, *._resolution and getResolutionTree() can be safely removed when condition tree will
         * be done, because it can be achieved more easily with ContextHub.SegmentEngine.Operator.prototype.traverse()
         */
        ContextHub.console.debug('    comparing:', referenceValue, operatorName,
            (remainingValues.length ? remainingValues.join(' ' + operatorName + ' ') : remainingValues + ''), '=', result);

        this._resolution = [ operatorName, result, [].concat.call([ referenceValue ], remainingValues) ];

        return result;
    };

    /**
     * Traverses the condition tree. Calls processor (if provided) and filters out the nodes (if filter was provided).
     *
     * @param {Function} [processor] - processor gets called for each accepted node
     * @param {Function} [filter] - determines if a given node should be accepted
     * @returns {Array} - list of accepted nodes
     */
    ContextHub.SegmentEngine.Operator.prototype.traverse = function(processor, filter) {
        var result = [];

        /* adds node (if it's accepted) to the result set */
        var addNode = function(node) {
            /* add only "decision" nodes that have isResolved method defined */
            if (node && (typeof node.isResolved !== 'function')) {
                return;
            }

            /* check if filter accepts the node */
            if ((typeof filter === 'undefined') || ((typeof filter === 'function') && filter(node))) {
                /* add given node to the result set */
                result.push(node);

                /* call node processor if it was defined */
                if (typeof processor === 'function') {
                    processor(node);
                }
            }
        };

        /* add currently visited node */
        addNode(this);

        /* skip arguments if a given operator is invalid (content is broken/incomplete) */
        if (ContextHub.SegmentEngine.OperatorManager.getOperator(this.operatorName)) {
            /* traverse operator arguments */
            $.each(this.getOperatorArguments(), function(idx, argument) {
                /* traverse deeper if argument is operator */
                if (argument instanceof ContextHub.SegmentEngine.Operator) {
                    $.merge(result, argument.traverse(processor, filter));
                } else {
                    addNode(argument);
                }
            });
        }

        return result;
    };

    /**
     * Pretty print of the operator.
     *
     * @override
     * @returns {String} - human readable Operator object representation
     */
    ContextHub.SegmentEngine.Operator.prototype.toString = function() {
        var result = 'Operator("' + this.getOperatorName() + '"';

        $.each(this.getOperatorArguments(), function(idx, operatorArgument) {
            result += ', ' + operatorArgument;
        });

        result += ') -> ' + this.isResolved();

        return result;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.OperatorManager}
 * {@see ContextHub.SegmentEngine.OperatorManager.register}
 * {@see ContextHub.SegmentEngine.OperatorManager.unregister}
 * {@see ContextHub.SegmentEngine.OperatorManager.unregisterAllOperators}
 * {@see ContextHub.SegmentEngine.OperatorManager.getAllOperators}
 * {@see ContextHub.SegmentEngine.OperatorManager.getOperator}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.OperatorManager.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Registered comparison operators.
     *
     * @type {Object}
     */
    var registeredOperators = {};

    /**
     * Operator Manager - singleton class. Registers comparison operators and returns requested operator later on.
     */
    ContextHub.SegmentEngine.OperatorManager = {};

    /**
     * Registers given operator - old one will be overwritten.
     *
     * @param {String} operatorName - operator name
     * @param {Function} handler - operator handler
     */
    ContextHub.SegmentEngine.OperatorManager.register = function(operatorName, handler) {
        if ((typeof operatorName === 'string') && operatorName.length && !/\.$/.test(operatorName)) {
            registeredOperators[operatorName] = {
                operatorName: operatorName,
                handler: handler
            };
        }
    };

    /**
     * Unregisters given operator.
     *
     * @param {String} operatorName - operator name
     */
    ContextHub.SegmentEngine.OperatorManager.unregister = function(operatorName) {
        delete registeredOperators[operatorName];
    };

    /**
     * Unregisters all operators.
     */
    ContextHub.SegmentEngine.OperatorManager.unregisterAllOperators = function() {
        registeredOperators = {};
    };

    /**
     * Returns all registered operators.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.OperatorManager.getAllOperators = function() {
        return registeredOperators;
    };

    /**
     * Returns operator handler registered for a given name. For best match operator name is used with combination
     * of data type name. If matching handler can't be found - null is returned.
     *
     * @param {String} operatorName - operator name
     * @param {String} [dataType] - data type
     * @return {Object|null} - comparison operator or null
     */
    ContextHub.SegmentEngine.OperatorManager.getOperator = function(operatorName, dataType) {
        var elements = (operatorName || '').split('.', 2);
        operatorName = elements.shift();
        var preferredType = elements.shift() || '';

        /* precedence order */
        var comparisonOperator =
            registeredOperators[operatorName + '.' + preferredType] ||
            registeredOperators[operatorName + '.' + dataType] ||
            registeredOperators[operatorName];

        return comparisonOperator || null;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.Segment}
 * {@see ContextHub.SegmentEngine.Segment.prototype.info}
 * {@see ContextHub.SegmentEngine.Segment.prototype.register}
 * {@see ContextHub.SegmentEngine.Segment.prototype.unregister}
 * {@see ContextHub.SegmentEngine.Segment.prototype.isResolved}
 * {@see ContextHub.SegmentEngine.Segment.prototype.debug}
 * {@see ContextHub.SegmentEngine.Segment.prototype.isRegistered}
 * {@see ContextHub.SegmentEngine.Segment.prototype.isEnabled}
 * {@see ContextHub.SegmentEngine.Segment.prototype.enable}
 * {@see ContextHub.SegmentEngine.Segment.prototype.disable}
 * {@see ContextHub.SegmentEngine.Segment.prototype.getName}
 * {@see ContextHub.SegmentEngine.Segment.prototype.getPath}
 * {@see ContextHub.SegmentEngine.Segment.prototype.getBoost}
 * {@see ContextHub.SegmentEngine.Segment.prototype.getCondition}
 * {@see ContextHub.SegmentEngine.Segment.prototype.getDependencies}
 * {@see ContextHub.SegmentEngine.Segment.prototype.onUpdate}
 * {@see ContextHub.SegmentEngine.Segment.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.Segment.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Registers new segment.
     *
     * @constructor
     * @param {Object|String} options - segment options or segment path
     * @param {ContextHub.SegmentEngine.Operator} condition - segment condition
     * @return {ContextHub.SegmentEngine.Segment}
     */
    ContextHub.SegmentEngine.Segment = function(options, condition) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.Segment;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* initialize */
        var config = options || {};

        /* config can be: string = path, array = [ name, path, boost ], otherwise it's { name: .., path: .., boost: .. } */
        if (typeof config === 'string') {
            config = { path: options };
        } else if (config.length) {
            config = {
                name: config.shift(),
                path: config.shift(),
                boost: config.shift()
            };
        }

        /* sanitize parameters */
        var segmentName = $.trim(config.name);
        var segmentPath = $.trim(config.path);
        var segmentBoost = parseInt($.trim(config.boost), 10) || 0;

        if (segmentName.length === 0) {
            segmentName = segmentPath.split('/').pop();
        }

        segmentName = segmentName
            .replace(/ /g, '-')
            .replace(/[^a-z0-9\-]/ig, '')
            .toLowerCase();

        /* store values */
        this.title = config.name;
        this.name = segmentName;
        this.path = segmentPath;
        this.boost = segmentBoost;
        this.register(condition);
    };

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.Segment.prototype.info = {
        className: 'Segment',
        updateEvent: ContextHub.Constants.EVENT_SEGMENT_UPDATED
    };

    /**
     * Registers segment. It's alternative way to register segment if the condition wasn't passed to the constructor.
     * Argument condition will be ignored if condition was already passed to the constructor.
     *
     * @param {ContextHub.SegmentEngine.Operator} [condition] - segment condition
     */
    ContextHub.SegmentEngine.Segment.prototype.register = function(condition) {
        /* do nothing if path is not provided or segment is already registered */
        if (this.getPath().length === 0 || this.isRegistered()) {
            return;
        }

        /* register new segment */
        if (condition instanceof ContextHub.SegmentEngine.Operator) {
            this.cachedResult = null;
            this.condition = condition;
            this.enabled = false;
            this.registered = false;
            ContextHub.SegmentEngine.Dependency.findAllDependencies.call(this, this.getCondition());
            ContextHub.SegmentEngine.SegmentManager.register(this);
        }
    };

    /**
     * Unregisters this segment.
     */
    ContextHub.SegmentEngine.Segment.prototype.unregister = function() {
        this.registered = false;
        this.enabled = false;
        this.condition = null;
        this.isResolved();

        ContextHub.SegmentEngine.SegmentManager.unregister(this.getPath());
    };

    /**
     * Checks if segment is resolved.
     *
     * @return {Boolean} - true if segment is resolved
     */
    ContextHub.SegmentEngine.Segment.prototype.isResolved = function() {
        var result = false;

        /* return cached result */
        if (this.cachedResult !== null) {
            ContextHub.console.debug('[+] Segment "' + this.getPath() + '" resolution (cached):', this.cachedResult);
            return this.cachedResult;
        }

        ContextHub.console.debug('[+] Segment "' + this.getPath() + '" resolution:');

        if (this.isEnabled() && this.isRegistered()) {
            result = this.condition.isResolved();
        }

        if (result !== this.cachedResult) {
            this.cachedResult = result;

            ContextHub.eventing.trigger(this.info.updateEvent, {
                resolved: result,
                key: this.getPath(),
                action: 'set',
                value: result
            }, {
                defer: 0,
                _: {
                    resolved: result,
                    path: this.getPath()
                }
            });
        }

        return result;
    };

    /**
     * Creates resolution tree of the segment.
     *
     * @private
     * @param {ContextHub.SegmentEngine.Operator} conditionNode - root node of the condition
     * @param {Object} [resolutionTree] - resolution tree (used internally)
     * @returns {Object} - final resolution tree
     */
    var getResolutionTree = function(conditionNode, resolutionTree) {
        var nodeResolution = conditionNode._resolution;
        var nodeName;
        resolutionTree = resolutionTree || [];

        /* is resolution available? */
        if (nodeResolution) {
            /* get info from resolution node: [ operatorName, operatorResolution, operatorArguments ] */
            var operatorName = nodeResolution.shift();
            var operatorResult = nodeResolution.shift();
            var operatorArguments = nodeResolution.shift();

            /* new node name: operatorName (true|false) */
            nodeName = operatorName + ' (' + operatorResult + ')';

            /* create new node */
            var newNode = {};
            newNode[nodeName] = operatorArguments;

            /* push or return new node - depending if it's middle of the tree or the edge */
            if (resolutionTree instanceof Array) {
                resolutionTree.push(newNode);
            } else {
                return newNode;
            }
        }

        /* walk through operator arguments */
        $.each(conditionNode.operatorArguments, function(idx, childNode) {
            /* visit only operator nodes */
            if (childNode instanceof ContextHub.SegmentEngine.Operator) {
                var treeNode = ((resolutionTree instanceof Array) ? resolutionTree[resolutionTree.length - 1] : resolutionTree)[nodeName];
                var currentNode = (typeof treeNode[idx] === 'boolean') ? {} : [];

                treeNode[idx] = getResolutionTree(childNode, currentNode);
            }
        });

        return resolutionTree;
    };

    /**
     * Shows segment's debug information.
     */
    ContextHub.SegmentEngine.Segment.prototype.debug = function() {
        var segmentCondition = this.getCondition();

        if (segmentCondition) {
            /* resolve segment */
            var isResolved = this.isResolved();

            /* build a debug tree */
            var resolutionTree = getResolutionTree(segmentCondition);

            ContextHub.console.debug('[todo] debug: ', isResolved, resolutionTree);
        } else {
            ContextHub.console.debug('[-] [SegmentEngine] Segment "' + this.getPath() + '" is invalid.');
        }
    };

    /**
     * Returns true if this segment is registered.
     *
     * @return {Boolean} - true if segment is registered
     */
    ContextHub.SegmentEngine.Segment.prototype.isRegistered = function() {
        return this.registered === true;
    };

    /**
     * Returns true if this segment is enabled (note: only valid segment can be registered and then enabled).
     *
     * @return {Boolean} - true if segment is registered
     */
    ContextHub.SegmentEngine.Segment.prototype.isEnabled = function() {
        return this.enabled === true;
    };

    /**
     * Enables segment. Note that only valid segment (having correct condition) can be enabled.
     */
    ContextHub.SegmentEngine.Segment.prototype.enable = function() {
        if (this.condition instanceof ContextHub.SegmentEngine.Operator) {
            this.enabled = true;
        }
    };

    /**
     * Disables segment.
     */
    ContextHub.SegmentEngine.Segment.prototype.disable = function() {
        this.enabled = false;
    };

    /**
     * Returns segment name.
     *
     * @returns {String} - segment name
     */
    ContextHub.SegmentEngine.Segment.prototype.getName = function() {
        return this.name;
    };

	/**
     * Returns segment title.
     *
     * @returns {String} - segment title
     */
    ContextHub.SegmentEngine.Segment.prototype.getTitle = function() {
        return this.title;
    };

    /**
     * Returns segment path.
     *
     * @returns {String} - segment path
     */
    ContextHub.SegmentEngine.Segment.prototype.getPath = function() {
        return this.path;
    };

    /**
     * Returns segment boost.
     *
     * @returns {Number} - segment boost
     */
    ContextHub.SegmentEngine.Segment.prototype.getBoost = function() {
        return this.boost;
    };

    /**
     * Returns segment condition.
     *
     * @returns {ContextHub.SegmentEngine.Operator} - segment condition
     */
    ContextHub.SegmentEngine.Segment.prototype.getCondition = function() {
        return this.condition;
    };

    /**
     * Returns dependencies of a segment.
     *
     * @returns {Array} - list of dependencies
     */
    ContextHub.SegmentEngine.Segment.prototype.getDependencies = function() {
        return this.dependencyList || ContextHub.SegmentEngine.Dependency.getEmptyDependencyList();
    };

    /**
     * Binds/unbinds update handler to a segment. If a handler is not provided, a given selector will be used to unbind
     * previously attached handler, for example:
     *
     * segment.onUpdate('my-handler', function() { ... });   // binds handler
     * segment.onUpdate('my-handler');                       // unbinds handler
     *
     * @param {String} selector - unique name
     * @param {Function} [handler] - update handler
     */
    ContextHub.SegmentEngine.Segment.prototype.onUpdate = function(selector, handler) {
        var bindHandler = typeof handler === 'function';
        var eventName = this.info.updateEvent;

        if (bindHandler) {
            ContextHub.eventing.on(eventName, function(event, data) {
                if (data && data.keys.all.hash[this.segment]) {
                    this.handler();
                }
            }.bind({ segment: this.getPath(), handler: handler }), selector);
        } else {
            ContextHub.eventing.off(eventName, selector);
        }
    };

    /**
     * Pretty print of the segment.
     *
     * @override
     * @returns {String} - human readable Segment object representation
     */
    ContextHub.SegmentEngine.Segment.prototype.toString = function() {
        var parameters = '("' + this.getPath() + '", ' + this.getBoost() + ', ' + this.getCondition() + ')';

        return this.info.className + parameters + ' -> ' + this.isResolved();
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.SegmentReference}
 * {@see ContextHub.SegmentEngine.SegmentReference.prototype.info}
 * {@see ContextHub.SegmentEngine.SegmentReference.prototype.getSegmentName}
 * {@see ContextHub.SegmentEngine.SegmentReference.prototype.isResolved}
 * {@see ContextHub.SegmentEngine.SegmentReference.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.SegmentReference.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Creates SegmentReference object for a specified segment path.
     *
     * @constructor
     * @param {String} segmentPath - segment path
     * @return {ContextHub.SegmentEngine.SegmentReference}
     */
    ContextHub.SegmentEngine.SegmentReference = function(segmentPath) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.SegmentReference;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* initialize */
        this.segmentPath = $.trim(segmentPath);
    };

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.SegmentReference.prototype.info = {
        className: 'SegmentReference',
        updateEvent: ContextHub.Constants.EVENT_SEGMENT_UPDATED
    };

    /**
     * Returns segment path.
     *
     * @returns {String} - segment path
     */
    ContextHub.SegmentEngine.SegmentReference.prototype.getSegmentPath = function() {
        return this.segmentPath;
    };

    /**
     * Returns value of a registered segment.
     *
     * @return {Boolean} - true if segment is resolved
     */
    ContextHub.SegmentEngine.SegmentReference.prototype.isResolved = function() {
        var result = false;
        var segment = ContextHub.SegmentEngine.SegmentManager.getSegment(this.getSegmentPath());

        if (segment) {
            result = segment.isResolved();
        }

        return result;
    };

    /**
     * Pretty print of the segment reference.
     *
     * @override
     * @returns {String} - human readable SegmentReference object representation
     */
    ContextHub.SegmentEngine.SegmentReference.prototype.toString = function() {
        return this.info.className + '("' + this.getSegmentPath() + '") -> ' + this.isResolved();
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.SegmentManager}
 * {@see ContextHub.SegmentEngine.SegmentManager.info}
 * {@see ContextHub.SegmentEngine.SegmentManager.register}
 * {@see ContextHub.SegmentEngine.SegmentManager.unregister}
 * {@see ContextHub.SegmentEngine.SegmentManager.unregisterAllSegments}
 * {@see ContextHub.SegmentEngine.SegmentManager.getAllSegments}
 * {@see ContextHub.SegmentEngine.SegmentManager.getSegment}
 * {@see ContextHub.SegmentEngine.SegmentManager.getResolvedSegments}
 * {@see ContextHub.SegmentEngine.SegmentManager.getUnresolvedSegments}
 * {@see ContextHub.SegmentEngine.SegmentManager.invalidateCache}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.SegmentManager.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Registered segments.
     *
     * @type {Object}
     */
    var registeredSegments = {};

    /**
     * Segment Manager - singleton class. Registers, unregisters and resolves segments.
     */
    ContextHub.SegmentEngine.SegmentManager = {};

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.SegmentManager.info = {
        registerEvent: ContextHub.Constants.EVENT_SEGMENT_REGISTERED,
        unregisterEvent: ContextHub.Constants.EVENT_SEGMENT_UNREGISTERED
    };

    /**
     * Registers given segment.
     *
     * @param {ContextHub.SegmentEngine.Segment} segment - segment to register
     * @returns {Boolean} - true if segment was registered
     */
    ContextHub.SegmentEngine.SegmentManager.register = function(segment) {
        /* do nothing if argument is not a segment instance or if condition is not set */
        if (!(segment instanceof ContextHub.SegmentEngine.Segment) || !segment.getCondition()) {
            return false;
        }

        registeredSegments[segment.getPath()] = segment;
        segment.enabled = true;
        segment.registered = true;

        /* announce segment registration */
        ContextHub.eventing.trigger(ContextHub.SegmentEngine.SegmentManager.info.registerEvent, {
            key: segment.getPath(),
            action: 'set',
            value: 'registered'
        }, {
            defer: 0
        });

        /* activate dependency monitor */
        ContextHub.SegmentEngine.Dependency.dependencyMonitor(segment, true);
        segment.isResolved();

        return true;
    };

    /**
     * Unregisters given segment.
     *
     * @param {String|ContextHub.SegmentEngine.Segment} segmentPath - segment path or segment instance
     */
    ContextHub.SegmentEngine.SegmentManager.unregister = function(segmentPath) {
        var segment;

        if (segmentPath instanceof ContextHub.SegmentEngine.Segment) {
            segment = segmentPath;
        } else {
            segment = this.getSegment(segmentPath);
        }

        if (segment) {
            segment.registered = false;
            segment.disable();
            delete registeredSegments[segment.getPath()];

            /* deactivate dependency monitor */
            ContextHub.SegmentEngine.Dependency.dependencyMonitor(segment, false);
            segment.cachedResult = null;
            segment.dependencyList = ContextHub.SegmentEngine.Dependency.getEmptyDependencyList();
            segment.isResolved();

            /* announce segment unregistration */
            ContextHub.eventing.trigger(ContextHub.SegmentEngine.SegmentManager.info.unregisterEvent, {
                segment: segment,
                key: segment.getPath(),
                action: 'remove',
                value: 'unregistered'
            }, {
                defer: 0
            });
        }
    };

    /**
     * Unregisters all segments.
     */
    ContextHub.SegmentEngine.SegmentManager.unregisterAllSegments = function() {
        $.each(registeredSegments, function(segmentPath, segment) {
            segment.unregister();
        });
    };

    /**
     * Returns all registered segments.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.SegmentManager.getAllSegments = function() {
        return registeredSegments;
    };

    /**
     * Returns registered segment with a specific path.
     *
     * @param {String} segmentPath - segment path
     * @return {ContextHub.SegmentEngine.Segment|null} - segment or null
     */
    ContextHub.SegmentEngine.SegmentManager.getSegment = function(segmentPath) {
        return registeredSegments[segmentPath] || null;
    };

    /**
     * Returns array of resolved segments.
     *
     * @param {Object} [options] - options
     * @returns {Array|Object} - array or lookup of resolved segments
     */
    ContextHub.SegmentEngine.SegmentManager.getResolvedSegments = function(options) {
        var returnLookup = (options || {}).returnLookup === true;
        var resolvedSegments = returnLookup ? {} : [];
        var duration = ContextHub.Shared.timers.start();

        $.each(registeredSegments, function(segmentPath, segment) {
            if (segment.isResolved()) {
                if (returnLookup) {
                    resolvedSegments[segment.getPath()] = segment;
                } else {
                    resolvedSegments.push(segment);
                }
            }
        });

        ContextHub.console.log(ContextHub.Shared.timestamp(), '[+] checking resolved segments (' + ContextHub.Shared.timers.finish(duration) + 'ms)');
        return resolvedSegments;
    };

    /**
     * Returns array of unresolved segments.
     *
     * @param {Object} [options] - options
     * @returns {Array|Object} - array or lookup of unresolved segments
     */
    ContextHub.SegmentEngine.SegmentManager.getUnresolvedSegments = function(options) {
        var returnLookup = (options || {}).returnLookup === true;
        var unresolvedSegments = returnLookup ? {} : [];
        var duration = ContextHub.Shared.timers.start();

        $.each(registeredSegments, function(segmentPath, segment) {
            if (!segment.isResolved()) {
                if (returnLookup) {
                    unresolvedSegments[segment.getPath()] = segment;
                } else {
                    unresolvedSegments.push(segment);
                }
            }
        });

        ContextHub.console.log(ContextHub.Shared.timestamp(), '[+] checking unresolved segments (' + ContextHub.Shared.timers.finish(duration) + 'ms)');
        return unresolvedSegments;
    };

    /**
     * Invalidates cache and checks which segments are resolved.
     *
     * @returns {Array} - array of resolved segments
     */
    ContextHub.SegmentEngine.SegmentManager.invalidateCache = function() {
        for (var segmentPath in registeredSegments) {
            if (registeredSegments.hasOwnProperty(segmentPath)) {
                var segment = registeredSegments[segmentPath];

                segment.cachedResult = null;
            }
        }

        return ContextHub.SegmentEngine.SegmentManager.getResolvedSegments();
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.ScriptReference}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.info}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.dependOn}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.getScriptName}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.getScriptHandler}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.getScriptArguments}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.getDependencies}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.execute}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.isResolved}
 * {@see ContextHub.SegmentEngine.ScriptReference.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.ScriptReference.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Creates ScriptReference object and accepts unlimited arguments for a script handler.
     *
     * @constructor
     * @param {String} scriptName - script name
     * @param {Array} scriptArguments - script arguments
     * @return {ContextHub.SegmentEngine.ScriptReference}
     */
    ContextHub.SegmentEngine.ScriptReference = function(scriptName, scriptArguments) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.ScriptReference;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* skip 'scriptName' argument and store rest of the constructor arguments */
        scriptArguments = [].slice.call(arguments, 1);

        /* initialize */
        this.scriptName = $.trim(scriptName);
        this.scriptArguments = scriptArguments;
        this.cachedResult = null;
        this.dependencyList = ContextHub.SegmentEngine.Dependency.getEmptyDependencyList();

        /* check if parameters should be added as a dependency */
        for (var idx = 0; idx < this.scriptArguments.length; idx++) {
            this.dependOn(this.scriptArguments[idx]);
        }

        /* activate dependency monitor */
        ContextHub.SegmentEngine.Dependency.dependencyMonitor(this, true);
    };

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.info = {
        className: 'ScriptReference',
        updateEvent: ContextHub.Constants.EVENT_SCRIPT_UPDATED
    };

    /**
     * Adds specific item as a dependency.
     *
     * @param {Object} item - suggested dependency
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.dependOn = function(item) {
        ContextHub.SegmentEngine.Dependency.addDependency.call(this, item);
    };

    /**
     * Returns script name.
     *
     * @returns {String} - script name
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.getScriptName = function() {
        return this.scriptName;
    };

    /**
     * Returns script handler.
     *
     * @returns {Function} - script handler function
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.getScriptHandler = function() {
        return ContextHub.SegmentEngine.ScriptManager.getScript(this.getScriptName());
    };

    /**
     * Returns script arguments.
     *
     * @returns {Array} - script arguments
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.getScriptArguments = function() {
        return this.scriptArguments;
    };

    /**
     * Returns script dependencies.
     *
     * @returns {Object} - list of dependencies
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.getDependencies = function() {
        return this.dependencyList || ContextHub.SegmentEngine.Dependency.getEmptyDependencyList();
    };

    /**
     * Executes script with stored arguments. Arguments that's are {@see ContextHub.SegmentEngine.Operator|Property|ScriptReference},
     * will get resolved and values will be passed to the handler.
     *
     * @returns {Object} - script result
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.execute = function() {
        var result = null;
        var scriptHandler = this.getScriptHandler();

        /* return cached result */
        if (this.cachedResult !== null) {
            return this.cachedResult;
        }

        if (typeof scriptHandler === 'function') {
            var scriptArguments = this.getScriptArguments();
            var scriptArgumentsResolved = [];

            $.each(scriptArguments, function(idx, argument) {
                var argumentValue = ContextHub.SegmentEngine.getObjectValue(argument);
                scriptArgumentsResolved.push(argumentValue);
            });

            /* call script handler function */
            try {
                result = scriptHandler.apply(this, scriptArgumentsResolved);
            } catch (error) {
                ContextHub.console.error('[-] [SegmentEngine] User script "' + this.getScriptName() + '" failed:', error);
                result = null;
            }
        }

        /* trigger update event if result is different than previous value */
        if (this.cachedResult !== result) {
            this.cachedResult = result;

            ContextHub.eventing.trigger(this.info.updateEvent + ':' + this.getScriptName(), {
                script: this,
                key: this.getScriptName(),
                action: 'set',
                resolved: result,
                value: result
            }, {
                defer: 0,
                _: {
                    result: result,
                    scriptName: this.getScriptName()
                }
            });
        }

        return result;
    };

    /**
     * Alias. Executes script.
     *
     * @returns {Object} - script result
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.isResolved = function() {
        return this.execute();
    };

    /**
     * Pretty print of the script.
     *
     * @override
     * @returns {String} - human readable ScriptReference object representation
     */
    ContextHub.SegmentEngine.ScriptReference.prototype.toString = function() {
        var result = this.info.className + '("' + this.getScriptName() + '"';

        $.each(this.getScriptArguments(), function(idx, scriptArgument) {
            if (typeof scriptArgument === 'string') {
                scriptArgument = '"' + scriptArgument + '"';
            }

            result += ', ' + scriptArgument;
        });

        result += ') -> ' + this.execute();

        return result;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.ScriptManager}
 * {@see ContextHub.SegmentEngine.ScriptManager.register}
 * {@see ContextHub.SegmentEngine.ScriptManager.unregister}
 * {@see ContextHub.SegmentEngine.ScriptManager.unregisterAllScripts}
 * {@see ContextHub.SegmentEngine.ScriptManager.getAllScripts}
 * {@see ContextHub.SegmentEngine.ScriptManager.getScript}
 * {@see ContextHub.SegmentEngine.ScriptManager.isRegistered}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.ScriptManager.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Registered scripts.
     *
     * @type {Object}
     */
    var registeredScripts = {};

    /**
     * Script Manager - singleton class. Registers scripts and returns requested script later on.
     */
    ContextHub.SegmentEngine.ScriptManager = {};

    /**
     * Registers given script - old one will be overwritten.
     *
     * @param {String} scriptName - script name
     * @param {Function} handler - script
     */
    ContextHub.SegmentEngine.ScriptManager.register = function(scriptName, handler) {
        if ((typeof scriptName === 'string') && scriptName.length && (typeof handler === 'function')) {
            registeredScripts[scriptName] = handler;

            /* announce script registration */
            ContextHub.eventing.trigger(ContextHub.Constants.EVENT_SCRIPT_REGISTERED, {
                key: scriptName,
                action: 'set',
                value: 'registered'
            }, {
                defer: 0
            });
        }
    };

    /**
     * Unregisters given script.
     *
     * @param {String} scriptName - script name
     */
    ContextHub.SegmentEngine.ScriptManager.unregister = function(scriptName) {
        if (this.isRegistered(scriptName)) {
            /* announce script unregistration */
            ContextHub.eventing.trigger(ContextHub.Constants.EVENT_SCRIPT_UNREGISTERED, {
                key: scriptName,
                action: 'remove',
                value: 'unregistered'
            }, {
                defer: 0
            });
        }

        delete registeredScripts[scriptName];
    };

    /**
     * Unregisters all scripts.
     */
    ContextHub.SegmentEngine.ScriptManager.unregisterAllScripts = function() {
        $.each(this.getAllScripts(), function(scriptName) {
            this.unregister(scriptName);
        }.bind(this));
    };

    /**
     * Returns all registered scripts.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.ScriptManager.getAllScripts = function() {
        return registeredScripts;
    };

    /**
     * Function returning null (used when script wasn't found).
     *
     * @private
     * @param {String} scriptName - script name
     * @returns {Function} - handler
     */
    var unknownHandler = function(scriptName) {
        ContextHub.console.error('[-] [SegmentEngine] User script "' + scriptName + '" not found.');

        return function() { return null; };
    };

    /**
     * Returns script registered for a given name.
     *
     * @param {String} scriptName - script name
     * @return {Function} - script
     */
    ContextHub.SegmentEngine.ScriptManager.getScript = function(scriptName) {
        return registeredScripts[scriptName] || unknownHandler(scriptName);
    };

    /**
     * Checks if a specified script is registered.
     *
     * @param {String} scriptName - script name
     * @returns {Boolean} - true if given script name is registered
     */
    ContextHub.SegmentEngine.ScriptManager.isRegistered = function(scriptName) {
        return !!registeredScripts[scriptName];
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.Dependency}
 * {@see ContextHub.SegmentEngine.Dependency.getEmptyDependencyList}
 * {@see ContextHub.SegmentEngine.Dependency.addDependency}
 * {@see ContextHub.SegmentEngine.Dependency.findAllDependencies}
 * {@see ContextHub.SegmentEngine.Dependency.dependencyMonitor}
 * {@see ContextHub.SegmentEngine.Dependency.isMatching}
 * {@see ContextHub.SegmentEngine.Dependency.SegmentReferenceHandler}
 * {@see ContextHub.SegmentEngine.Dependency.ScriptReferenceHandler}
 * {@see ContextHub.SegmentEngine.Dependency.PropertyHandler}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine - ContextHub.SegmentEngine.Dependency.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine = window.ContextHub.SegmentEngine || {};

    /**
     * Dependency Utility - singleton class.
     */
    ContextHub.SegmentEngine.Dependency = {};

    /* allowed dependencies */
    ContextHub.SegmentEngine.Dependency.allowedDependencies = [
        ContextHub.SegmentEngine.SegmentReference,
        ContextHub.SegmentEngine.ScriptReference,
        ContextHub.SegmentEngine.Property
    ];

    /**
     * Creates empty dependency structure.
     *
     * @returns {Object} - empty dependency structure
     */
    ContextHub.SegmentEngine.Dependency.getEmptyDependencyList = function() {
        var result = {};

        $.each(ContextHub.SegmentEngine.Dependency.allowedDependencies, function(idx, item) {
            result[item.prototype.info.className] = {
                keys: [],
                updateEvent: null
            };
        });

        return result;
    };

    /**
     * Adds given item as a dependency. This method should be called the way that 'this' points to object
     * that user wants to extend, for example: ContextHub.SegmentEngine.Dependency.addDependency.call(SomeObject, item).
     *
     * @param {Object} item - item that will be added as a dependency
     */
    ContextHub.SegmentEngine.Dependency.addDependency = function(item) {
        if (!item) {
            return;
        }

        /* if there is no dependency list yet - create empty structure first */
        this.dependencyList = this.dependencyList || ContextHub.SegmentEngine.Dependency.getEmptyDependencyList();

        /* helpers */
        var name = null;
        var storeName = null;

        /* detect item type - supported are: Property, ScriptReference and SegmentReference */
        if (item instanceof ContextHub.SegmentEngine.Property) {
            name = item.getKey();
            storeName = name.replace(/(^\/|\/$)/g, '').split(/\//).shift() || null;
        } else if (item instanceof ContextHub.SegmentEngine.ScriptReference) {
            name = item.getScriptName();
        } else if (item instanceof ContextHub.SegmentEngine.SegmentReference) {
            name = item.getSegmentPath();
        } else {
            /* other item types are not supported */
            name = null;
        }

        /* add the item if it's supported */
        if (name) {
            var element = this.dependencyList[item.info.className];

            /* store a key name once */
            if (!element[name]) {
                element[name] = true;
                element.keys.push(name);
            }

            /* store additional info */
            element.variant = item.info.className;
            element.updateEvent = item.info.updateEvent;

            /* dependency specific info */
            if (storeName) {
                element.stores = element.stores || {};
                element.stores[storeName] = true;
            }
        }
    };

    /**
     * Traverses the condition tree and extracts all dependencies. This method should be called the way that 'this'
     * points to object that user wants to extend, for example:
     * ContextHub.SegmentEngine.Dependency.findAllDependencies.call(someObject, conditionTree).
     *
     * @param {ContextHub.SegmentEngine.Operator} conditionNode - root node of the condition
     */
    ContextHub.SegmentEngine.Dependency.findAllDependencies = function(conditionNode) {
        var childrenNodes = (conditionNode || {}).operatorArguments;

        /* are there children nodes? */
        if (childrenNodes) {
            var operatorName = conditionNode.operatorName;
            var expectedArguments = Math.min(childrenNodes.length, /^(and|or)(\.|$)/.test(operatorName) ? Number.MAX_VALUE : 2);
            var idx;

            /* iterate over arguments (max 2 arguments are accepted, except for and/or operator which will accept all of them) */
            for (idx = 0; idx < expectedArguments; idx++) {
                var item = childrenNodes[idx];

                if (item instanceof ContextHub.SegmentEngine.Operator) {
                    /* check other nodes recurrently */
                    ContextHub.SegmentEngine.Dependency.findAllDependencies.call(this, item);
                } else {
                    ContextHub.SegmentEngine.Dependency.addDependency.call(this, item);
                }
            }
        }
    };

    /**
     * Dependency monitor handler.
     *
     * @private
     * @param {Event} event - event
     * @param {Object} data - event data
     */
    var dependencyMonitorHandler = function(event, data) {
        var dependencies = this.getDependencies();
        var toCompare = null;

        /* which event needs to be handled? */
        if (data.channel === ContextHub.SegmentEngine.SegmentReference.prototype.info.updateEvent) {
            toCompare = dependencies.SegmentReference;
        } else if (data.channel === ContextHub.SegmentEngine.ScriptReference.prototype.info.updateEvent) {
            toCompare = dependencies.ScriptReference;
        } else if (data.channel === ContextHub.SegmentEngine.Property.prototype.info.updateEvent) {
            toCompare = dependencies.Property;
        } else {
            ContextHub.console.error('[-] [SegmentEngine] Unsupported event type:', data.channel);
        }

        /* if one of dependencies is modified, check if object is now resolved */
        if (toCompare && ContextHub.SegmentEngine.Dependency.isMatching(data, toCompare)) {
            this.cachedResult = null;
            this.isResolved();
        }
    };

    /**
     * Enables / disables dependency monitor for a given object.
     *
     * @param {ContextHub.SegmentEngine.Segment|ContextHub.SegmentEngine.ScriptReference} instance - watched object
     * @param {Boolean} enableMonitor - indicates whether monitor should be enabled or disabled
     */
    ContextHub.SegmentEngine.Dependency.dependencyMonitor = function(instance, enableMonitor) {
        /* item have to be ether Segment or ScriptReference */
        if (!(instance instanceof ContextHub.SegmentEngine.Segment) && !(instance instanceof ContextHub.SegmentEngine.ScriptReference)) {
            return;
        }

        /* meaningful selector name */
        var selector = (instance.getPath || instance.getScriptName).call(instance).replace(/[^a-z]/ig, '');

        /* get dependency list */
        var instanceDependencies = instance.getDependencies();
        var eventNames = [];

        /* list of data that should be monitored */
        for (var dependencies in instanceDependencies) {
            if (instanceDependencies.hasOwnProperty(dependencies)) {
                var item = instanceDependencies[dependencies];

                if (item.keys.length) {
                    eventNames.push(item.updateEvent);
                }
            }
        }

        /* are there any dependencies? */
        if (eventNames.length) {
            eventNames = eventNames.join(' ');

            /* enable or disable monitor? */
            if (enableMonitor) {
                /* this handler monitors dependencies */
                ContextHub.eventing.on(eventNames, dependencyMonitorHandler.bind(instance), selector);
            } else {
                /* deactivate monitor */
                ContextHub.eventing.off(eventNames, selector);
            }
        }
    };

    /**
     * Finds the right dependency checker and executes it.
     *
     * @param {Object} data - data to be compared
     * @param {Object} dependency - dependency list
     * @returns {Boolean} - true if one of dependencies are matching
     */
    ContextHub.SegmentEngine.Dependency.isMatching = function(data, dependency) {
        var variant = (dependency || {}).variant;
        var handler = ContextHub.SegmentEngine.Dependency[variant + 'Handler'];

        return (typeof handler === 'function') ? handler.call(this, data, dependency) : false;
    };

    /**
     * Compares if given data matches to the dependency list.
     *
     * @param {Object} data - data to be compared
     * @param {Object} dependency - dependency list
     * @returns {Boolean} - true if one of dependencies are matching
     */
    ContextHub.SegmentEngine.Dependency.SegmentReferenceHandler = function(data, dependency) {
        for (var idx = 0; idx < dependency.keys.length; idx++) {
            var needle = dependency.keys[idx];

            /* was a needle found in modified data? */
            if (data.keys.all.hash[needle]) {
                return true;
            }
        }

        return false;
    };

    /**
     * Compares if given data matches to the dependency list.
     *
     * @param {Object} data - data to be compared
     * @param {Object} dependency - dependency list
     * @returns {Boolean} - true if one of dependencies are matching
     */
    ContextHub.SegmentEngine.Dependency.ScriptReferenceHandler = function(data, dependency) {
        for (var idx = 0; idx < dependency.keys.length; idx++) {
            var needle = dependency.keys[idx];

            /* was a needle found in modified data? */
            if (data.keys.all.hash[needle]) {
                return true;
            }
        }

        return false;
    };

    /**
     * Compares if given data matches to the dependency list.
     *
     * @param {Object} data - data to be compared
     * @param {Object} dependency - dependency list
     * @returns {Boolean} - true if one of dependencies are matching
     */
    ContextHub.SegmentEngine.Dependency.PropertyHandler = function(data, dependency) {
        /* is data modified in one of dependant stores? */
        if (dependency.stores[data.store]) {
            for (var idx = 0; idx < dependency.keys.length; idx++) {
                /* get rid off store name, for example: /profile/gender -> /gender */
                var needle = dependency.keys[idx];
                needle = needle.substr(needle.indexOf('/', 1));

                /* was a needle found in modified data? */
                if (data.keys.all.hash[needle]) {
                    return true;
                }
            }
        }

        return false;
    };

})(ContextHubJQ, window);
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.and.js');

(function() {
    'use strict';

    /**
     * Returns boolean value of two objects in javascript && conjunction.
     *
     * @param {Object} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if both objects are true
     */
    var andOperator = function(left, right) {
        return !!(left && right);
    };

    /* comparison operators registration */
    ContextHub.SegmentEngine.OperatorManager.register('and', andOperator);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.or.js');

(function() {
    'use strict';

    /**
     * Returns boolean value of two objects in javascript || alternative.
     *
     * @param {Object} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if one of the objects is true
     */
    var orOperator = function(left, right) {
        return !!(left || right);
    };

    /* comparison operators registration */
    ContextHub.SegmentEngine.OperatorManager.register('or', orOperator);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.equal.js');

(function($) {
    'use strict';

    /**
     * Compares two objects.
     *
     * @private
     * @param {Object} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if objects are equal
     */
    var equalGeneric = function(left, right) {
        return left === right;
    };

    /**
     * Compares two strings. Arguments are converted to String object before comparison.
     *
     * @private
     * @param {String} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if strings are equal
     */
    var equalString = function(left, right) {
        left = String(left);
        right = String(right);

        return left === right;
    };

    /**
     * Compares two numbers. Arguments are converted to Number object before comparison.
     *
     * @private
     * @param {Number} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if numbers are equal
     */
    var equalNumber = function(left, right) {
        left = Number(String(left) || undefined);
        right = Number(String(right) || undefined);

        return left === right;
    };

    /**
     * Converts given object to boolean.
     *
     * @private
     * @param {Boolean|Object} bool - bool
     * @returns {Boolean} - true if bool is true
     */
    var toBoolean = function(bool) {
        if (typeof bool !== 'boolean') {
            bool = (/^true$/i).test($.trim(String(bool)));
        }

        return bool;
    };

    /**
     * Compares two booleans. Arguments are converted to Boolean object before comparison.
     *
     * @private
     * @param {Boolean} left - left side
     * @param {String|Boolean} right - right side
     * @returns {Boolean} - true if booleans are equal
     */
    var equalBoolean = function(left, right) {
        left = toBoolean(left);
        right = toBoolean(right);

        return left === right;
    };

    /**
     * Compares two dates. Arguments are converted to Date object before comparison.
     *
     * @private
     * @param {Date} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if dates are equal
     */
    var equalDate = function(left, right) {
        left = new Date(left || undefined);
        right = new Date(right || undefined);

        return Number(left) === Number(right);
    };

    /**
     * Checks if given string matches to a given regular expression. Right side argument is converted (if needed)
     * to RegExp object before comparison.
     *
     * @private
     * @param {String} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if string matches given regular expression
     */
    var equalRegExp = function(left, right) {
        var result = false;

        if (typeof left === 'string' && right) {
            /* create RegExp object if needed */
            if (!(right instanceof RegExp)) {
                right = new RegExp(right);
            }

            /* do regular expression test */
            result = right.test(left);
        }

        return result;
    };

    /* comparison operators registration */
    ContextHub.SegmentEngine.OperatorManager.register('equal', equalGeneric);
    ContextHub.SegmentEngine.OperatorManager.register('equal.string', equalString);
    ContextHub.SegmentEngine.OperatorManager.register('equal.number', equalNumber);
    ContextHub.SegmentEngine.OperatorManager.register('equal.boolean', equalBoolean);
    ContextHub.SegmentEngine.OperatorManager.register('equal.date', equalDate);
    ContextHub.SegmentEngine.OperatorManager.register('equal.regexp', equalRegExp);

})(ContextHubJQ);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.not-equal.js');

(function($) {
    'use strict';

    /**
     * Creates function returning opposed boolean value.
     *
     * @private
     * @param {Function} handler - handler
     * @returns {Function} - handler returning opposed value
     */
    var negation = function(handler) {
        return function() {
            return !handler.apply(this, arguments);
        };
    };

    /* create operator brother (equal -> not-equal) returning opposed boolean value for every 'equal.*' operator already registered */
    $.each(ContextHub.SegmentEngine.OperatorManager.getAllOperators(), function(operatorName, comparisonOperator) {
        if (/^equal(\.|$)/.test(operatorName)) {
            /* comparison operator registration */
            ContextHub.SegmentEngine.OperatorManager.register('not-' + operatorName, negation(comparisonOperator.handler));
        }
    });

})(ContextHubJQ);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.less-than.js');

(function() {
    'use strict';

    /**
     * Compares two objects.
     *
     * @param {Object} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is less than right
     */
    var lessThanGeneric = function(left, right) {
        return left < right;
    };

    /**
     * Compares two strings. Arguments are converted to String object before comparison.
     *
     * @private
     * @param {String} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is less than right (lexicographical order)
     */
    var lessThanString = function(left, right) {
        left = String(left);
        right = String(right);

        return left < right;
    };

    /**
     * Compares two numbers. Arguments are converted to Number object before comparison.
     *
     * @private
     * @param {Number} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is less than right
     */
    var lessThanNumber = function(left, right) {
        left = Number(String(left) || undefined);
        right = Number(String(right) || undefined);

        return left < right;
    };

    /**
     * Compares two dates. Arguments are converted to Date object before comparison.
     *
     * @private
     * @param {Date} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left date is before right
     */
    var lessThanDate = function(left, right) {
        left = new Date(left || undefined);
        right = new Date(right || undefined);

        return Number(left) < Number(right);
    };

    /* comparison operators registration */
    ContextHub.SegmentEngine.OperatorManager.register('less-than', lessThanGeneric);
    ContextHub.SegmentEngine.OperatorManager.register('less-than.string', lessThanString);
    ContextHub.SegmentEngine.OperatorManager.register('less-than.number', lessThanNumber);
    ContextHub.SegmentEngine.OperatorManager.register('less-than.date', lessThanDate);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.less-than-or-equal.js');

(function($) {
    'use strict';

    /**
     * Function returning false (used when comparison operator wasn't found).
     *
     * @private
     * @param {String} operatorName - operator name
     * @param {String|null} dataType - data type
     * @returns {Function} - operator handler
     */
    var unknownHandler = function(operatorName, dataType) {
        ContextHub.console.error('[-] [SegmentEngine] Comparison operator not found:', (operatorName + (dataType ? '.' + dataType : '')));

        return function() { return false; };
    };

    /**
     * Returns operator handler for a given operator name and data type, otherwise {@see unknownHandler}.
     *
     * @private
     * @param {String} operatorName - operator name
     * @param {String|null} dataType - data type
     * @returns {Function} - operator handler
     */
    var getHandler = function(operatorName, dataType) {
        var comparisonOperator = ContextHub.SegmentEngine.OperatorManager.getOperator(operatorName, dataType) || {};

        return comparisonOperator.handler || unknownHandler(operatorName, dataType);
    };

    /**
     * Creates a function using combination of 'less-than' / 'equal' for a given data type.
     *
     * @param {String|null} dataType - data type
     * @returns {Function} - combination of 'less-than' / 'equal' operator handlers
     */
    var generateLessThanOrEqual = function(dataType) {
        var lessThanHandler = getHandler('less-than', dataType);
        var equalHandler = getHandler('equal', dataType);

        return function() {
            return lessThanHandler.apply(this, arguments) || equalHandler.apply(this, arguments);
        };
    };

    /*
     * create operator brother (less-than -> less-than-or-equal) as combination of 'less-than' / 'equal' (in alternative)
     * for every 'less-than.*' operator already registered
     */
    $.each(ContextHub.SegmentEngine.OperatorManager.getAllOperators(), function(operatorName) {
        if (/^less-than(\.|$)/.test(operatorName)) {
            var elements = operatorName.split('.', 2);

            /* original operator name and it's data type */
            var originalOperatorName = elements.shift();
            var dataType = elements.shift();

            /* new operator name */
            var newOperatorName = originalOperatorName.replace('less-than', 'less-than-or-equal');

            if (dataType) {
                newOperatorName += '.' + dataType;
            }

            /* comparison operator registration */
            ContextHub.SegmentEngine.OperatorManager.register(newOperatorName, generateLessThanOrEqual(dataType));
        }
    });

})(ContextHubJQ);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.greater-than.js');

(function() {
    'use strict';

    /**
     * Compares two objects.
     *
     * @param {Object} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is greater than right
     */
    var greaterThanGeneric = function(left, right) {
        return left > right;
    };

    /**
     * Compares two strings. Arguments are converted to String object before comparison.
     *
     * @private
     * @param {String} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is greater than right (lexicographical order)
     */
    var greaterThanString = function(left, right) {
        left = String(left);
        right = String(right);

        return left > right;
    };

    /**
     * Compares two numbers. Arguments are converted to Number object before comparison.
     *
     * @private
     * @param {Number} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left is greater than right
     */
    var greaterThanNumber = function(left, right) {
        left = Number(String(left) || undefined);
        right = Number(String(right) || undefined);

        return left > right;
    };

    /**
     * Compares two dates. Arguments are converted to Date object before comparison.
     *
     * @private
     * @param {Date} left - left side
     * @param {Object} right - right side
     * @returns {Boolean} - true if left date is after right
     */
    var greaterThanDate = function(left, right) {
        left = new Date(left || undefined);
        right = new Date(right || undefined);

        return Number(left) > Number(right);
    };

    /* comparison operators registration */
    ContextHub.SegmentEngine.OperatorManager.register('greater-than', greaterThanGeneric);
    ContextHub.SegmentEngine.OperatorManager.register('greater-than.string', greaterThanString);
    ContextHub.SegmentEngine.OperatorManager.register('greater-than.number', greaterThanNumber);
    ContextHub.SegmentEngine.OperatorManager.register('greater-than.date', greaterThanDate);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.operators - Operator.greater-than-or-equal.js');

(function($) {
    'use strict';

    /**
     * Function returning false (used when comparison operator wasn't found).
     *
     * @private
     * @param {String} operatorName - operator name
     * @param {String|null} dataType - data type
     * @returns {Function} - operator handler
     */
    var unknownHandler = function(operatorName, dataType) {
        ContextHub.console.error('[-] [SegmentEngine] Comparison operator not found:', (operatorName + (dataType ? '.' + dataType : '')));

        return function() { return false; };
    };

    /**
     * Returns operator handler for a given operator name and data type, otherwise {@see unknownHandler}.
     *
     * @private
     * @param {String} operatorName - operator name
     * @param {String|null} dataType - data type
     * @returns {Function} - operator handler
     */
    var getHandler = function(operatorName, dataType) {
        var comparisonOperator = ContextHub.SegmentEngine.OperatorManager.getOperator(operatorName, dataType) || {};

        return comparisonOperator.handler || unknownHandler(operatorName, dataType);
    };

    /**
     * Creates a function using combination of 'greater-than' / 'equal' for a given data type.
     *
     * @param {String|null} dataType - data type
     * @returns {Function} - combination of 'greater-than' / 'equal' operator handlers
     */
    var generateGreaterThanOrEqual = function(dataType) {
        var greaterThanHandler = getHandler('greater-than', dataType);
        var equalHandler = getHandler('equal', dataType);

        return function() {
            return greaterThanHandler.apply(this, arguments) || equalHandler.apply(this, arguments);
        };
    };

    /*
     * create operator brother (greater-than -> greater-than-or-equal) as combination of 'greater-than' / 'equal' (in alternative)
     * for every 'greater-than.*' operator already registered
     */
    $.each(ContextHub.SegmentEngine.OperatorManager.getAllOperators(), function(operatorName) {
        if (/^greater-than(\.|$)/.test(operatorName)) {
            var elements = operatorName.split('.', 2);

            /* original operator name and it's data type */
            var originalOperatorName = elements.shift();
            var dataType = elements.shift();

            /* new operator name */
            var newOperatorName = originalOperatorName.replace('greater-than', 'greater-than-or-equal');

            if (dataType) {
                newOperatorName += '.' + dataType;
            }

            /* comparison operator registration */
            ContextHub.SegmentEngine.OperatorManager.register(newOperatorName, generateGreaterThanOrEqual(dataType));
        }
    });

})(ContextHubJQ);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction}
 * {@see ContextHub.SegmentEngine.PageInteraction.info}
 * {@see ContextHub.SegmentEngine.PageInteraction.getPropertyPlaceholders}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Page Interaction - singleton class.
     */
    ContextHub.SegmentEngine.PageInteraction = {};

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.PageInteraction.info = {
        /* property name: <span data-contexthub-property="..." ... /> */
        propertyHolder: 'data-contexthub-property',

        /* property processor name: <span ... data-processor="first, second, ..."/> */
        processorHolder: 'data-processor',

        /* default value: <span ... data-default-value="..."/> */
        defaultHolder: 'data-default-value'
    };

    /**
     * Returns a list of all placeholders added to the page.
     *
     * @param {String} [storeName] - store name
     * @returns {Array}
     */
    ContextHub.SegmentEngine.PageInteraction.getPropertyPlaceholders = function(storeName) {
        var selector = '[' + ContextHub.SegmentEngine.PageInteraction.info.propertyHolder + (storeName ? '^="%1"]' : ']');
        var placeholders = $([ selector.replace(/%1/, '/' + storeName), selector.replace(/%1/, storeName) ].join(', '));
        var result = [];

        $.each(placeholders, function(idx, item) {
            var placeholder = ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder(item);

            if (placeholder.isValid()) {
                result.push(placeholder);
            }
        });

        return result;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.update}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getPropertyName}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getKey}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getDefaultValue}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getValueProcessors}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.isValid}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.PropertyPlaceholder.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Invalidates cache for a given property placeholder. (Have to be called with the context of PropertyPlaceholder).
     * Since element can be modified in the meantime, we have to invalidate cache using this method.
     *
     * @private
     */
    var invalidateCache = function() {
        var property = this.element.attr(ContextHub.SegmentEngine.PageInteraction.info.propertyHolder);

        /* clear values if element or property name was removed */
        if (!this.element || !property) {
            this.storeName = null;
            this.keyName = null;
            this.propertyName = null;
            this.defaultValue = null;
            this.processors = [];

            return;
        }

        /* for example: profile/age -> [ 'profile', 'age' ] */
        var key = ContextHub.Utils.JSON.tree.sanitizeKey(property);

        /* for example: 'profile' */
        this.storeName = key.shift();

        /* for example: '/age' */
        this.propertyName = '/' + key.join('/');

        /* for example: '/profile/age' */
        this.keyName = '/' + this.storeName + this.propertyName;

        /* default value */
        this.defaultValue = $.trim(this.element.attr(ContextHub.SegmentEngine.PageInteraction.info.defaultHolder) || '');

        /* property value processors */
        this.processors = [];

        $.each((this.element.attr(ContextHub.SegmentEngine.PageInteraction.info.processorHolder) || '').split(/,/), function(idx, processor) {
            var processorName = $.trim(processor);

            if (processorName.length) {
                this.processors.push(processorName);
            }
        }.bind(this));
    };

    /**
     * Creates PropertyPlaceholder object basing on a given html element.
     *
     * @constructor
     * @param {HTMLElement} element - html element
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder = function(element) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        this.element = $(element);
        invalidateCache.call(this);
    };

    /**
     * Updates a given placeholder.
     *
     * @param {Object} [value] - updates placeholder (with a given value if provided, otherwise property value is used).
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.update = function(value) {
        invalidateCache.call(this);

        /* get the starting value */
        var newValue = value;
        var valueProcessors = this.getValueProcessors();

        /* value not provided? check store property */
        if (!newValue) {
            newValue = ContextHub.get(this.getKey());
        }

        /* value was not set? use default value */
        if (!newValue || (newValue === '')) {
            newValue = this.getDefaultValue();
        }

        /* process value */
        for (var x = 0; x < valueProcessors.length; x++) {
            var name = valueProcessors[x];
            var processor = ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.getProcessor(name);

            newValue = $.trim(processor.handler.call(this, newValue));
        }

        /* update placeholder */
        if (this.element.val() !== newValue) {
            this.element.text(newValue);
        }
    };

    /**
     * Returns property name of a given placeholder.
     *
     * @returns {String} - property name
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getPropertyName = function() {
        invalidateCache.call(this);

        return this.propertyName || '';
    };

    /**
     * Returns property key name (same as used by the store in persistence).
     *
     * @returns {String} - property key name
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getKey = function() {
        invalidateCache.call(this);

        return this.keyName || '';
    };

    /**
     * Returns default value of a placeholder.
     *
     * @returns {String} - default value of a placeholder
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getDefaultValue = function() {
        invalidateCache.call(this);

        return this.defaultValue || '';
    };

    /**
     * Returns a list of property value processors.
     *
     * @returns {Array} - list of property value processors to be applied
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.getValueProcessors = function() {
        return this.processors || [];
    };

    /**
     * Returns true if given PropertyPlaceholder is valid.
     *
     * @returns {Boolean} - true if this property placeholder is valid
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder.prototype.isValid = function() {
        return !!this.propertyName;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.unregister}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.unregisterAllProcessors}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.getAllProcessors}
 * {@see ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.getProcessor}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.PropertyProcessor.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Registered property processors.
     *
     * @type {Object}
     */
    var registeredProcessors = {};

    /**
     * Property Processor Manager - singleton class. Registers property processor.
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor = {};

    /**
     * Registers given property processor - old one will be overwritten.
     *
     * @param {String} processorName - processor name
     * @param {Function} handler - processor handler
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register = function(processorName, handler) {
        if ((typeof processorName === 'string') && processorName.length) {
            registeredProcessors[processorName] = {
                processorName: processorName,
                handler: handler
            };
        }
    };

    /**
     * Unregisters given property processor.
     *
     * @param {String} processorName - processor name
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.unregister = function(processorName) {
        delete registeredProcessors[processorName];
    };

    /**
     * Unregisters all property processors.
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.unregisterAllProcessors = function() {
        registeredProcessors = {};
    };

    /**
     * Returns all property processors.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.getAllProcessors = function() {
        return registeredProcessors;
    };

    /**
     * Dummy property processor.
     *
     * @private
     * @type {Object}
     */
    var dummyProcessor = {
        processorName: 'default',
        handler: function(value) {
            return value;
        }
    };

    /**
     * Returns property processor handler registered for a given name.
     *
     * @param {String} processorName - processor name
     * @return {Object} - property processor (dummy processor is passed if a requested one does not exist)
     */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.getProcessor = function(processorName) {
        return registeredProcessors[processorName] || dummyProcessor;
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.info}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.register}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.unregister}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.updatePlaceholder}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getVariantContent}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getBestCandidate}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getCurrentlyLoaded}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.isRegistered}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getTeaserId}
 * {@see ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.toString}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.Teaser.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /*
     * Supported WCM modes: https://docs.adobe.com/docs/en/aem/6-3/develop/ref/javadoc/com/day/cq/wcm/api/WCMMode.html
     * Note that teaser contains end-user content, thus we don't want any decorations which "edit" potentially brings.
     */
    var SUPPORTED_WCMMODES = {
        analytics: 1,
        design: 1,
        disabled: 1,
        preview: 1,
        read_only: 1
    };

    /**
     * Updates given url by adding "wcmmode" parameter (only on author) if it's needed.
     *
     * @private
     * @param {String} url - url
     * @returns {String} updated url
     */
    var updateVariantUrl = function(url) {
        var result = url;

        if (ContextHub.Constants.MODE === 'ui') {
            var wcmMode = new RegExp('[\?&]wcmmode=([^&#]*)').exec(window.location.href);

            /* check request parameter or cookie if needed */
            if (wcmMode && (wcmMode.length > 1)) {
                wcmMode = (wcmMode[1] || '').toLowerCase();
            } else {
                wcmMode = ContextHub.Utils.Cookie.getItem('wcmmode');
            }

            /* update url if supported wcmmode was requested */
            if (SUPPORTED_WCMMODES[wcmMode]) {
                result += ((url.indexOf('?') === -1) ? '?' : '&') + 'wcmmode=' + wcmMode;
            }
        }

        return result;
    };

    /**
     * Registers new teaser.
     *
     * @constructor
     * @param {Object} options - teaser options
     * @return {ContextHub.SegmentEngine.PageInteraction.Teaser}
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser = function(options) {
        /* create new object if needed */
        var Class = ContextHub.SegmentEngine.PageInteraction.Teaser;

        if (!(this instanceof Class)) {
            return ContextHub.Utils.inheritance.newInstance(Class, arguments);
        }

        /* initialize */
        options = options || {};

        this.details = {
            locationId: $.trim(options.locationId),
            variants: options.variants || [],
            strategy: $.trim(options.strategy),
            trackingURL: $.trim(options.trackingURL)
        };

        this.register();
    };

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.info = {
        className: 'Teaser',
        loadEvent: ContextHub.Constants.EVENT_TEASER_LOADED
    };

    /**
     * Registers this teaser.
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.register = function() {
        /* do nothing if required properties were not set or teaser is already registered */
        if (!this.details.locationId.length || !this.details.variants.length || this.isRegistered()) {
            return;
        }

        /* register new teaser */
        this.registered = ContextHub.SegmentEngine.PageInteraction.TeaserManager.register(this);
    };

    /**
     * Unregisters this teaser.
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.unregister = function() {
        this.registered = false;
        ContextHub.SegmentEngine.PageInteraction.TeaserManager.unregister(this);
    };

    /**
     * Updates (loads specific teaser) the teaser placeholder.
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.updatePlaceholder = function() {
        // todo: monitor updatePlaceholder() calls and execute function only once per 32ms
        var variant = this.getBestCandidate();
        var url = null;

        /* do nothing if teaser candidate is the same as currently loaded */
        if (variant) {
            var current = this.currentlyLoaded || {};

            /* updating variant url based on currently used "wcmmode" */
            url = updateVariantUrl(variant.url);

            if ((current.path === variant.path) && (current.url === url)) {
                return;
            }
        }

        /* update placeholder */
        if (variant) {
            /* remember which variant is loaded */
            this.currentlyLoaded = $.extend(true, {}, variant, { url: url });

            /* get variant content */
            this.getVariantContent(url, function(content) {
                var element = $('#' + this.details.locationId);

                // todo: provide a way to update content (fast, slow, fade-in, fade-out, etc)
                /* update placeholder */
                element.html(content);

                /* announce that teaser variant was loaded */
                ContextHub.eventing.trigger(ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.info.loadEvent, {
                    teaser: this,
                    variant: variant,
                    key: this.details.locationId,
                    action: 'set',
                    value: 'loaded'
                }, {
                    defer: 0
                });
            }.bind(this));
        } else {
            /* clear element */
            delete this.currentlyLoaded;
            // todo: clearElement()
        }
    };

    /**
     * Returns content of chosen teaser variant.
     *
     * @param {String} url - content url
     * @param {Function} successHandler - success handler
     * @param {Function} [failureHandler] - failure handler
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getVariantContent = function(url, successHandler, failureHandler) {
        var cache = ContextHub.SegmentEngine.PageInteraction.Cache.get(url);

        /* is result cached? */
        if (cache) {
            successHandler.call(this, cache.content, cache.status, cache.xhr);
            return;
        }

        /* result was not cached - perform ajax call */
        var options = {
            url: url,
            async: true
        };

        /* perform request */
        var request = $.ajax(options);

        /* on success */
        request.done(function(content, status, xhr) {
            ContextHub.SegmentEngine.PageInteraction.Cache.set(url, { content: content, status: status, xhr: xhr, url: url });
            successHandler.call(this, content, status, xhr);
        });

        /* on failure */
        if (typeof failureHandler === 'function') {
            request.fail(function(error) {
                failureHandler.call(this, error);
            });
        }
    };

    /**
     * Returns best teaser candidate for a given strategy.
     *
     * @returns {Object|null} - best matching teaser
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getBestCandidate = function() {
        var teaser = null;
        var candidates = [];
        var defaultCandidates = [];
        var resolvedSegments = ContextHub.SegmentEngine.SegmentManager.getResolvedSegments({ returnLookup: true });
        var teaserVariants = this.details.variants;

        // todo: use pre-selected experience if campaign store is loaded and campaign is forced: (campaignStore && campaignStore.isCampaignSelected())

        /* iterate over all candidates */
        for (var x = 0; x < teaserVariants.length; x++) {
            var item = teaserVariants[x];
            var segments = item.segments || [];
            var matching = false;
            var isDefault = false;

            /* by default - no boost for this teaser variant */
            item.boost = 0;

            /* if a teaser variant have empty list of segments, it's automatically considered as a valid candidate */
            if (segments.length === 0) {
                matching = true;
                isDefault = true;
            } else {
                /* iterate over a list of segments assigned to a given teaser variant and note highest segment boost */
                for (var y = 0; y < segments.length; y++) {
                    var segment = resolvedSegments[segments[y]];

                    /* is this given segment resolved? */
                    if (typeof segment !== 'undefined') {
                        /* teaser variant is a valid candidate if at least one of required segments is resolved */
                        matching = true;

                        /* note highest boost */
                        item.boost = Math.max(item.boost, segment.boost || 0);
                    }
                }
            }

            /* given teaser variant is considered as a valid candidate */
            if (matching) {
                var bucket = isDefault ? defaultCandidates : candidates;

                bucket.push(item);
            }
        }

        /* add default variants if candidates list is empty or strategy is "random" */
        if ((candidates.length === 0) || (this.details.strategy === 'random')) {
            candidates = [].concat.call(candidates, defaultCandidates);
        }

        /* choose one teaser variant from a list of candidates */
        if (candidates.length) {
            /* sort candidates descending basing on a boost property */
            candidates.sort(function(a, b) {
                return b.boost - a.boost;
            });

            /* choose one candidate basing on selected strategy (or first candidate if strategy does not exist) */
            teaser = ContextHub.SegmentEngine.PageInteraction.StrategyManager.chooseCandidate(candidates, this.details.strategy);
        }

        return teaser;
    };

    /**
     * Returns information about currently loaded teaser.
     *
     * @returns {Object|null} - currently loaded teaser or null
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getCurrentlyLoaded = function() {
        return this.currentlyLoaded || null;
    };

    /**
     * Returns true if this teaser is registered.
     *
     * @return {Boolean} - true if teaser is registered
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.isRegistered = function() {
        return this.registered === true;
    };

    /**
     * Returns teaser id (html element id).
     *
     * @returns {String} - teaser id
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.getTeaserId = function() {
        return this.details.locationId;
    };

    /**
     * Pretty print of the teaser.
     *
     * @override
     * @returns {String} - human readable Teaser object representation
     */
    ContextHub.SegmentEngine.PageInteraction.Teaser.prototype.toString = function() {
        var details = [];

        $.each(details, function(key, value) {
            details.push(key + ': "' + value + '"');
        });

        return this.info.className + '(' + details.join(', ') + ')';
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.info}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.register}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.unregister}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.unregisterAllTeasers}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.getAllTeasers}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.getTeaser}
 * {@see ContextHub.SegmentEngine.PageInteraction.TeaserManager.refreshAllTeasers}
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.TeaserManager.js');

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Registered teasers.
     *
     * @type {Object}
     */
    var registeredTeasers = {};

    /**
     * Teaser Manager - singleton class. Registers, unregisters teasers.
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager = {};

    /**
     * Information about this object.
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.info = {
        registerEvent: ContextHub.Constants.EVENT_TEASER_REGISTERED,
        unregisterEvent: ContextHub.Constants.EVENT_TEASER_UNREGISTERED
    };

    /**
     * Registers given teaser.
     *
     * @param {ContextHub.SegmentEngine.PageInteraction.Teaser} teaser - teaser to register
     * @returns {Boolean} - true if teaser was registered
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.register = function(teaser) {
        /* do nothing if argument is not a segment instance or if condition is not set */
        if (!(teaser instanceof ContextHub.SegmentEngine.PageInteraction.Teaser)) {
            return false;
        }

        registeredTeasers[teaser.getTeaserId()] = teaser;

        /* announce segment registration */
        ContextHub.eventing.trigger(ContextHub.SegmentEngine.PageInteraction.TeaserManager.info.registerEvent, {
            teaser: teaser,
            key: teaser.getTeaserId(),
            action: 'set',
            value: 'registered'
        }, {
            defer: 0
        });

        return true;
    };

    /**
     * Unregisters given teaser.
     *
     * @param {String|ContextHub.SegmentEngine.PageInteraction.Teaser} teaserId - teaser id or teaser instance
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.unregister = function(teaserId) {
        var teaser;

        if (teaserId instanceof ContextHub.SegmentEngine.PageInteraction.Teaser) {
            teaser = teaserId;
        } else {
            teaser = this.getTeaser(teaserId);
        }

        if (teaser) {
            teaser.registered = false;
            delete registeredTeasers[teaser.getTeaserId()];

            /* announce segment unregistration */
            ContextHub.eventing.trigger(ContextHub.SegmentEngine.PageInteraction.TeaserManager.info.unregisterEvent, {
                teaser: teaser,
                key: teaser.getTeaserId(),
                action: 'remove',
                value: 'unregistered'
            }, {
                defer: 0
            });
        }
    };

    /**
     * Unregisters all teasers.
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.unregisterAllTeasers = function() {
        $.each(registeredTeasers, function(teaserId, teaser) {
            teaser.unregister();
        });
    };

    /**
     * Returns all registered teasers.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.getAllTeasers = function() {
        return registeredTeasers;
    };

    /**
     * Returns registered teaser with a specific id.
     *
     * @param {String} teaserId - teaser id
     * @return {ContextHub.SegmentEngine.PageInteraction.Teaser|null} - teaser or null
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.getTeaser = function(teaserId) {
        return registeredTeasers[teaserId] || null;
    };

    /**
     * Updates all teasers on a page.
     *
     * @param {Boolean} [invalidateSegments] - indicates whether segments should be re-resolved
     */
    ContextHub.SegmentEngine.PageInteraction.TeaserManager.refreshAllTeasers = function(invalidateSegments) {
        if (invalidateSegments) {
            ContextHub.SegmentEngine.SegmentManager.invalidateCache();
        }

        for (var teaserId in registeredTeasers) {
            if (registeredTeasers.hasOwnProperty(teaserId)) {
                var teaser = registeredTeasers[teaserId];

                teaser.updatePlaceholder();
            }
        }
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.StrategyManager.js');

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.register}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.unregister}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.unregisterAllStrategies}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.getAllStrategies}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.getStrategy}
 * {@see ContextHub.SegmentEngine.PageInteraction.StrategyManager.chooseCandidate}
 */

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Registered strategies.
     *
     * @type {Object}
     */
    var registeredStrategies = {};

    /**
     * Strategy Manager - singleton class.
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager = {};

    /**
     * Registers given strategy - old one will be overwritten.
     *
     * @param {String} strategyName - strategy name
     * @param {String} displayName - display name
     * @param {Function} handler - strategy handler
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.register = function(strategyName, displayName, handler) {
        if ((typeof strategyName === 'string') && strategyName.length) {
            registeredStrategies[strategyName] = {
                strategyName: strategyName,
                displayName: displayName,
                handler: handler
            };
        }
    };

    /**
     * Unregisters given strategy.
     *
     * @param {String} strategyName - strategy name
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.unregister = function(strategyName) {
        delete registeredStrategies[strategyName];
    };

    /**
     * Unregisters all strategies.
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.unregisterAllStrategies = function() {
        registeredStrategies = {};
    };

    /**
     * Returns all strategies.
     *
     * @return {Object}
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.getAllStrategies = function() {
        return registeredStrategies;
    };

    /**
     * Dummy strategy - returns first candidate.
     *
     * @private
     * @type {Object|null}
     */
    var dummyStrategy = {
        strategyName: 'default',
        displayName: 'Default (first teaser candidate)',
        handler: function(candidates) {
            return (candidates || [])[0] || null;
        }
    };

    /**
     * Returns strategy handler registered for a given name.
     *
     * @param {String} strategyName - strategy name
     * @return {Object} - strategy (dummy strategy is passed if a requested one does not exist)
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.getStrategy = function(strategyName) {
        return registeredStrategies[strategyName] || dummyStrategy;
    };

    /**
     * Chooses one candidate basing on selected strategy.
     *
     * @param {Array} candidates - list of candidates
     * @param {String} strategyName - strategy name
     * @returns {Object|null} - returns candidate or null
     */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.chooseCandidate = function(candidates, strategyName) {
        var strategy = ContextHub.SegmentEngine.PageInteraction.StrategyManager.getStrategy(strategyName);

        return strategy.handler.call(this, candidates);
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - PageInteraction.Cache.js');

/**
 * globals
 * -------
 *
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache}
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache.set}
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache.get}
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache.getAllItems}
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache.clear}
 * {@see ContextHub.SegmentEngine.PageInteraction.Cache.clearAllItems}
 */

(function($, window) {
    'use strict';

    window.ContextHub.SegmentEngine.PageInteraction = window.ContextHub.SegmentEngine.PageInteraction || {};

    /**
     * Cache registry.
     *
     * @type {Object}
     */
    var cache = {};

    /**
     * Cache Manager - singleton class.
     */
    ContextHub.SegmentEngine.PageInteraction.Cache = {};

    /**
     * Stores specified value under a given key.
     *
     * @param {String} key - key name
     * @param {Object} value - value
     */
    ContextHub.SegmentEngine.PageInteraction.Cache.set = function(key, value) {
        cache[key] = value;
    };

    /**
     * Returns cached value stored under a given key.
     *
     * @param {String} key - key name
     * @returns {Object|null} - stored value
     */
    ContextHub.SegmentEngine.PageInteraction.Cache.get = function(key) {
        return cache[key] || null;
    };

    /**
     * Returns cache storage.
     *
     * @returns {Object} - storage
     */
    ContextHub.SegmentEngine.PageInteraction.Cache.getAllItems = function() {
        return cache || {};
    };

    /**
     * Removes data stored under given key.
     *
     * @param {String} key - key name
     */
    ContextHub.SegmentEngine.PageInteraction.Cache.clear = function(key) {
        delete cache[key];
    };

    /**
     * Removes all data from cache.
     */
    ContextHub.SegmentEngine.PageInteraction.Cache.clearAllItems = function() {
        cache = {};
    };

})(ContextHubJQ, window);

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - util.case-manipulation.js');

(function() {
    'use strict';

    /**
     * Function returning lowercase string given as an input.
     *
     * @param {String} value - input string
     * @returns {String} lowercase string
     */
    var toLowerCase = function(value) {
        return String(value).toLowerCase();
    };

    /**
     * Function returning uppercase string given as an input.
     *
     * @param {String} value - input string
     * @returns {String} uppercase string
     */
    var toUpperCase = function(value) {
        return String(value).toUpperCase();
    };

    /**
     * Function returning title case string given as an input.
     *
     * @param {String} value - input string
     * @returns {String} title case string
     */
    var toTitleCase = function(value) {
        return String(value).toLowerCase().replace(/(^| )+(.)/g, function(letter) { return letter.toUpperCase(); });
    };

    /* property processors registration */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register('lower-case', toLowerCase);
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register('upper-case', toUpperCase);
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register('title-case', toTitleCase);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - util.number-formatting.js');

(function() {
    'use strict';

    /**
     * Converts unix timestamp to a date (format: YYYY-mm-dd HH:MM:SS).
     *
     * @param {Number} timestamp - unix timestamp
     * @returns {String} - formatted date
     */
    var timestampToDate = function(timestamp) {
        var pad = function(number) { return ((number <= 9) ? '0' : '') + number; };
        var date = new Date(timestamp * 1000);
        date = isNaN(date.getMilliseconds()) ? new Date() : date;

        return [
            [ date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDay()) ].join('-'),
            [ pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds()) ].join(':')
        ].join(' ');
    };

    /* number formatting utilities registration */
    ContextHub.SegmentEngine.PageInteraction.PropertyProcessor.register('timestamp-to-date', timestampToDate);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - task.page-update-watcher.js');

(function($, window) {
    'use strict';

    /* is mutation observer supported? */
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (MutationObserver) {
        /* observer configuration */
        var config = {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true,
            attributeFilter: [
                ContextHub.SegmentEngine.PageInteraction.info.propertyHolder,
                ContextHub.SegmentEngine.PageInteraction.info.defaultHolder,
                ContextHub.SegmentEngine.PageInteraction.info.processorHolder
            ]
        };

        /* observer instance */
        $(function() {
            var observer = new MutationObserver(function(mutations) {
                var placeholderSelector = '[' + ContextHub.SegmentEngine.PageInteraction.info.propertyHolder + ']';
                var toUpdate = [];

                /* iterate over dom changes */
                for (var x = 0; x < mutations.length; x++) {
                    var mutation = mutations[x];

                    /* find property placeholders and add them to the list */
                    $.merge(toUpdate, $(mutation.addedNodes).filter(placeholderSelector));

                    /* attribute update */
                    if (mutation.attributeName && mutation.target) {
                        toUpdate.push(mutation.target);
                    }
                }

                /* should we update something? */
                $.each($.unique(toUpdate), function(idx, element) {
                    var placeholder = ContextHub.SegmentEngine.PageInteraction.PropertyPlaceholder(element);

                    /* update placeholder */
                    if (placeholder.isValid()) {
                        placeholder.update();
                    }
                });
            });

            /* start observing changes */
            observer.observe(window.document.body, config);
        });
    }

    /* find all already existing property placeholders and do initial update */
    $(function() {
        var placeholders = ContextHub.SegmentEngine.PageInteraction.getPropertyPlaceholders();

        /* update placeholders */
        $.each(placeholders, function(idx, placeholder) {
            if (placeholder.isValid()) {
                placeholder.update();
            }
        });
    });

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - task.data-update-watcher.js');

(function($) {
    'use strict';

    /* event selector */
    var eventSelector = 'page-interaction';

    /* "store-updated" listener used to update page elements using ContextHub's properties */
    ContextHub.eventing.on(ContextHub.Constants.EVENT_STORE_UPDATED, function(event, data) {
        var storeName = (data || {}).store;
        var matchingPlaceholders = ContextHub.SegmentEngine.PageInteraction.getPropertyPlaceholders(storeName);

        /* update placeholders */
        $.each(matchingPlaceholders, function(idx, placeholder) {
            /* check if value of a given property was modified (either set or removed) */
            var propertyName = placeholder.getPropertyName();
            var wasUpdated = this.eventData.keys.set.hash[propertyName];
            var wasRemoved = this.eventData.keys.removed.hash[propertyName];
            var value = wasUpdated ? wasUpdated.value : undefined;

            /* update placeholder */
            if (wasUpdated || wasRemoved) {
                placeholder.update(value);
            }
        }.bind({ eventData: data }));
    }, eventSelector, true);

}(ContextHubJQ));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2016 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - task.teaser-update.js');

(function($) {
    'use strict';

    var UPDATE_DELAY = 80;
    var scheduledUpdate = 0;

    /* updates all teasers on the page */
    var updateAllTeasers = function() {
        // todo: CQ-54356 (if pagedata has an experience set - use it instead and return (simulation))
        var allTeasers = ContextHub.SegmentEngine.PageInteraction.TeaserManager.getAllTeasers();

        $.each(allTeasers, function(id, teaser) {
            if (teaser.isRegistered()) {
                teaser.updatePlaceholder();
            }
        });
    };

    /* triggers teaser update on the page (that takes effect 80ms after last request to avoid race conditions) */
    var requestTeaserUpdate = function() {
        var now = new Date().getTime();

        /* should we update teasers already? */
        if ((now - scheduledUpdate) >= UPDATE_DELAY) {
            updateAllTeasers();
            scheduledUpdate = 0;
            return;
        }

        /* if not, retry in next animation frame (in ~16ms) */
        window.requestAnimationFrame(requestTeaserUpdate);
    };

    // todo: CQ-54356 (do nothing if campaign store is loaded and campaign is pre-selected by a user)

    /* wait for stores to initialize to start teaser updater */
    ContextHub.eventing.once([ ContextHub.Constants.EVENT_ALL_STORES_READY, ContextHub.Constants.EVENT_STORES_PARTIALLY_READY ], function() {
        /* update teaser placeholder when: segments are updated, campaign store is updated, teaser gets registered */
        var updateEvents = [
            ContextHub.Constants.EVENT_SEGMENT_UPDATED,
            ContextHub.Constants.EVENT_STORE_UPDATED + ':campaign',
            ContextHub.Constants.EVENT_TEASER_REGISTERED
        ];

        ContextHub.eventing.off(updateEvents, 'teaser-updater');
        ContextHub.eventing.on(updateEvents, function() {
            var startNewTask = scheduledUpdate === 0;

            /* reschedule updating */
            scheduledUpdate = new Date().getTime() + UPDATE_DELAY;

            /* start new task if needed */
            if (startNewTask) {
                requestTeaserUpdate();
            }
        }, 'teaser-updater', true);
    }, 'teaser-initialization', true);

}(ContextHubJQ));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - strategy.first.js');

(function() {
    'use strict';

    /**
     * Returns first candidate or null.
     *
     * @param {Array} candidates - list of candidates
     * @returns {Object|null} - returns first candidate or null
     */
    var firstCandidate = function(candidates) {
        return (candidates || [])[0] || null;
    };

    /* register strategy */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.register('first', 'First candidate', firstCandidate);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - strategy.last.js');

(function() {
    'use strict';

    /**
     * Returns last candidate or null.
     *
     * @param {Array} candidates - list of candidates
     * @returns {Object|null} - returns last candidate or null
     */
    var lastCandidate = function(candidates) {
        var item;

        if (candidates) {
            item = candidates[candidates.length - 1];
        }

        return item || null;
    };

    /* register strategy */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.register('last', 'Last candidate', lastCandidate);

})();

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.segment-engine.page-interaction - strategy.random.js');

(function() {
    'use strict';

    /**
     * Returns random candidate or null.
     *
     * @param {Array} candidates - list of candidates
     * @returns {Object|null} - returns random candidate or null
     */
    var randomCandidate = function(candidates) {
        var item;

        if (candidates) {
            item = candidates[Math.floor(Math.random() * candidates.length)];
        }

        return item || null;
    };

    /* register strategy */
    ContextHub.SegmentEngine.PageInteraction.StrategyManager.register('random', 'Random', randomCandidate);

})();
/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/* eslint new-cap: 0 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.finalize - ContextHub.store-initialization.js');

(function($, window) {
    'use strict';

    /* helpers */
    var ns = ContextHub;
    var config = window.ContextHubKernelConfig || {};
    var totalDuration = ns.Shared.timers.start();

    /* registering configured stores */
    ns.console.log(ns.Shared.timestamp(), '[+] starting registration and initialization of the stores');

    $.each(config.stores || {}, function(name, definition) {
        /* get store implementation */
        var implementation = ns.Utils.storeCandidates.getStoreFromCandidates(definition);

        /* register if implementation is provided */
        if (implementation) {
            /* we have to use try/catch to catch errors per store */
            try {
                var storeDuration = ns.Shared.timers.start();
                var timestamp = ns.Shared.timestamp();

                /* register store and apply config */
                ns.registerStore(name, new implementation(name, definition.config));
                ns.console.log(timestamp, '[+] initializing "' + name + '" store (' + ns.Shared.timers.finish(storeDuration) + 'ms)');
            } catch (error) {
                ns.console.error('Store "' + definition.type + '" (', implementation, ') could not be initialized:', error);
            }
        }
    });

    /* all stores got initialized */
    ns.console.log(ns.Shared.timestamp(), '[+] all stores initialized (' + ns.Shared.timers.finish(totalDuration) + 'ms)');

}(ContextHubJQ, window));

/*
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

ContextHub.console.log(ContextHub.Shared.timestamp(), '[loading] contexthub.finalize - ContextHub.finalization.js');

/* unload handler */
var unloadEverything = function() {
    if (!window.ContextHub) {
        return;
    }

    /* eventing */
    ContextHub.eventing.disableEventing();
    ContextHub.eventing.unbindAllHandlers();

    /* segmentation */
    if (ContextHub.SegmentEngine) {
        ContextHub.SegmentEngine.SegmentManager.unregisterAllSegments();
        ContextHub.SegmentEngine.ScriptManager.unregisterAllScripts();
    }

    /* ui */
    var frame = ContextHub.UIFrame && ContextHub.UIFrame[0].contentWindow;

    if (frame && frame.ContextHubJQ) {
        frame.ContextHubJQ('*').off();
        frame.ContextHubJQ('html').remove();
    }

    /* references */
    if (frame) {
        delete frame.$;
        delete frame.ContextHubJQ;
    }

    delete window.ContextHubJQ;
    delete top.window.ContextHubJQ;
    delete top.window.ContextHub;
};

/* attach unload handlers */
window.onbeforeunload = unloadEverything;

if (window.top !== window) {
    window.top.onbeforeunload = unloadEverything;
}

ContextHub.eventing.on('ui-initialized', function() {
    var frame = ContextHub.UIFrame && ContextHub.UIFrame[0];

    if (frame) {
        frame.contentWindow.onbeforeunload = unloadEverything;
    }
}, 'unload-handler', true);

/* do not add code below this line */
ContextHub.console.timeStamp('contexthub.stop');
ContextHub.console.timeEnd('contexthub.js');
