//js script

console.log('js sourced');

$(document).ready(handleReady);

function handleReady() {
	$('#redButton').on('click', handleClick);
	$('#yellowButton').on('click', handleClick);
	$('#blueButton').on('click', handleClick);
	$('#greenButton').on('click', handleClick);
	$('#blockContainer').on('click', '.block', handleDelete);
	$('#customButton').on('click', handleButtonToggle);
	$('#customAdd').on('click', handleCustomInput);
	$('#customAdd').on('click', handleButtonToggle);
	$('#customInputContainer').hide();
}

function handleClick() {
	//handleClick fetches color of button, then uses that to run addBlock function with that color
	let color = event.target.id.replace(/Button/, '');
	// determine color name based on what button is clicked
	addBlock(color); // add blocks for color
	countBlocks(color); // update block count for color
}

function handleDelete() {
	//handleDelete deletes the block item clicked and updates the color count
	let color = this.className.split(' ')[0];
	//blocks have class of ${color} block
	//this splits the classname at ' ' and returns the first word.
	$(this).remove();
	countBlocks(color);
}

function handleButtonToggle() {
	//toggles the custom input button/input fields
	$('#customInputContainer').toggle('fast');
	$('#revealCustom').toggle('fast');
}

function handleCustomInput() {
	//custom input handler -- fetches vals from num and select fields and adds blocks requested
	let num = $('#numberOfBlocks').val();
	let color = $('#colorSelect').val();

	if (!num) {
		num = 0; // ensures that num input is 0
	}
	if (!color) {
		alert('Block color must be selected');
		return; // user must select a color
	}

	while (num > 0) {
		addBlock(color);
		num--;
	} // adds blocks to display

	countBlocks(color); //updates block count for new blocks

	$('#numberOfBlocks').val('');
	$('#colorSelect').val('');
	//empties fields
}

function addBlock(color) {
	/* addBlock adds a block of color passed in to the DOM blockContainer element. */
	console.log(`adding block of color ${color}`);
	$('#blockContainer').append(`<li class="${color} block"></li>`);
}

function countBlocks(color) {
	//counts total blocks of color param, updates button face based on count.
	//face shows either COLORNAME or if >0 num of blocks with block color as background
	let counter = 0;
	$('.block').each(function() {
		if ($(this).hasClass(`${color}`)) {
			counter++;
		}
	}); //increments counter for each block with class matching color param

	let buttonId = $(`#${color}Button`);
	if (counter >= 1) {
		//changes button text to block counter with background color of block color represented
		buttonId.text(counter).addClass(`${color} clicked`);
	} else {
		//changes button text back to COLOR if no blocks are shown
		buttonId.text(color.toUpperCase()).removeClass();
	}
}
