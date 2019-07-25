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
  let color = event.target.id.replace(/Button/, '');
};

const addBlock = color => {
  console.log(`adding block of color ${color}`);
  let targetElem = $('blockContainer');
  targetElem.append(`<li class="${color} block"></li>`);
};
