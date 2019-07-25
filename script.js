//js script

console.log('js sourced');

$(document).ready(handleReady);

function handleReady() {
	$('#redButton').on('click', handleClick);
	$('#yellowButton').on('click', handleClick);
	$('#blueButton').on('click', handleClick);
	$('#greenButton').on('click', handleClick);
	$('#blockContainer').on('click', '.block', handleDelete);
}

const handleClick = () => {
	//handleClick fetches color of button, then uses that to run addBlock function with that color
	let color = event.target.id.replace(/Button/, '');
	addBlock(color);
	countBlocks(color);
};

function handleDelete() {
	let color = event.target.id.replace(/ block/, '');
	$(this).remove();
	countBlocks(color);
}

const addBlock = color => {
	/* addBlock adds a block of color passed in to the DOM blockContainer element. */
	console.log(`adding block of color ${color}`);
	$('#blockContainer').append(`<li class="${color} block"></li>`);
};

const countBlocks = color => {
	let counter = 0;
	// increase counter for every li with class containing the color
	$('.block').each(function() {
		if ($(this).hasClass(`${color}`)) {
			counter++;
		}
	});
	let buttonId = $(`#${color}Button`);

	buttonId.text(counter).addClass(`${color} clicked`);
};
