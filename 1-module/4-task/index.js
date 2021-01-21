/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
	
	let firstSpamWord = '1xBet';
	let secSpamWord = 'XXX';

	str = str.toLowerCase();
	firstSpamWord = firstSpamWord.toLowerCase();
	secSpamWord = secSpamWord.toLowerCase();
	
	if (str.includes(firstSpamWord) || str.includes(secSpamWord)) return true;
	return false;
}