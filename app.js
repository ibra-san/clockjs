const clockTemplate = document.querySelector("#clockDisplayTemplate").content; 
const clockTemCopy = document.importNode(clockTemplate, true);
const clockTime = clockTemCopy.querySelector("#timeContainer");
const clockDate = clockTemCopy.querySelector('#dateContainer');
const clockDisplay = document.querySelector("#clockDisplay");



