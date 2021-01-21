/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

	let result;

	if (n === 0) {
		return 1;
	} else if (n > 0) {

		for (var i = result = 1; i <= n; i++) {
			result *= i;
		}
		return result;

	} else {
		return false;
	}
}