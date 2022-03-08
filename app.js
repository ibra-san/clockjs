/* Clock JS
    -> This is as simple JS clock with Date that is all. 

    3. Getting the date. That is much more indirect than time. 
        3.1: Create a function for Date. 
*/ 

const clockTemplate = document.querySelector("#clockDisplayTemplate").content; // template content
const clockTemCopy = document.importNode(clockTemplate, true);
const clockTime = clockTemCopy.querySelector("#timeContainer");
const clockDate = clockTemCopy.querySelector('#dateContainer');
const clockDisplay = document.querySelector("#clockDisplay");

const hours = clockTemCopy.querySelector("#h"); 
const seconds = clockTemCopy.querySelector("#s");
const minutes = clockTemCopy.querySelector("#m");
const separator = clockTemCopy.querySelector("#separator");



const time = () => { // Time function. 
    const today = new Date(); 
    let h = today.getHours(); 
    let m = today.getMinutes(); 
    let s = today.getSeconds(); 

    h = checkTime(h);// adds zeros before hours if the number is less than 10
    m = checkTime(m);// adds zeros before mintues if the number is less than 10
    s = checkTime(s);// adds zeros before seconds if the number is less than 10

    clockTime.textContent = h + ":" + m + ":" + s ;
    clockDisplay.appendChild(clockTime);
}

const date = () => { 
    const monthsArray = ['Jan', "Feb", 'Mar', "Apr", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    const daysArray = ['Sun', "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    const today = new Date(); 
    let day = daysArray[today.getDay()]; 
    let month = monthsArray[today.getMonth()];
    let year = today.getFullYear();
    let dayDate = today.getDate()

    clockDate.textContent = ` ${day}, ${dayDate}   ${month}  ${year}`;
    clockDisplay.appendChild(clockDate)

}

function render () { 
    time();
    date();
    setTimeout(render, 1000);
}

clockDisplay.onload = render(); // This basically says when clock display component is loaded, render the run the following function. Now I could have used window.onload = render(), that is dangerous, because if there is a function in the window has the same name it could either over right this function or this function might over right other functions. 


function checkTime (i) { // This function checks if whether the numbers in time are less than or greater than 10.
    if (i < 10) { i = "0"+i}
    return i;
}


