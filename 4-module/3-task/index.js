function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let currentRow = table.rows[i];

	let ageTd = currentRow.cells[1].textContent;
	let genderTd = currentRow.cells[2].textContent;
	let availableTd = currentRow.lastElementChild.dataset.available;

	if (ageTd < 18) currentRow.style.cssText = 'text-decoration: line-through;';

	genderTd === 'm'
	? currentRow.classList.add('male')
	: currentRow.classList.add('female');

	availableTd 
	? availableTd === 'true' 
	? currentRow.classList.add('available') 
	: currentRow.classList.add('unavailable')
	: currentRow.setAttribute('hidden', '');
  }
}
