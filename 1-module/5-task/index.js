/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
	
	let result;

	if( str.length > maxlength ) {
		return result = str.slice(0, maxlength-1) + '…';
	}

	return str;
}