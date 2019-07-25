//js script

console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
  $('#redButton').on('click', buttonHandler);
  $('#yellowButton').on('click', buttonHandler);
  $('#blueButton').on('click', buttonHandler);
  $('#greenButton').on('click', buttonHandler);
}

const buttonHandler = () => {
  //buttonHandler fetches color of button, then uses that to run addBlock function with that color
  let color = event.target.id.replace(/Button/, '');
  addBlock(color);
  countBlocks(color);
};

const addBlock = color => {
  /* addBlock adds a block of color passed in to the DOM blockContainer element. */
  console.log(`adding block of color ${color}`);
  $('#blockContainer').append(`<li class="${color} block"></li>`);
};

const countBlocks = color => {
  let counter = 0;
  let colorBlocks = $('#blockContainer li');
  colorBlocks.each(function() {
    if ($(this).hasClass(`${color}`)) {
      counter++;
    }
  });
  console.log(counter);
};
